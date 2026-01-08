import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_y9OgIksR.mjs';
import 'piccolore';
import { $ as $$PageHeader } from '../chunks/PageHeader_4UC8Y4C2.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cz1ZekDG.mjs';
import { c as certifications } from '../chunks/certifications_BQ4xoOyt.mjs';
export { renderers } from '../renderers.mjs';

const $$CertificationsDetail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Certificaciones", "description": "Certificaciones salesforce de Adri\xE1n Palomo, desarrollador Salesforce Full Stack", "canonical": "https://www.adrianpalomo.com/certifications" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "transitionName": "certificationsDetail", "showTrailhead": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-4 grid grid-cols-1 gap-x-24 gap-y-6 md:grid-cols-2 [&_img]:h-auto [&_img]:w-24"> ${certifications.map((cert) => renderTemplate`<div class="flex transition-transform hover:scale-103"> <div class="flex w-3/12 items-center justify-center"> <img${addAttribute(`/images/certs/${cert.image}`, "src")}${addAttribute(`Imagen de la certificaci\xF3n ${cert.title}`, "alt")}> </div> <div class="flex w-9/12 flex-col pl-8"> <span class="text-theme-text-light mb-1 font-bold"> ${cert.title} </span> <span class="text-theme-text-light2">${cert.date}</span> <span class="text-theme-text-light2 text-sm italic">
Credential ID: ${cert.credentialId} </span> </div> </div>`)} </div> ` })} ` })}`;
}, "/home/runner/work/portfolio/portfolio/src/pages/CertificationsDetail.astro", void 0);

const $$file = "/home/runner/work/portfolio/portfolio/src/pages/CertificationsDetail.astro";
const $$url = "/CertificationsDetail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CertificationsDetail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
