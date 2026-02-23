import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, b as addAttribute, r as renderComponent, i as renderTransition, e as renderScript } from '../chunks/astro/server_D5k8374Y.mjs';
import 'clsx';
import { c as certifications } from '../chunks/certifications_BQ4xoOyt.mjs';
/* empty css                                 */
import { $ as $$Github } from '../chunks/Github_D--r5zeG.mjs';
import { g as getCollection } from '../chunks/_astro_content_D4UjJ2Qc.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_Ce_E4fCl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://adrianpalomo.com");
const $$More = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$More;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-end mt-3 lg:hidden"> <div class="rounded-full bg-white/70"> <svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg> </div> </div>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/icons/More.astro", void 0);

const $$Certifications = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="order-4 h-full w-full rounded-lg bg-black/50 p-4 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm transition-transform hover:scale-[1.04] md:order-4 md:col-span-1 md:row-span-2 xl:order-5 xl:col-span-2 xl:row-span-2 xl:px-2"${addAttribute(renderTransition($$result, "klhe4jpc", "", "certificationsDetail"), "data-astro-transition-scope")}> <a href="/CertificationsDetail" class="flex h-full flex-col gap-4"> <div class="flex h-full flex-wrap items-center justify-center gap-2 xl:gap-2"> ${certifications.map((cert) => renderTemplate`<img class="w-18"${addAttribute(`/images/certs/${cert.image}`, "src")}${addAttribute(`Imagen de la certificaci\xF3n ${cert.title}`, "alt")}>`)} </div> ${renderComponent($$result, "More", $$More, {})} </a> </section>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Certifications.astro", "self");

const $$Astro$3 = createAstro("https://adrianpalomo.com");
const $$Web = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Web;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path></svg>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/icons/Web.astro", void 0);

const $$Astro$2 = createAstro("https://adrianpalomo.com");
const $$PillLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PillLink;
  const { link, logo, name, nameAux } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex items-center justify-center gap-1 rounded-full border border-theme-text-light px-1 py-0.5 transition-all hover:cursor-alias hover:bg-black/10"${addAttribute(link, "href")} target="_blank"${addAttribute(`Link a ${nameAux}`, "aria-label")}> ${logo === "GitHub" ? renderTemplate`${renderComponent($$result, "Github", $$Github, { "class": "size-5" })}` : logo === "Web" ? renderTemplate`${renderComponent($$result, "Web", $$Web, { "class": "size-5" })}` : null} <span class="text-current text-xs text-nowrap">${name}</span> </a>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/PillLink.astro", void 0);

const $$Astro$1 = createAstro("https://adrianpalomo.com");
const $$Pills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pills;
  const { pills, pillStyle } = Astro2.props;
  const colorClasses = {
    black: "bg-black/30 text-theme-text-light",
    "gray-1": "bg-gray-600/50 text-theme-text-light",
    "gray-2": "bg-gray-900/50 text-theme-text-light",
    "blue-1": "bg-blue-700/50 text-theme-text-light",
    "blue-2": "bg-blue-900/50 text-theme-text-light",
    "red-1": "bg-red-600/50 text-theme-text-light",
    "red-2": "bg-red-900/50 text-theme-text-light",
    white: "bg-white/60 text-theme-text-light"
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-2"> ${pills.map((pill) => renderTemplate`<span${addAttribute(`rounded-full px-2 py-1 text-xs font-semibold ${colorClasses[pillStyle]}`, "class")}> ${pill} </span>`)} </div>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Pills.astro", void 0);

