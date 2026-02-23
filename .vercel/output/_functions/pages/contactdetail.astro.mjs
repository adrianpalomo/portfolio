import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, r as renderComponent, e as renderScript } from '../chunks/astro/server_D5FaFTUc.mjs';
import { $ as $$Github } from '../chunks/Github_B_bkNDWo.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_PqyjCcJB.mjs';
import { $ as $$Layout } from '../chunks/Layout_D8AibV7U.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://adrianpalomo.com");
const $$Copy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Copy;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/icons/Copy.astro", void 0);

const $$Astro$1 = createAstro("https://adrianpalomo.com");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/icons/LinkedIn.astro", void 0);

const $$Astro = createAstro("https://adrianpalomo.com");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/icons/Mail.astro", void 0);

const $$ContactDetail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "description": "Formas de contactar con Adri\xE1n Palomo, desarrollador Salesforce Full Stack", "canonical": "https://www.adrianpalomo.com/contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col justify-center lg:w-6/12 lg:flex-row"> <div class="flex items-center justify-center p-6"> <article class="flex flex-col gap-6 text-center text-pretty"> <span class="font-bold">¿Por qué contratar a un freelance y no una gran compañía?</span> <span>
La habilidad para comprender tus necesidades en un servicio
            personal(izado) son mucho mayores, encontrando sinergias que crean
            un espacio libre para la creatividad y soluciones reales a problemas
            reales.
</span> </article> </div> </div> <div class="bg-theme-text-light mb-3 h-[1px] w-[80%] lg:hidden"></div> <div class="flex flex-col justify-center gap-3 pl-4 md:pl-0 lg:ml-38 lg:w-6/12"> <div class="mb-3 flex items-center"> <span class="text-center text-sm text-pretty italic">-Únicamente consultoría o proyectos pequeños-</span> </div> <div class="flex items-center gap-3"> <a class="flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="mailto:hi@adrianpalomo.com"> ${renderComponent($$result3, "Mail", $$Mail, { "class": "size-7" })} <span>hi@adrianpalomo.com</span> </a> ${renderComponent($$result3, "Copy", $$Copy, { "id": "copyMail", "class": "hover:stroke-theme-text-light-hover size-5 hover:cursor-copy" })} </div> <div class="flex gap-2"> <a class="flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adrianpalomomagan/"> ${renderComponent($$result3, "Linkedin", $$LinkedIn, { "class": "size-7" })} <span>LinkedIn</span> </a> </div> <div class="flex gap-2"> <a class="flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/adrianpalomo/"> ${renderComponent($$result3, "Github", $$Github, { "class": "size-7" })} <span>GitHub</span> </a> </div> </div> ` })} ` })} ${renderScript($$result, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/ContactDetail.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/ContactDetail.astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/ContactDetail.astro";
const $$url = "/ContactDetail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactDetail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
