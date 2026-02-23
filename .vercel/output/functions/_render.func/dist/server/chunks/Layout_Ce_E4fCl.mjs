import { d as createAstro, c as createComponent, b as addAttribute, e as renderScript, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, h as renderHead, g as renderSlot } from './astro/server_D5k8374Y.mjs';
/* empty css                                        */
import 'clsx';
/* empty css                               */

const $$Astro$2 = createAstro("https://adrianpalomo.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/apalomo/Code/Proyectos/adrianpalomo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-full w-full rounded-lg bg-black/80 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm"> <div class="flex h-full w-full items-center justify-between px-6 md:px-12"> <div class="flex items-center"> <a href="/"> <h1 class="selectable group flex flex-col"> <span class="text-theme-text-light text-xl tracking-wider text-nowrap transition-all duration-300 ease-out group-hover:text-2xl group-hover:tracking-wide sm:group-hover:text-3xl md:text-2xl">
Adrián Palomo<span class="sr-only"> Magán</span> </span> <span class="text-theme-text-light -mt-1 text-xs transition-all duration-300 ease-out group-hover:text-sm group-hover:-mt-0.5 md:-mt-2 md:text-lg md:group-hover:text-xl md:group-hover:-mt-1">
Salesforce <span class="text-theme-text-light after:bg-theme-text-light relative inline-block text-xs text-nowrap transition-all duration-300 ease-out group-hover:text-sm group-hover:scale-105 group-hover:ml-1 after:block after:h-[1px] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:origin-left group-hover:after:scale-x-100 md:text-lg md:group-hover:text-xl">
Solution Architect
</span> </span> </h1> </a> </div> <div> <a href="https://www.idealista.com/" target="_blank" class="hidden hover:cursor-alias md:block" rel="noopener noreferrer"> <div class="group text-theme-text-light flex flex-col items-end text-sm"> <div>Actualmente trabajando en</div> <img src="/idealista_logo.webp" alt="Idealista" class="h-6 w-auto transition-all bg-white px-1 py-0.5 group-hover:bg-[#e1f56e] group-hover:scale-130 group-hover:-translate-x-3 group-hover:translate-y-1" loading="lazy" data-noindex="true"> </div> </a> </div> <nav class="flex flex-col md:flex-row md:items-center md:gap-4"> <a href="/ContactDetail" class="text-theme-text-light text-right text-sm md:text-base">
Contacto
</a> </nav> </div> </header>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-full w-full rounded-lg bg-black/90 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm"> <div class="flex h-full items-center justify-between px-7 py-4 md:px-12"> <div> <span class="text-theme-text-light2 text-xs">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Adrián Palomo
</span> </div> <nav class="text-theme-text-light flex items-center gap-4"> <a href="/LegalDetail" class="text-theme-text-light text-sm md:text-base">
Legal
</a> </nav> </div> </header>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-04-01T12:34:00-00:00",
    dateModified: "2025-04-01T12:34:00-00:00",
    mainEntity: {
      "@type": "Person",
      name: "Adri\xE1n Palomo",
      alternateName: "adrianpalomo",
      description: "Informaci\xF3n sobre Adri\xE1n Palomo, desarrollador y consultor Full Stack del CRM Salesforce, disponible para proyectos freelance.",
      image: "https://www.adrianpalomo.com/images/profile.webp"
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(profileSchema)));
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/RichResults.astro", void 0);

const $$Astro$1 = createAstro("https://adrianpalomo.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    preload,
    canonical,
    image = "https://www.adrianpalomo.com/og.webp",
    index = true
    // Valor por defecto true
  } = Astro2.props;
  const determineCanonicalURL = () => {
    if (Astro2.url.host.includes("localhost")) return "http://localhost:4321";
    return canonical || Astro2.url.pathname;
  };
  const canonicalURL = new URL(determineCanonicalURL(), Astro2.site);
  const robotsContent = index ? "index, follow, noimageindex" : "noindex, follow, noimageindex";
  return renderTemplate`<title>${`${title} | Adri\xE1n Palomo`}</title><meta name="description"${addAttribute(description, "content")}><meta charset="UTF-8">${preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`)}<link rel="canonical"${addAttribute(canonicalURL, "href")}><meta charset="UTF-8"><link rel="sitemap" href="/sitemap-index.xml"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#444444"><meta name="keywords" content="freelance salesforce,desarrollador salesforce, programador salesforce, full stack salesforce, portfolio salesforce, salesforce developer, salesforce platform developer, salesforce administrator, salesforce consultant"><meta name="author" content="Adrián Palomo"><meta name="robots"${addAttribute(robotsContent, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://adrianpalomo.com/"><meta property="og:title" content="Adrián Palomo | Portfolio"><meta property="og:site_name" content="Adrián Palomo | Portfolio"><meta property="og:description" content="Portfolio personal de Adrián Palomo - Desarrollador Salesforce Full Stack"><meta property="og:image"${addAttribute(image, "content")}><meta property="og:locale" content="es_ES"><!-- Apple --><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Adrián Palomo"><!-- Microsoft --><meta name="msapplication-TileColor" content="#444444"><meta name="msapplication-config" content="none"><link rel="icon" type="image/png" href="/images/Fav.webp">${renderComponent($$result, "RichResults", $$RichResults, {})}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://adrianpalomo.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image, index } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title, "index": index, "data-astro-cid-sckkx6r4": true })}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="relative flex min-h-dvh justify-center" data-astro-cid-sckkx6r4> <!-- Fondo fijo para iOS --> <div class="bg-wrap" data-astro-cid-sckkx6r4> <div class="bg" data-astro-cid-sckkx6r4></div> </div> <div class="relative flex min-h-screen w-full max-w-xl flex-col gap-6 p-6 md:max-w-4xl lg:max-w-5xl xl:w-7xl xl:max-w-7xl" data-astro-cid-sckkx6r4> <div class="flex h-[95px] w-full justify-center" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} </div> <div class="mb-auto flex w-full justify-center" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> <div class="flex w-full justify-center" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </div> </body></html>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
