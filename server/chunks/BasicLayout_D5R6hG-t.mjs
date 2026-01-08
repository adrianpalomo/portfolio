import { d as createAstro, c as createComponent, a as renderTemplate, g as renderSlot, h as renderHead } from './astro/server_y9OgIksR.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://adrianpalomo.com");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html> <head><title>", '</title><meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8"><meta property="og:type" content="website"><meta property="og:url" content="https://adrianpalomo.com/"><meta property="og:title" content="Adri\xE1n Palomo | Tools"><meta property="og:site_name" content="Adri\xE1n Palomo | Tools"><meta property="og:locale" content="es_ES"><meta name="robots" content="noindex, nofollow, noimageindex"><link rel="icon" type="image/png" href="/images/Fav.webp"><meta name="theme-color" content="#111627"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/a11y-light.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"><\/script>', '</head> <body style="background-color: #111627;"> ', " </body></html>"])), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/portfolio/portfolio/src/layouts/BasicLayout.astro", void 0);

export { $$BasicLayout as $ };
