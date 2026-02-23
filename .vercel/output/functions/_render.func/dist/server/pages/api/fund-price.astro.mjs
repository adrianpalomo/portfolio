export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url, request }) => {
  const requestUrl = new URL(request.url);
  console.log("Fund price API called:", {
    url: requestUrl.toString(),
    params: Object.fromEntries(requestUrl.searchParams.entries())
  });
  const isin = requestUrl.searchParams.get("isin");
  const isETF = requestUrl.searchParams.get("isETF") === "true";
  if (!isin) {
    return new Response(JSON.stringify({ error: "ISIN es requerido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const normalizedIsin = isin.trim().toUpperCase().replace(/\s+/g, "");
  const isinRegex = /^[A-Z]{2}[A-Z0-9]{9}[0-9]$/;
  if (!isinRegex.test(normalizedIsin)) {
    return new Response(
      JSON.stringify({
        error: "Formato de ISIN inválido",
        message: "El ISIN debe tener 12 caracteres (2 letras + 9 alfanuméricos + 1 dígito)"
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  try {
    let price = null;
    let name = null;
    let source = "";
    if (isETF) {
      const etfUrl = `https://extraetf.com/es/etf-profile/${normalizedIsin}`;
      console.log("Fetching ETF from:", etfUrl);
      const response = await fetch(etfUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "es-ES,es;q=0.9,en;q=0.8"
        }
      });
      console.log("ETF response status:", response.status);
      if (response.ok) {
        const html = await response.text();
        console.log("HTML length:", html.length);
        const nameMatch = html.match(
          /<div class="investment-name"><h1[^>]*>\s*([^<]+)\s*<\/h1>/i
        );
        if (nameMatch && nameMatch[1]) {
          name = nameMatch[1].trim();
          console.log("ETF name found:", name);
        }
        const priceMatch = html.match(
          /<span class="ng-star-inserted">([0-9,.]+)&nbsp;(€|US\$)<\/span>/i
        );
        if (priceMatch && priceMatch[1]) {
          const priceStr = priceMatch[1].trim().replace(/\s/g, "").replace(",", ".");
          const currency = priceMatch[2];
          let priceValue = parseFloat(priceStr);
          source = "extraetf";
          console.log("ETF price found:", priceValue, currency);
          if (currency === "US$") {
            console.log("Price is in USD, converting to EUR...");
            try {
              const exchangeResponse = await fetch(
                "https://api.frankfurter.app/latest?from=USD&to=EUR"
              );
              if (exchangeResponse.ok) {
                const exchangeData = await exchangeResponse.json();
                const usdToEurRate = exchangeData.rates.EUR;
                console.log("USD to EUR rate:", usdToEurRate);
                priceValue = priceValue * usdToEurRate;
                console.log("Converted price:", priceValue, "EUR");
              } else {
                console.warn(
                  "Could not fetch exchange rate, returning USD price"
                );
              }
            } catch (error) {
              console.error("Error fetching exchange rate:", error);
            }
          }
          price = priceValue;
        } else {
          console.log("ETF price not found in HTML");
          if (html.includes("app-real-time-course")) {
            console.log(
              "Found app-real-time-course but couldn't extract price"
            );
            const idx = html.indexOf("app-real-time-course");
            const sample = html.substring(Math.max(0, idx - 100), idx + 1e3);
            console.log("HTML fragment:", sample);
          } else {
            console.log("app-real-time-course not found in HTML");
          }
        }
      }
    } else {
      const fundUrl = `https://www.quefondos.com/es/fondos/ficha/index.html?isin=${normalizedIsin}`;
      console.log("Fetching fund from:", fundUrl);
      const response = await fetch(fundUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "es-ES,es;q=0.9,en;q=0.8"
        }
      });
      console.log("Fund response status:", response.status);
      if (response.ok) {
        const html = await response.text();
        console.log("HTML length:", html.length);
        const nameMatch = html.match(
          /<div class="informe">\s*<h2>([^<]+)<\/h2>/i
        );
        if (nameMatch && nameMatch[1]) {
          name = nameMatch[1].trim();
          console.log("Fund name found:", name);
        }
        const priceMatch = html.match(
          /Valor liquidativo:\s*<\/span><span[^>]*>([0-9,.]+)\s*EUR/
        );
        if (priceMatch && priceMatch[1]) {
          const priceStr = priceMatch[1].trim().replace(/\s/g, "").replace(",", ".");
          price = parseFloat(priceStr);
          source = "quefondos";
          console.log("Fund price found:", price);
        } else {
          console.log("Fund price not found in HTML");
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
          price,
          name,
          source,
          isin: normalizedIsin
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: "Precio no encontrado",
        message: `No se pudo obtener el precio para el ISIN ${normalizedIsin}. Por favor, introduce el precio manualmente.`
      }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error al obtener precio:", error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        message: "Ocurrió un error al intentar obtener el precio. Por favor, inténtalo de nuevo más tarde."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
