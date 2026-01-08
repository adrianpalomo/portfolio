import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, r as renderComponent, b as addAttribute, g as renderSlot, i as renderTransition } from './astro/server_y9OgIksR.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://adrianpalomo.com");
const $$ArrowBack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowBack;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l4 4"></path><path d="M5 12l4 -4"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/ArrowBack.astro", void 0);

const $$Back = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <a class="flex items-center gap-1" href="/">${renderComponent($$result, "ArrowBack", $$ArrowBack, { "class": "size-5" })}<span> Volver</span></a> </div>`;
}, "/home/runner/work/portfolio/portfolio/src/components/Back.astro", void 0);

const $$Astro$1 = createAstro("https://adrianpalomo.com");
const $$Trailhead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Trailhead;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" aria-label="Trailhead" height="52" width="52" viewBox="0 0 520 520" fill="currentColor" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m123 370-26 30h51zm24 61h51l-26-29zm205-21 25-29 26 29zM268 22c-4-2-9-2-14 0A380 380 0 0 0 22 380v34c0 5 2 10 7 14a430 430 0 0 0 233 72h9c79-3 157-27 223-72 4-3 7-8 7-14v-34A380 380 0 0 0 268 22zM139 148c58-69 123-92 123-92 14 6 169 67 202 264h-41l-78-113c-5-7-16-9-24-4l-4 4-20 28-55-79c-5-7-16-9-24-4l-4 4-112 163-41 1c12-75 43-130 78-172zm242 172H280l26-38 24-36zM237 209l40 57-38 53h-96l41-61 43-64zm38 231-15 26a400 400 0 0 1-204-60v-25l1-26h176a44 44 0 0 0 15 62l5 3 16 7c6 2 8 8 6 13zm193-35a430 430 0 0 1-81 39l-7 2a700 700 0 0 1-49 13l-28 4 3-5c13-22 5-49-17-62l-4-2-16-7a10 10 0 0 1-5-14l1-2 15-17h187l1 26z"></path></svg>`;
}, "/home/runner/work/portfolio/portfolio/src/components/icons/Trailhead.astro", void 0);

const $$Astro = createAstro("https://adrianpalomo.com");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { transitionName, showTrailhead = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full flex-col items-center justify-center rounded-lg bg-black/60 shadow-[0px_0px_32px_-3px_#080808] backdrop-blur-sm"${addAttribute(renderTransition($$result, "nt6qdax7", "", transitionName), "data-astro-transition-scope")}> <div class="mt-4 flex h-16 w-full items-center justify-between px-6 md:px-12"> ${renderComponent($$result, "Back", $$Back, {})} ${showTrailhead && renderTemplate`<div class="flex gap-2"> <a class="flex items-center gap-2 hover:cursor-alias" target="_blank" rel="noopener noreferrer" href="https://www.salesforce.com/trailblazer/adrianpalomo"> ${renderComponent($$result, "Trailhead", $$Trailhead, { "class": "size-5" })} <span>Trailhead</span> </a> </div>`} </div> <div class="mb-10 flex w-full flex-col items-center justify-center gap-6 px-6 md:px-18 lg:flex-row"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/runner/work/portfolio/portfolio/src/components/PageHeader.astro", "self");

export { $$PageHeader as $ };