const $$Astro = createAstro("https://adrianpalomo.com");
const $$ProjectsSlot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsSlot;
  const {
    title,
    description,
    img,
    technologies,
    tags,
    company,
    companyLogo,
    startDate,
    endDate,
    links
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex h-full flex-col items-center gap-3"> <div class="flex flex-col text-center md:px-2"> <span class="text-theme-text-light mb-4 text-center text-xl font-bold">${title}</span> <span class="text-theme-text-light2 text-pretty">${description}</span> </div> <div class="flex grow-1 flex-col items-center justify-center gap-2"> ${renderComponent($$result, "Pills", $$Pills, { "pills": technologies, "pillStyle": "black" })} ${renderComponent($$result, "Pills", $$Pills, { "pills": tags, "pillStyle": "blue-1" })} </div> <div class="flex w-full justify-between items-center"> <div class="flex items-center m-2"> <img${addAttribute(companyLogo, "src")}${addAttribute(company, "alt")} class="h-8 w-auto rounded-lg bg-amber-50 p-0.5"> </div> ${links.length > 0 && renderTemplate`<div class="flex items-center gap-2"> ${renderComponent($$result, "PillLink", $$PillLink, { "name": "Web", "link": links[0].link, "nameAux": links[0].name, "logo": "Web" })} ${renderComponent($$result, "PillLink", $$PillLink, { "name": "GitHub", "link": links[0].link, "nameAux": links[0].name, "logo": "GitHub" })} </div>`} </div> </div>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/ProjectsSlot.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${renderScript($$result, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Projects.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section class="order-2 h-full w-full rounded-lg bg-black/45 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm transition-transform hover:cursor-grab active:cursor-grabbing md:order-2 md:col-span-3 md:row-span-2 xl:col-span-5 xl:row-span-3" data-astro-cid-amng4zvp${addAttribute(renderTransition($$result, "r3hyal6x", "", "projectsDetail"), "data-astro-transition-scope")}> <div class="embla h-full w-full" data-astro-cid-amng4zvp> <div class="embla__viewport h-full overflow-hidden" data-astro-cid-amng4zvp> <div class="embla__container ml-[calc(var(--slide-spacing)*-1)] flex h-full touch-pan-y touch-pinch-zoom" data-astro-cid-amng4zvp> ${projects.map((project) => {
    return renderTemplate`<section class="embla__slide" data-astro-cid-amng4zvp> <div class="embla__slide__numbers flex h-full items-center transition-all select-none hover:bg-black/10" data-astro-cid-amng4zvp>  <div class="hover:text-theme-text-light flex h-full w-full flex-col p-4" data-astro-cid-amng4zvp> ${renderComponent($$result, "ProjectsSlot", $$ProjectsSlot, { ...project.data, "data-astro-cid-amng4zvp": true })} </div> </div> </section>`;
  })} </div> </div> </div> </section> `;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Projects.astro", "self");

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="order-5 flex h-full w-full items-center justify-center rounded-lg bg-black/55 px-5 py-4 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm transition-transform  hover:scale-[1.04] md:order-5 md:col-span-3 md:row-span-1 xl:order-4 xl:col-span-3 xl:row-span-2"${addAttribute(renderTransition($$result, "xkzru5m6", "", "aboutDetail"), "data-astro-transition-scope")}> <a href="/AboutDetail" class="flex h-full flex-col items-center justify-center gap-4"> <div class="flex h-[90%] w-full items-center justify-center gap-4 md:overflow-auto"> <span class="text-theme-text-light text-pretty">
Tratando de entender el por qué de las cosas, descubro
        que como base indispensable para conseguir una meta propuesta debe
        haber: <span class="text-theme-remark">
pasión, esfuerzo constante e inteligencia</span>,
<span class="italic">sazonando todo esto con una pizca de suerte</span>.
        De esta forma la distancia entre un objetivo propuesto y uno conseguido
        es solo eso, distancia.
</span> </div> <div class="flex w-full justify-end"> ${renderComponent($$result, "More", $$More, {})} </div> </a> </section>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/About.astro", "self");

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="order-3 h-full w-full rounded-lg bg-black/50 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm transition-transform  md:order-3 md:col-span-2 md:row-span-2 xl:col-span-3 xl:row-span-3"> <div class="flex h-full items-center justify-center px-6 py-10"> <div class="-my-6"> <!-- Item #1 --> <div class="group relative py-2 pl-8 sm:pl-26"> <!-- Purple label --> <span class="text-theme-text-light mb-1 text-xl sm:mb-0">Minsait</span> <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> <div class="after:bg-theme-text-dark mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[5rem] sm:after:left-0 sm:after:ml-[5rem]"> <span class="text-theme-text-light bg-theme-text-dark left-0 mb-3 inline-flex h-6 w-15 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold uppercase sm:absolute sm:mb-0">2021</span> <span class="text-theme-text-light font-bold">Jr. Salesforce developer</span> </div> <!-- Content --> <span class="text-theme-text-light2">
Implementación de desarrollos, especializándome en Salesforce y
          explorando todas sus posibilidades.
</span> </div> <!-- Item #2 --> <div class="group relative py-2 pl-8 sm:pl-26"> <!-- Purple label --> <span class="text-theme-text-light mb-1 text-xl sm:mb-0">Idealista</span> <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> <div class="after:bg-theme-text-dark mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[5rem] sm:after:left-0 sm:after:ml-[5rem]"> <span class="text-theme-text-light bg-theme-text-dark left-0 mb-3 inline-flex h-6 w-15 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold uppercase sm:absolute sm:mb-0">2023</span> <span class="text-theme-text-light font-bold">Sr. Salesforce Developer</span> </div> <!-- Content --> <span class="text-theme-text-light2">
Diseñar soluciones de alto impacto, combinando perfiles funcionales y
          técnicos, con el objetivo de integrar IA en los procesos clave del
          negocio.
</span> </div> </div> </div> </section>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Experience.astro", void 0);

const $$Saludation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="order-1 flex h-full w-full items-center justify-center rounded-lg bg-black/45 p-6 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm transition-transform  md:order-1 md:col-span-3 md:row-span-1 xl:col-span-3 xl:row-span-2"> <span class="text-theme-text-light overflow-auto text-wrap"> <img class="float-left mr-4 size-21" src="/images/profile.webp" alt="Foto de perfil" style="shape-outside: circle(50%); clip-path: circle(50%);">
A mis abuelos les digo que soy informático, para los entendidos: <i class="text-theme-remark italic">Salesforce Solution Architect</i><br><br>
Me focalizo en diseñar y desarrollar aplicaciones Salesforce, especialmente enfocado en la optimización de procesos de venta,
    y con el uso de <span class="text-theme-remark">inteligencia artificial</span>.
</span> </section>`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/components/Saludation.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio", "description": "Informaci\xF3n sobre Adri\xE1n Palomo, desarrollador y consultor Full Stack del CRM Salesforce, disponible para proyectos freelance.", "canonical": "https://www.adrianpalomo.com" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col gap-6 md:grid md:grid-cols-3 md:grid-rows-6 md:gap-8 xl:max-h-[700px] xl:grid-cols-8 xl:grid-rows-5"> ${renderComponent($$result2, "Saludation", $$Saludation, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Certifications", $$Certifications, {})} ${renderComponent($$result2, "About", $$About, {})} </main> ` })}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/index.astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
