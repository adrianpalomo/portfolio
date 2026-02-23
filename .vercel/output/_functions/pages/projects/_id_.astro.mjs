import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_y9OgIksR.mjs';
import 'piccolore';
import { $ as $$PageHeader } from '../../chunks/PageHeader_CEbw7qvC.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B_zPXMdI.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_CEn84oQ1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://adrianpalomo.com");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { id: project.id },
    props: { project }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { project } = Astro2.props;
  const { data } = project;
  const {
    title,
    img,
    description,
    tags,
    links,
    technologies,
    startDate,
    endDate,
    company,
    companyLogo
  } = data;
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": img, "canonical": `https://www.adrianpalomo.com/projects/${project.id}`, ",": true, "index": false }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "transitionName": "projectsDetail" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-8 px-8"> <h1 class="text-center text-2xl font-bold">${title}</h1> <h2 class="text-center text-xl font-bold">En construcción</h2> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} ` })}`;
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/projects/[id].astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
