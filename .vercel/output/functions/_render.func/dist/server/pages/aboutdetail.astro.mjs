import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D5k8374Y.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_JXvWjokx.mjs';
import { $ as $$Layout } from '../chunks/Layout_Ce_E4fCl.mjs';
import { g as getCollection, r as renderEntry } from '../chunks/_astro_content_D4UjJ2Qc.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutDetail = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getCollection("about");
  const aboutContent = about[0];
  const { Content } = await renderEntry(aboutContent);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre m\xED", "description": "Informaci\xF3n acerca de Adri\xE1n Palomo, c\xF3mo empez\xF3 a programar y qu\xE9 es lo que le motiva a seguir desarrollando.", "canonical": "https://www.adrianpalomo.com/about", ",": true, "index": false }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "transitionName": "aboutDetail" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-2"> <article class="prose prose-stone prose-invert mb-14 flex w-full flex-col"> ${renderComponent($$result3, "Content", Content, {})} </article> <div class="h-[500px] w-auto overflow-hidden md:h-auto md:w-[400px]"> <img class="border-theme-text-light2 h-full w-full rounded-lg border-2 object-cover shadow-lg" src="/images/about/sasha.webp" alt="Sasha saludando" loading="lazy"> </div> </div> ` })} ` })}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/AboutDetail.astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/AboutDetail.astro";
const $$url = "/AboutDetail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutDetail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
