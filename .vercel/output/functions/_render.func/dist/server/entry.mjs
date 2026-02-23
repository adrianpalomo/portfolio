import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BkBZLEAz.mjs';
import { manifest } from './manifest_CxQGTIRs.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/aboutdetail.astro.mjs');
const _page3 = () => import('./pages/api/fund-price.astro.mjs');
const _page4 = () => import('./pages/certificationsdetail.astro.mjs');
const _page5 = () => import('./pages/contactdetail.astro.mjs');
const _page6 = () => import('./pages/legaldetail.astro.mjs');
const _page7 = () => import('./pages/projects/_id_.astro.mjs');
const _page8 = () => import('./pages/tools/investmentcalculator.astro.mjs');
const _page9 = () => import('./pages/tools/jsonformatter.astro.mjs');
const _page10 = () => import('./pages/tools/linesremover.astro.mjs');
const _page11 = () => import('./pages/tools/packagemerger.astro.mjs');
const _page12 = () => import('./pages/tools/soqlgeneratorbyids.astro.mjs');
const _page13 = () => import('./pages/tools.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/AboutDetail.astro", _page2],
    ["src/pages/api/fund-price.ts", _page3],
    ["src/pages/CertificationsDetail.astro", _page4],
    ["src/pages/ContactDetail.astro", _page5],
    ["src/pages/LegalDetail.astro", _page6],
    ["src/pages/projects/[id].astro", _page7],
    ["src/pages/tools/investmentCalculator.astro", _page8],
    ["src/pages/tools/jsonFormatter.astro", _page9],
    ["src/pages/tools/linesRemover.astro", _page10],
    ["src/pages/tools/packageMerger.astro", _page11],
    ["src/pages/tools/soqlGeneratorByIds.astro", _page12],
    ["src/pages/tools/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4a66414a-dc13-4c7b-b8a4-28391ac4b0fb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
