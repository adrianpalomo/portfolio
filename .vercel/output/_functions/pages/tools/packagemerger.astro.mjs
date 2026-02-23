import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_D5FaFTUc.mjs';
import { $ as $$BasicLayout } from '../../chunks/BasicLayout_BbO7esl8.mjs';
import { a as $$Trash, $ as $$Copy2 } from '../../chunks/Trash_Byfm8e1P.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$PackageMerger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
	function parsePackage(xmlStr) {
		const parser = new DOMParser();
		return parser.parseFromString(xmlStr, 'application/xml');
	}
	function recogerTypes(doc) {
		const tipos = {};
		const list = doc.getElementsByTagName('types');
		for (let t of list) {
			const nameNode = t.getElementsByTagName('name')[0];
			if (!nameNode) continue;
			const name = nameNode.textContent;
			if (!tipos[name]) tipos[name] = [];
			for (let m of t.getElementsByTagName('members')) {
				const text = m.textContent;
				if (!tipos[name].includes(text)) tipos[name].push(text);
			}
		}
		return tipos;
	}
	function obtenerVersion(doc) {
		const v = doc.getElementsByTagName('version')[0];
		return v ? v.textContent : '';
	}
	function buildPackage(tipos, version) {
		let out = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\\n';
		out += '<Package xmlns="http://soap.sforce.com/2006/04/metadata">\\n';
		for (let name of Object.keys(tipos)) {
			out += '\\t<types>\\n';
			for (let mem of tipos[name]) {
				out += \`\\t\\t<members>\${mem}</members>\\n\`;
			}
			out += \`\\t\\t<name>\${name}</name>\\n\`;
			out += '\\t</types>\\n';
		}
		out += \`\\t<version>\${version}</version>\\n\`;
		out += '</Package>';
		return out;
	}
	function merge() {
		const outArea = document.getElementById('output');
		outArea.classList.remove('error');
		const xml1 = document.getElementById('input1').value.trim();
		const xml2 = document.getElementById('input2').value.trim();

		// Si ambos campos est\xE1n vac\xEDos, limpiar output y no hacer nada m\xE1s
		if (!xml1 && !xml2) {
			outArea.value = '';
			return;
		}

		try {
			const doc1 = parsePackage(xml1);
			const doc2 = parsePackage(xml2);
			const tipos1 = recogerTypes(doc1);
			const tipos2 = recogerTypes(doc2);
			for (let name in tipos2) {
				if (!tipos1[name]) {
					tipos1[name] = tipos2[name].slice();
				} else {
					for (let mem of tipos2[name]) {
						if (!tipos1[name].includes(mem)) tipos1[name].push(mem);
					}
				}
			}
			const version = obtenerVersion(doc1) || obtenerVersion(doc2) || '';
			outArea.value = buildPackage(tipos1, version);
		} catch (e) {
			outArea.value = e.message;
			outArea.classList.add('error');
		}
	}

	function saveToLocalStorage() {
		const xml1 = document.getElementById('input1').value;
		const xml2 = document.getElementById('input2').value;

		localStorage.setItem('packageMerger_input1', xml1);
		localStorage.setItem('packageMerger_input2', xml2);
	}

	function loadFromLocalStorage() {
		const savedInput1 = localStorage.getItem('packageMerger_input1');
		const savedInput2 = localStorage.getItem('packageMerger_input2');

		if (savedInput1) {
			document.getElementById('input1').value = savedInput1;
		}
		if (savedInput2) {
			document.getElementById('input2').value = savedInput2;
		}

		// Ejecutar merge si hay datos guardados
		if (savedInput1 || savedInput2) {
			merge();
		}
	}

	document.getElementById('input1').addEventListener('input', function () {
		saveToLocalStorage();
		merge();
	});

	document.getElementById('input2').addEventListener('input', function () {
		saveToLocalStorage();
		merge();
	});

	document.getElementById('copy').addEventListener('click', () => {
		const texto = document.getElementById('output').value;

		if (navigator.clipboard) {
			navigator.clipboard.writeText(texto).then(() => {
				// Feedback visual
				const btn = document.getElementById('copy');
				const originalColor = btn.style.color;
				btn.style.color = '#10b981';
				setTimeout(() => {
					btn.style.color = originalColor;
				}, 1000);
			});
		} else {
			// Fallback para navegadores antiguos
			const outArea = document.getElementById('output');
			outArea.select();
			document.execCommand('copy');
		}
	});

	function clearAll() {
		// Limpiar campos
		document.getElementById('input1').value = '';
		document.getElementById('input2').value = '';
		document.getElementById('output').value = '';

		// Limpiar localStorage
		localStorage.removeItem('packageMerger_input1');
		localStorage.removeItem('packageMerger_input2');

		// Remover clase de error si existe
		document.getElementById('output').classList.remove('error');
	}

	document.getElementById('clearAll').addEventListener('click', clearAll);

	// Cargar datos guardados al iniciar
	window.addEventListener('load', loadFromLocalStorage);
<\/script> `], ["", ` <script type="module">
	function parsePackage(xmlStr) {
		const parser = new DOMParser();
		return parser.parseFromString(xmlStr, 'application/xml');
	}
	function recogerTypes(doc) {
		const tipos = {};
		const list = doc.getElementsByTagName('types');
		for (let t of list) {
			const nameNode = t.getElementsByTagName('name')[0];
			if (!nameNode) continue;
			const name = nameNode.textContent;
			if (!tipos[name]) tipos[name] = [];
			for (let m of t.getElementsByTagName('members')) {
				const text = m.textContent;
				if (!tipos[name].includes(text)) tipos[name].push(text);
			}
		}
		return tipos;
	}
	function obtenerVersion(doc) {
		const v = doc.getElementsByTagName('version')[0];
		return v ? v.textContent : '';
	}
	function buildPackage(tipos, version) {
		let out = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\\\\n';
		out += '<Package xmlns="http://soap.sforce.com/2006/04/metadata">\\\\n';
		for (let name of Object.keys(tipos)) {
			out += '\\\\t<types>\\\\n';
			for (let mem of tipos[name]) {
				out += \\\`\\\\t\\\\t<members>\\\${mem}</members>\\\\n\\\`;
			}
			out += \\\`\\\\t\\\\t<name>\\\${name}</name>\\\\n\\\`;
			out += '\\\\t</types>\\\\n';
		}
		out += \\\`\\\\t<version>\\\${version}</version>\\\\n\\\`;
		out += '</Package>';
		return out;
	}
	function merge() {
		const outArea = document.getElementById('output');
		outArea.classList.remove('error');
		const xml1 = document.getElementById('input1').value.trim();
		const xml2 = document.getElementById('input2').value.trim();

		// Si ambos campos est\xE1n vac\xEDos, limpiar output y no hacer nada m\xE1s
		if (!xml1 && !xml2) {
			outArea.value = '';
			return;
		}

		try {
			const doc1 = parsePackage(xml1);
			const doc2 = parsePackage(xml2);
			const tipos1 = recogerTypes(doc1);
			const tipos2 = recogerTypes(doc2);
			for (let name in tipos2) {
				if (!tipos1[name]) {
					tipos1[name] = tipos2[name].slice();
				} else {
					for (let mem of tipos2[name]) {
						if (!tipos1[name].includes(mem)) tipos1[name].push(mem);
					}
				}
			}
			const version = obtenerVersion(doc1) || obtenerVersion(doc2) || '';
			outArea.value = buildPackage(tipos1, version);
		} catch (e) {
			outArea.value = e.message;
			outArea.classList.add('error');
		}
	}

	function saveToLocalStorage() {
		const xml1 = document.getElementById('input1').value;
		const xml2 = document.getElementById('input2').value;

		localStorage.setItem('packageMerger_input1', xml1);
		localStorage.setItem('packageMerger_input2', xml2);
	}

	function loadFromLocalStorage() {
		const savedInput1 = localStorage.getItem('packageMerger_input1');
		const savedInput2 = localStorage.getItem('packageMerger_input2');

		if (savedInput1) {
			document.getElementById('input1').value = savedInput1;
		}
		if (savedInput2) {
			document.getElementById('input2').value = savedInput2;
		}

		// Ejecutar merge si hay datos guardados
		if (savedInput1 || savedInput2) {
			merge();
		}
	}

	document.getElementById('input1').addEventListener('input', function () {
		saveToLocalStorage();
		merge();
	});

	document.getElementById('input2').addEventListener('input', function () {
		saveToLocalStorage();
		merge();
	});

	document.getElementById('copy').addEventListener('click', () => {
		const texto = document.getElementById('output').value;

		if (navigator.clipboard) {
			navigator.clipboard.writeText(texto).then(() => {
				// Feedback visual
				const btn = document.getElementById('copy');
				const originalColor = btn.style.color;
				btn.style.color = '#10b981';
				setTimeout(() => {
					btn.style.color = originalColor;
				}, 1000);
			});
		} else {
			// Fallback para navegadores antiguos
			const outArea = document.getElementById('output');
			outArea.select();
			document.execCommand('copy');
		}
	});

	function clearAll() {
		// Limpiar campos
		document.getElementById('input1').value = '';
		document.getElementById('input2').value = '';
		document.getElementById('output').value = '';

		// Limpiar localStorage
		localStorage.removeItem('packageMerger_input1');
		localStorage.removeItem('packageMerger_input2');

		// Remover clase de error si existe
		document.getElementById('output').classList.remove('error');
	}

	document.getElementById('clearAll').addEventListener('click', clearAll);

	// Cargar datos guardados al iniciar
	window.addEventListener('load', loadFromLocalStorage);
<\/script> `])), renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Package Merger | Adrian Palomo", "data-astro-cid-qcmdfmux": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-900 p-4 font-sans text-gray-100" data-astro-cid-qcmdfmux> <!-- Header --> <div class="mb-4 flex items-center justify-between" data-astro-cid-qcmdfmux> <div data-astro-cid-qcmdfmux> <h1 class="text-3xl font-bold text-blue-500" data-astro-cid-qcmdfmux>
Package.xml Merger
</h1> <p class="mt-2 text-sm text-gray-400" data-astro-cid-qcmdfmux>
Combina dos archivos package.xml de Salesforce en uno solo
</p> </div> <button id="clearAll" class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700" title="Limpiar todo" data-astro-cid-qcmdfmux> ${renderComponent($$result2, "Trash", $$Trash, { "data-astro-cid-qcmdfmux": true })} </button> </div> <!-- Grid Layout --> <div class="parent" data-astro-cid-qcmdfmux> <div class="div1" data-astro-cid-qcmdfmux> <div class="panel-header" data-astro-cid-qcmdfmux> <span data-astro-cid-qcmdfmux>Package 1</span> </div> <textarea id="input1" placeholder="Pega aquí el primer package.xml..." class="textarea-input" data-astro-cid-qcmdfmux></textarea> </div> <div class="div2" data-astro-cid-qcmdfmux> <div class="panel-header" data-astro-cid-qcmdfmux> <span data-astro-cid-qcmdfmux>Package 2</span> </div> <textarea id="input2" placeholder="Pega aquí el segundo package.xml..." class="textarea-input" data-astro-cid-qcmdfmux></textarea> </div> <div class="div3" data-astro-cid-qcmdfmux> <div class="panel-header" data-astro-cid-qcmdfmux> <span data-astro-cid-qcmdfmux>Resultado del merge</span> <button class="copy-btn" id="copy" title="Copiar resultado" data-astro-cid-qcmdfmux> ${renderComponent($$result2, "Copy", $$Copy2, { "data-astro-cid-qcmdfmux": true })} </button> </div> <textarea id="output" readonly placeholder="El resultado aparecerá aquí..." class="textarea-output" data-astro-cid-qcmdfmux></textarea> </div> </div> </div> ` }));
}, "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/tools/packageMerger.astro", void 0);

const $$file = "/Users/apalomo/Code/Proyectos/adrianpalomo/src/pages/tools/packageMerger.astro";
const $$url = "/tools/packageMerger";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PackageMerger,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
