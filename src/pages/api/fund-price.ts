import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url, request }) => {
  const requestUrl = new URL(request.url);

  console.log("Fund price API called:", {
    url: requestUrl.toString(),
    params: Object.fromEntries(requestUrl.searchParams.entries()),
  });

  const isin = requestUrl.searchParams.get("isin");
  const isETF = requestUrl.searchParams.get("isETF") === "true";

  if (!isin) {
    return new Response(JSON.stringify({ error: "ISIN es requerido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Normalizar ISIN
  const normalizedIsin = isin.trim().toUpperCase().replace(/\s+/g, "");

  // Validar formato ISIN (12 caracteres: 2 letras + 9 alfanuméricos + 1 dígito)
  const isinRegex = /^[A-Z]{2}[A-Z0-9]{9}[0-9]$/;
  if (!isinRegex.test(normalizedIsin)) {
    return new Response(
      JSON.stringify({
        error: "Formato de ISIN inválido",
        message:
          "El ISIN debe tener 12 caracteres (2 letras + 9 alfanuméricos + 1 dígito)",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  try {
    let price: number | null = null;
    let name: string | null = null;
    let source = "";

    if (isETF) {
      // Para ETFs: scraping de extraetf.com
      const etfUrl = `https://extraetf.com/es/etf-profile/${normalizedIsin}`;
      console.log("Fetching ETF from:", etfUrl);

      const response = await fetch(etfUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        },
      });

      console.log("ETF response status:", response.status);

      if (response.ok) {
        const html = await response.text();
        console.log("HTML length:", html.length);

        // Buscar el nombre en <div class="investment-name"><h1>21Shares Bitcoin Core ETP</h1></div>
        const nameMatch = html.match(
          /<div class="investment-name"><h1[^>]*>\s*([^<]+)\s*<\/h1>/i,
        );
        if (nameMatch && nameMatch[1]) {
          name = nameMatch[1].trim();
          console.log("ETF name found:", name);
        }

        // Buscar el precio en <span class="ng-star-inserted">22,16&nbsp;US$</span>
        // Capturar tanto € como US$ (el sitio carga primero en USD y luego cambia a EUR con JS)
        const priceMatch = html.match(
          /<span class="ng-star-inserted">([0-9,.]+)&nbsp;(€|US\$)<\/span>/i,
        );

        if (priceMatch && priceMatch[1]) {
          // Eliminar espacios y convertir coma a punto
          const priceStr = priceMatch[1]
            .trim()
            .replace(/\s/g, "")
            .replace(",", ".");
          const currency = priceMatch[2];
          let priceValue = parseFloat(priceStr);
          source = "extraetf";

          console.log("ETF price found:", priceValue, currency);

          // Si el precio está en USD, convertir a EUR
          if (currency === "US$") {
            console.log("Price is in USD, converting to EUR...");

            try {
              // Usar Frankfurter API (gratuita, datos del BCE)
              const exchangeResponse = await fetch(
                "https://api.frankfurter.app/latest?from=USD&to=EUR",
              );

              if (exchangeResponse.ok) {
                const exchangeData = await exchangeResponse.json();
                const usdToEurRate = exchangeData.rates.EUR;

                console.log("USD to EUR rate:", usdToEurRate);

                // Convertir de USD a EUR
                priceValue = priceValue * usdToEurRate;
                console.log("Converted price:", priceValue, "EUR");
              } else {
                console.warn(
                  "Could not fetch exchange rate, returning USD price",
                );
              }
            } catch (error) {
              console.error("Error fetching exchange rate:", error);
              // Si falla, devolver el precio en USD de todos modos
            }
          }

          price = priceValue;
        } else {
          console.log("ETF price not found in HTML");
          // Buscar si existe app-real-time-course en el HTML
          if (html.includes("app-real-time-course")) {
            console.log(
              "Found app-real-time-course but couldn't extract price",
            );
            // Extraer el fragmento relevante para debugging
            const idx = html.indexOf("app-real-time-course");
            const sample = html.substring(Math.max(0, idx - 100), idx + 1000);
            console.log("HTML fragment:", sample);
          } else {
            console.log("app-real-time-course not found in HTML");
          }
        }
      }
    } else {
      // Para fondos: scraping de quefondos.com
      const fundUrl = `https://www.quefondos.com/es/fondos/ficha/index.html?isin=${normalizedIsin}`;
      console.log("Fetching fund from:", fundUrl);

      const response = await fetch(fundUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        },
      });

      console.log("Fund response status:", response.status);

      if (response.ok) {
        const html = await response.text();
        console.log("HTML length:", html.length);

        // Buscar el nombre en <div class="informe"><h2>NOMBRE DEL FONDO</h2>
        const nameMatch = html.match(
          /<div class="informe">\s*<h2>([^<]+)<\/h2>/i,
        );
        if (nameMatch && nameMatch[1]) {
          name = nameMatch[1].trim();
          console.log("Fund name found:", name);
        }

        // Buscar "Valor liquidativo: " seguido del precio
        const priceMatch = html.match(
          /Valor liquidativo:\s*<\/span><span[^>]*>([0-9,.]+)\s*EUR/,
        );

        if (priceMatch && priceMatch[1]) {
          // Eliminar espacios y convertir coma a punto
          const priceStr = priceMatch[1]
            .trim()
            .replace(/\s/g, "")
            .replace(",", ".");
          price = parseFloat(priceStr);
          source = "quefondos";
          console.log("Fund price found:", price);
        } else {
          console.log("Fund price not found in HTML");
          // Buscar "Valor liquidativo" en el HTML
          const vlMatch = html.match(/Valor liquidativo[^<]*<[^>]*>([^<]+)/);
          if (vlMatch) {
            console.log("Found 'Valor liquidativo' section:", vlMatch[0]);
          }
        }
      }
    }

    if (price && price > 0) {
      return new Response(
        JSON.stringify({
          price: price,
          name: name,
          source: source,
          isin: normalizedIsin,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Si no se encontró el precio
    return new Response(
      JSON.stringify({
        error: "Precio no encontrado",
        message: `No se pudo obtener el precio para el ISIN ${normalizedIsin}. Por favor, introduce el precio manualmente.`,
      }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error al obtener precio:", error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        message:
          "Ocurrió un error al intentar obtener el precio. Por favor, inténtalo de nuevo más tarde.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
