import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, b as addAttribute } from '../chunks/astro/server_D5FaFTUc.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_PqyjCcJB.mjs';
import { $ as $$Layout } from '../chunks/Layout_D8AibV7U.mjs';
export { renderers } from '../renderers.mjs';

const tools = [
  {
    path: "/tools/jsonFormatter",
    title: "JSON Formatter"
  },
  {
    path: "/tools/linesRemover",
    title: "Lines Remover"
  },
  {
    path: "/tools/soqlGeneratorByIds",
    title: "SOQL Generator by IDs"
  },
  {
    path: "/tools/packageMerger",
    title: "Salesforce Package Merger"
  },
  {
    path: "/tools/investmentCalculator",
    title: "Investment Calculator"
  }
];

const $$Astro = createAstro("https://adrianpalomo.com");
const $$Picker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picker;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex h-24 w-42 items-center justify-center rounded-lg p-3 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-md transition-transform hover:scale-105"> <span class="text-theme-text-light overflow-auto text-wrap font-bold text-center"> ${title} </span> </div>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Picker.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Herramientas", "description": "Herramientas de Adri\xE1n Palomo, desarrollador Salesforce Full Stack", "canonical": "https://www.adrianpalomo.com/tools" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": ($$result3) => renderTemplate`${tools.map((tool) => renderTemplate`${maybeRenderHead()}<a${addAttribute(tool.path, "href")}> ${renderComponent($$result3, "Picker", $$Picker, { "title": tool.title })} </a>`)}` })} ` })}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/tools/index.astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/tools/index.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
