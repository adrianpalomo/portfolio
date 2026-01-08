import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_y9OgIksR.mjs';
import 'piccolore';
import { $ as $$PageHeader } from '../chunks/PageHeader_4UC8Y4C2.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cz1ZekDG.mjs';
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_CbzYVDtU.mjs';
export { renderers } from '../renderers.mjs';

const $$LegalDetail = createComponent(async ($$result, $$props, $$slots) => {
  const legal = await getCollection("legal");
  const legalContent = legal[0];
  const { Content } = await renderEntry(legalContent);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Legal", "description": "Informaci\xF3n legal del Portfolio de Adri\xE1n Palomo, desarrollador Salesforce Full Stack", "canonical": "https://www.adrianpalomo.com/legal", ",": true, "index": false }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-2"> <article class="prose prose-stone prose-invert mb-14 flex w-full flex-col text-justify"> ${renderComponent($$result3, "Content", Content, {})} </article> </div> ` })} ` })}`;
}, "/home/runner/work/portfolio/portfolio/src/pages/LegalDetail.astro", void 0);

const $$file = "/home/runner/work/portfolio/portfolio/src/pages/LegalDetail.astro";
const $$url = "/LegalDetail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LegalDetail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
