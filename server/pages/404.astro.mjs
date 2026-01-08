import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_y9OgIksR.mjs';
import 'piccolore';
import { $ as $$PageHeader } from '../chunks/PageHeader_4UC8Y4C2.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cz1ZekDG.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "No encontrado", "description": "Error 404 No encontrado", ",": true, "index": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center gap-10 p-4 md:flex-row"> <div class="w-full md:w-8/12"> <img src="/404.svg" alt="404" class="h-auto w-full object-cover"> </div> <div class="flex w-full flex-col items-center gap-4 md:w-4/12"> <h1 class="text-center text-3xl font-bold">Nada que ver aquí</h1> <p class="text-center text-lg">¿Qué andas buscando, eh?</p> </div> </div> ` })} ` })}`;
}, "/home/runner/work/portfolio/portfolio/src/pages/404.astro", void 0);

const $$file = "/home/runner/work/portfolio/portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
