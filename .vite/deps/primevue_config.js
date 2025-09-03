import { getCurrentInstance, inject, nextTick, onMounted, reactive, readonly, ref, watch } from "./vue.runtime.esm-bundler-DFqBpnYO.js";

//#region node_modules/.pnpm/@primeuix+utils@0.6.1/node_modules/@primeuix/utils/dist/object/index.mjs
var oe$1 = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var ue$1 = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable;
var N$1 = (e, t, n) => t in e ? oe$1(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, d = (e, t) => {
	for (var n in t || (t = {})) ue$1.call(t, n) && N$1(e, n, t[n]);
	if (K) for (var n of K(t)) fe.call(t, n) && N$1(e, n, t[n]);
	return e;
};
function a(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function l(e) {
	return typeof e == "function" && "call" in e && "apply" in e;
}
function s$1(e) {
	return !a(e);
}
function i(e, t = !0) {
	return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function $$1(e = {}, t = {}) {
	let n = d({}, e);
	return Object.keys(t).forEach((r) => {
		let o = r;
		i(t[o]) && o in e && i(e[o]) ? n[o] = $$1(e[o], t[o]) : n[o] = t[o];
	}), n;
}
function w(...e) {
	return e.reduce((t, n, r) => r === 0 ? n : $$1(t, n), {});
}
function m(e, ...t) {
	return l(e) ? e(...t) : e;
}
function p(e, t = !0) {
	return typeof e == "string" && (t || e !== "");
}
function _(e) {
	return s$1(e) && !isNaN(e);
}
function z(e, t) {
	if (t) {
		let n = t.test(e);
		return t.lastIndex = 0, n;
	}
	return !1;
}
function U(...e) {
	return w(...e);
}
function G(e) {
	return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function ee(e) {
	return p(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, n) => n === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}

//#endregion
//#region node_modules/.pnpm/@primeuix+utils@0.6.1/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s() {
	let r = /* @__PURE__ */ new Map();
	return {
		on(e, t) {
			let n = r.get(e);
			return n ? n.push(t) : n = [t], r.set(e, n), this;
		},
		off(e, t) {
			let n = r.get(e);
			return n && n.splice(n.indexOf(t) >>> 0, 1), this;
		},
		emit(e, t) {
			let n = r.get(e);
			n && n.forEach((i$1) => {
				i$1(t);
			});
		},
		clear() {
			r.clear();
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@primeuix+utils@0.6.1/node_modules/@primeuix/utils/dist/dom/index.mjs
function y(t) {
	if (t) {
		let e = t.parentNode;
		return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
	}
	return null;
}
function T(t) {
	return !!(t !== null && typeof t != "undefined" && t.nodeName && y(t));
}
function p$1(t) {
	return typeof Element != "undefined" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function A(t, e = {}) {
	if (p$1(t)) {
		let o = (n, r) => {
			var l$1, d$1;
			let i$1 = (l$1 = t == null ? void 0 : t.$attrs) != null && l$1[n] ? [(d$1 = t == null ? void 0 : t.$attrs) == null ? void 0 : d$1[n]] : [];
			return [r].flat().reduce((s$2, a$1) => {
				if (a$1 != null) {
					let u = typeof a$1;
					if (u === "string" || u === "number") s$2.push(a$1);
					else if (u === "object") {
						let c = Array.isArray(a$1) ? o(n, a$1) : Object.entries(a$1).map(([f, g$2]) => n === "style" && (g$2 || g$2 === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g$2}` : g$2 ? f : void 0);
						s$2 = c.length ? s$2.concat(c.filter((f) => !!f)) : s$2;
					}
				}
				return s$2;
			}, i$1);
		};
		Object.entries(e).forEach(([n, r]) => {
			if (r != null) {
				let i$1 = n.match(/^on(.+)/);
				i$1 ? t.addEventListener(i$1[1].toLowerCase(), r) : n === "p-bind" || n === "pBind" ? A(t, r) : (r = n === "class" ? [...new Set(o("class", r))].join(" ").trim() : n === "style" ? o("style", r).join(";").trim() : r, (t.$attrs = t.$attrs || {}) && (t.$attrs[n] = r), t.setAttribute(n, r));
			}
		});
	}
}
function tt() {
	return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
function Kt(t, e = "", o) {
	p$1(t) && o !== null && o !== void 0 && t.setAttribute(e, o);
}

//#endregion
//#region node_modules/.pnpm/@primeuix+utils@0.6.1/node_modules/@primeuix/utils/dist/zindex/index.mjs
function g$1() {
	let r = [], i$1 = (e, n, t = 999) => {
		let s$2 = u(e, n, t), o = s$2.value + (s$2.key === e ? 0 : t) + 1;
		return r.push({
			key: e,
			value: o
		}), o;
	}, d$1 = (e) => {
		r = r.filter((n) => n.value !== e);
	}, a$1 = (e, n) => u(e, n).value, u = (e, n, t = 0) => [...r].reverse().find((s$2) => n ? !0 : s$2.key === e) || {
		key: e,
		value: t
	}, l$1 = (e) => e && parseInt(e.style.zIndex, 10) || 0;
	return {
		get: l$1,
		set: (e, n, t) => {
			n && (n.style.zIndex = String(i$1(e, !0, t)));
		},
		clear: (e) => {
			e && (d$1(l$1(e)), e.style.zIndex = "");
		},
		getCurrent: (e) => a$1(e, !0)
	};
}
var x = g$1();

//#endregion
//#region node_modules/.pnpm/@primeuix+styled@0.7.2/node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty, st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F$1 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable;
var _e = (e, t, r) => t in e ? rt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, g = (e, t) => {
	for (var r in t || (t = {})) xe.call(t, r) && _e(e, r, t[r]);
	if (F$1) for (var r of F$1(t)) be.call(t, r) && _e(e, r, t[r]);
	return e;
}, $ = (e, t) => st(e, nt(t));
var v = (e, t) => {
	var r = {};
	for (var s$2 in e) xe.call(e, s$2) && t.indexOf(s$2) < 0 && (r[s$2] = e[s$2]);
	if (e != null && F$1) for (var s$2 of F$1(e)) t.indexOf(s$2) < 0 && be.call(e, s$2) && (r[s$2] = e[s$2]);
	return r;
};
var at = s(), N = at;
var k = /{([^}]*)}/g, ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g, ie = /var\([^)]+\)/g;
function oe(e) {
	return p(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
	return i(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt(e) {
	return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e = "", t = "") {
	return dt(`${p(e, !1) && p(t, !1) ? `${e}-` : e}${t}`);
}
function ae(e = "", t = "") {
	return `--${Q(e, t)}`;
}
function gt(e = "") {
	let t = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
	return (t + r) % 2 !== 0;
}
function Y(e, t = "", r = "", s$2 = [], i$1) {
	if (p(e)) {
		let a$1 = e.trim();
		if (gt(a$1)) return;
		if (z(a$1, k)) {
			let n = a$1.replaceAll(k, (l$1) => {
				let c = l$1.replace(/{|}/g, "").split(".").filter((m$1) => !s$2.some((d$1) => z(m$1, d$1)));
				return `var(${ae(r, ee(c.join("-")))}${s$1(i$1) ? `, ${i$1}` : ""})`;
			});
			return z(n.replace(ie, "0"), ne) ? `calc(${n})` : n;
		}
		return a$1;
	} else if (_(e)) return e;
}
function Re(e, t, r) {
	p(t, !1) && e.push(`${t}:${r};`);
}
function C(e, t) {
	return e ? `${e}{${t}}` : "";
}
function le(e, t) {
	if (e.indexOf("dt(") === -1) return e;
	function r(n, l$1) {
		let o = [], c = 0, m$1 = "", d$1 = null, u = 0;
		for (; c <= n.length;) {
			let h = n[c];
			if ((h === "\"" || h === "'" || h === "`") && n[c - 1] !== "\\" && (d$1 = d$1 === h ? null : h), !d$1 && (h === "(" && u++, h === ")" && u--, (h === "," || c === n.length) && u === 0)) {
				let f = m$1.trim();
				f.startsWith("dt(") ? o.push(le(f, l$1)) : o.push(s$2(f)), m$1 = "", c++;
				continue;
			}
			h !== void 0 && (m$1 += h), c++;
		}
		return o;
	}
	function s$2(n) {
		let l$1 = n[0];
		if ((l$1 === "\"" || l$1 === "'" || l$1 === "`") && n[n.length - 1] === l$1) return n.slice(1, -1);
		let o = Number(n);
		return isNaN(o) ? n : o;
	}
	let i$1 = [], a$1 = [];
	for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") a$1.push(n), n += 2;
	else if (e[n] === ")" && a$1.length > 0) {
		let l$1 = a$1.pop();
		a$1.length === 0 && i$1.push([l$1, n]);
	}
	if (!i$1.length) return e;
	for (let n = i$1.length - 1; n >= 0; n--) {
		let [l$1, o] = i$1[n], c = e.slice(l$1 + 3, o), m$1 = r(c, t), d$1 = t(...m$1);
		e = e.slice(0, l$1) + d$1 + e.slice(o + 1);
	}
	return e;
}
var rr = (e) => {
	var a$1;
	let t = S.getTheme(), r = ue(t, e, void 0, "variable"), s$2 = (a$1 = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a$1[0], i$1 = ue(t, e, void 0, "value");
	return {
		name: s$2,
		variable: r,
		value: i$1
	};
}, E = (...e) => ue(S.getTheme(), ...e), ue = (e = {}, t, r, s$2) => {
	if (t) {
		let { variable: i$1, options: a$1 } = S.defaults || {}, { prefix: n, transform: l$1 } = (e == null ? void 0 : e.options) || a$1 || {}, o = z(t, k) ? t : `{${t}}`;
		return s$2 === "value" || a(s$2) && l$1 === "strict" ? S.getTokenValue(t) : Y(o, void 0, n, [i$1.excludedKeyRegex], r);
	}
	return "";
};
function ar(e, ...t) {
	if (e instanceof Array) {
		let r = e.reduce((s$2, i$1, a$1) => {
			var n;
			return s$2 + i$1 + ((n = m(t[a$1], { dt: E })) != null ? n : "");
		}, "");
		return le(r, E);
	}
	return m(e, { dt: E });
}
function de(e, t = {}) {
	let r = S.defaults.variable, { prefix: s$2 = r.prefix, selector: i$1 = r.selector, excludedKeyRegex: a$1 = r.excludedKeyRegex } = t, n = [], l$1 = [], o = [{
		node: e,
		path: s$2
	}];
	for (; o.length;) {
		let { node: m$1, path: d$1 } = o.pop();
		for (let u in m$1) {
			let h = m$1[u], f = ve(h), p$2 = z(u, a$1) ? Q(d$1) : Q(d$1, ee(u));
			if (i(f)) o.push({
				node: f,
				path: p$2
			});
			else {
				let y$1 = ae(p$2), R = Y(f, p$2, s$2, [a$1]);
				Re(l$1, y$1, R);
				let T$1 = p$2;
				s$2 && T$1.startsWith(s$2 + "-") && (T$1 = T$1.slice(s$2.length + 1)), n.push(T$1.replace(/-/g, "."));
			}
		}
	}
	let c = l$1.join("");
	return {
		value: l$1,
		tokens: n,
		declarations: c,
		css: C(i$1, c)
	};
}
var b$1 = {
	regex: {
		rules: {
			class: {
				pattern: /^\.([a-zA-Z][\w-]*)$/,
				resolve(e) {
					return {
						type: "class",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			attr: {
				pattern: /^\[(.*)\]$/,
				resolve(e) {
					return {
						type: "attr",
						selector: `:root${e}`,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			media: {
				pattern: /^@media (.*)$/,
				resolve(e) {
					return {
						type: "media",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			system: {
				pattern: /^system$/,
				resolve(e) {
					return {
						type: "system",
						selector: "@media (prefers-color-scheme: dark)",
						matched: this.pattern.test(e.trim())
					};
				}
			},
			custom: { resolve(e) {
				return {
					type: "custom",
					selector: e,
					matched: !0
				};
			} }
		},
		resolve(e) {
			let t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
			return [e].flat().map((r) => {
				var s$2;
				return (s$2 = t.map((i$1) => i$1.resolve(r)).find((i$1) => i$1.matched)) != null ? s$2 : this.rules.custom.resolve(r);
			});
		}
	},
	_toVariables(e, t) {
		return de(e, { prefix: t == null ? void 0 : t.prefix });
	},
	getCommon({ name: e = "", theme: t = {}, params: r, set: s$2, defaults: i$1 }) {
		var R, T$1, j, O, M, z$1, V;
		let { preset: a$1, options: n } = t, l$1, o, c, m$1, d$1, u, h;
		if (s$1(a$1) && n.transform !== "strict") {
			let { primitive: L, semantic: te, extend: re } = a$1, f = te || {}, { colorScheme: K$1 } = f, A$1 = v(f, ["colorScheme"]), x$1 = re || {}, { colorScheme: X } = x$1, G$1 = v(x$1, ["colorScheme"]), p$2 = K$1 || {}, { dark: U$1 } = p$2, B = v(p$2, ["dark"]), y$1 = X || {}, { dark: I } = y$1, H = v(y$1, ["dark"]), W = s$1(L) ? this._toVariables({ primitive: L }, n) : {}, q = s$1(A$1) ? this._toVariables({ semantic: A$1 }, n) : {}, Z = s$1(B) ? this._toVariables({ light: B }, n) : {}, pe = s$1(U$1) ? this._toVariables({ dark: U$1 }, n) : {}, fe$1 = s$1(G$1) ? this._toVariables({ semantic: G$1 }, n) : {}, ye = s$1(H) ? this._toVariables({ light: H }, n) : {}, Se = s$1(I) ? this._toVariables({ dark: I }, n) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T$1 = q.declarations) != null ? T$1 : "", q.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe$1.declarations) != null ? M : "", fe$1.tokens || []], [qe, Ze] = [(z$1 = ye.declarations) != null ? z$1 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
			l$1 = this.transformCSS(e, Me, "light", "variable", n, s$2, i$1), o = ze;
			let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n, s$2, i$1), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n, s$2, i$1);
			c = `${Qe}${Ye}`, m$1 = [...new Set([
				...Xe,
				...Ue,
				...Ie
			])];
			let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n, s$2, i$1), tt$1 = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n, s$2, i$1);
			d$1 = `${et}${tt$1}`, u = [...new Set([
				...We,
				...Ze,
				...Je
			])], h = m(a$1.css, { dt: E });
		}
		return {
			primitive: {
				css: l$1,
				tokens: o
			},
			semantic: {
				css: c,
				tokens: m$1
			},
			global: {
				css: d$1,
				tokens: u
			},
			style: h
		};
	},
	getPreset({ name: e = "", preset: t = {}, options: r, params: s$2, set: i$1, defaults: a$1, selector: n }) {
		var f, x$1, p$2;
		let l$1, o, c;
		if (s$1(t) && r.transform !== "strict") {
			let y$1 = e.replace("-directive", ""), m$1 = t, { colorScheme: R, extend: T$1, css: j } = m$1, O = v(m$1, [
				"colorScheme",
				"extend",
				"css"
			]), d$1 = T$1 || {}, { colorScheme: M } = d$1, z$1 = v(d$1, ["colorScheme"]), u = R || {}, { dark: V } = u, L = v(u, ["dark"]), h = M || {}, { dark: te } = h, re = v(h, ["dark"]), K$1 = s$1(O) ? this._toVariables({ [y$1]: g(g({}, O), z$1) }, r) : {}, A$1 = s$1(L) ? this._toVariables({ [y$1]: g(g({}, L), re) }, r) : {}, X = s$1(V) ? this._toVariables({ [y$1]: g(g({}, V), te) }, r) : {}, [G$1, U$1] = [(f = K$1.declarations) != null ? f : "", K$1.tokens || []], [B, I] = [(x$1 = A$1.declarations) != null ? x$1 : "", A$1.tokens || []], [H, W] = [(p$2 = X.declarations) != null ? p$2 : "", X.tokens || []], q = this.transformCSS(y$1, `${G$1}${B}`, "light", "variable", r, i$1, a$1, n), Z = this.transformCSS(y$1, H, "dark", "variable", r, i$1, a$1, n);
			l$1 = `${q}${Z}`, o = [...new Set([
				...U$1,
				...I,
				...W
			])], c = m(j, { dt: E });
		}
		return {
			css: l$1,
			tokens: o,
			style: c
		};
	},
	getPresetC({ name: e = "", theme: t = {}, params: r, set: s$2, defaults: i$1 }) {
		var o;
		let { preset: a$1, options: n } = t, l$1 = (o = a$1 == null ? void 0 : a$1.components) == null ? void 0 : o[e];
		return this.getPreset({
			name: e,
			preset: l$1,
			options: n,
			params: r,
			set: s$2,
			defaults: i$1
		});
	},
	getPresetD({ name: e = "", theme: t = {}, params: r, set: s$2, defaults: i$1 }) {
		var c, m$1;
		let a$1 = e.replace("-directive", ""), { preset: n, options: l$1 } = t, o = ((c = n == null ? void 0 : n.components) == null ? void 0 : c[a$1]) || ((m$1 = n == null ? void 0 : n.directives) == null ? void 0 : m$1[a$1]);
		return this.getPreset({
			name: a$1,
			preset: o,
			options: l$1,
			params: r,
			set: s$2,
			defaults: i$1
		});
	},
	applyDarkColorScheme(e) {
		return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
	},
	getColorSchemeOption(e, t) {
		var r;
		return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
	},
	getLayerOrder(e, t = {}, r, s$2) {
		let { cssLayer: i$1 } = t;
		return i$1 ? `@layer ${m(i$1.order || i$1.name || "primeui", r)}` : "";
	},
	getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s$2 = {}, set: i$1, defaults: a$1 }) {
		let n = this.getCommon({
			name: e,
			theme: t,
			params: r,
			set: i$1,
			defaults: a$1
		}), l$1 = Object.entries(s$2).reduce((o, [c, m$1]) => o.push(`${c}="${m$1}"`) && o, []).join(" ");
		return Object.entries(n || {}).reduce((o, [c, m$1]) => {
			if (i(m$1) && Object.hasOwn(m$1, "css")) {
				let d$1 = G(m$1.css), u = `${c}-variables`;
				o.push(`<style type="text/css" data-primevue-style-id="${u}" ${l$1}>${d$1}</style>`);
			}
			return o;
		}, []).join("");
	},
	getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s$2 = {}, set: i$1, defaults: a$1 }) {
		var c;
		let n = {
			name: e,
			theme: t,
			params: r,
			set: i$1,
			defaults: a$1
		}, l$1 = (c = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : c.css, o = Object.entries(s$2).reduce((m$1, [d$1, u]) => m$1.push(`${d$1}="${u}"`) && m$1, []).join(" ");
		return l$1 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${G(l$1)}</style>` : "";
	},
	createTokens(e = {}, t, r = "", s$2 = "", i$1 = {}) {
		let a$1 = function(l$1, o = {}, c = []) {
			if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), {
				colorScheme: l$1,
				path: this.path,
				paths: o,
				value: void 0
			};
			c.push(this.path), o.name = this.path, o.binding || (o.binding = {});
			let m$1 = this.value;
			if (typeof this.value == "string" && k.test(this.value)) {
				let u = this.value.trim().replace(k, (h) => {
					var y$1;
					let f = h.slice(1, -1), x$1 = this.tokens[f];
					if (!x$1) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
					let p$2 = x$1.computed(l$1, o, c);
					return Array.isArray(p$2) && p$2.length === 2 ? `light-dark(${p$2[0].value},${p$2[1].value})` : (y$1 = p$2 == null ? void 0 : p$2.value) != null ? y$1 : "__UNRESOLVED__";
				});
				m$1 = ne.test(u.replace(ie, "0")) ? `calc(${u})` : u;
			}
			return a(o.binding) && delete o.binding, c.pop(), {
				colorScheme: l$1,
				path: this.path,
				paths: o,
				value: m$1.includes("__UNRESOLVED__") ? void 0 : m$1
			};
		}, n = (l$1, o, c) => {
			Object.entries(l$1).forEach(([m$1, d$1]) => {
				let u = z(m$1, t.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m$1)}` : oe(m$1), h = c ? `${c}.${m$1}` : m$1;
				i(d$1) ? n(d$1, u, h) : (i$1[u] || (i$1[u] = {
					paths: [],
					computed: (f, x$1 = {}, p$2 = []) => {
						if (i$1[u].paths.length === 1) return i$1[u].paths[0].computed(i$1[u].paths[0].scheme, x$1.binding, p$2);
						if (f && f !== "none") for (let y$1 = 0; y$1 < i$1[u].paths.length; y$1++) {
							let R = i$1[u].paths[y$1];
							if (R.scheme === f) return R.computed(f, x$1.binding, p$2);
						}
						return i$1[u].paths.map((y$1) => y$1.computed(y$1.scheme, x$1[y$1.scheme], p$2));
					}
				}), i$1[u].paths.push({
					path: h,
					value: d$1,
					scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none",
					computed: a$1,
					tokens: i$1
				}));
			});
		};
		return n(e, r, s$2), i$1;
	},
	getTokenValue(e, t, r) {
		var l$1;
		let i$1 = ((o) => o.split(".").filter((m$1) => !z(m$1.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), a$1 = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, n = [(l$1 = e[i$1]) == null ? void 0 : l$1.computed(a$1)].flat().filter((o) => o);
		return n.length === 1 ? n[0].value : n.reduce((o = {}, c) => {
			let u = c, { colorScheme: m$1 } = u, d$1 = v(u, ["colorScheme"]);
			return o[m$1] = d$1, o;
		}, void 0);
	},
	getSelectorRule(e, t, r, s$2) {
		return r === "class" || r === "attr" ? C(s$1(t) ? `${e}${t},${e} ${t}` : e, s$2) : C(e, C(t != null ? t : ":root", s$2));
	},
	transformCSS(e, t, r, s$2, i$1 = {}, a$1, n, l$1) {
		if (s$1(t)) {
			let { cssLayer: o } = i$1;
			if (s$2 !== "style") {
				let c = this.getColorSchemeOption(i$1, n);
				t = r === "dark" ? c.reduce((m$1, { type: d$1, selector: u }) => (s$1(u) && (m$1 += u.includes("[CSS]") ? u.replace("[CSS]", t) : this.getSelectorRule(u, l$1, d$1, t)), m$1), "") : C(l$1 != null ? l$1 : ":root", t);
			}
			if (o) {
				let c = {
					name: "primeui",
					order: "primeui"
				};
				i(o) && (c.name = m(o.name, {
					name: e,
					type: s$2
				})), s$1(c.name) && (t = C(`@layer ${c.name}`, t), a$1?.layerNames(c.name));
			}
			return t;
		}
		return "";
	}
};
var S = {
	defaults: {
		variable: {
			prefix: "p",
			selector: ":root",
			excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
		},
		options: {
			prefix: "p",
			darkModeSelector: "system",
			cssLayer: !1
		}
	},
	_theme: void 0,
	_layerNames: /* @__PURE__ */ new Set(),
	_loadedStyleNames: /* @__PURE__ */ new Set(),
	_loadingStyles: /* @__PURE__ */ new Set(),
	_tokens: {},
	update(e = {}) {
		let { theme: t } = e;
		t && (this._theme = $(g({}, t), { options: g(g({}, this.defaults.options), t.options) }), this._tokens = b$1.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
	},
	get theme() {
		return this._theme;
	},
	get preset() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.preset) || {};
	},
	get options() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.options) || {};
	},
	get tokens() {
		return this._tokens;
	},
	getTheme() {
		return this.theme;
	},
	setTheme(e) {
		this.update({ theme: e }), N.emit("theme:change", e);
	},
	getPreset() {
		return this.preset;
	},
	setPreset(e) {
		this._theme = $(g({}, this.theme), { preset: e }), this._tokens = b$1.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
	},
	getOptions() {
		return this.options;
	},
	setOptions(e) {
		this._theme = $(g({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
	},
	getLayerNames() {
		return [...this._layerNames];
	},
	setLayerNames(e) {
		this._layerNames.add(e);
	},
	getLoadedStyleNames() {
		return this._loadedStyleNames;
	},
	isStyleNameLoaded(e) {
		return this._loadedStyleNames.has(e);
	},
	setLoadedStyleName(e) {
		this._loadedStyleNames.add(e);
	},
	deleteLoadedStyleName(e) {
		this._loadedStyleNames.delete(e);
	},
	clearLoadedStyleNames() {
		this._loadedStyleNames.clear();
	},
	getTokenValue(e) {
		return b$1.getTokenValue(this.tokens, e, this.defaults);
	},
	getCommon(e = "", t) {
		return b$1.getCommon({
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getComponent(e = "", t) {
		let r = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b$1.getPresetC(r);
	},
	getDirective(e = "", t) {
		let r = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b$1.getPresetD(r);
	},
	getCustomPreset(e = "", t, r, s$2) {
		let i$1 = {
			name: e,
			preset: t,
			options: this.options,
			selector: r,
			params: s$2,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b$1.getPreset(i$1);
	},
	getLayerOrderCSS(e = "") {
		return b$1.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
	},
	transformCSS(e = "", t, r = "style", s$2) {
		return b$1.transformCSS(e, t, s$2, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
	},
	getCommonStyleSheet(e = "", t, r = {}) {
		return b$1.getCommonStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getStyleSheet(e, t, r = {}) {
		return b$1.getStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	onStyleMounted(e) {
		this._loadingStyles.add(e);
	},
	onStyleUpdated(e) {
		this._loadingStyles.add(e);
	},
	onStyleLoaded(e, { name: t }) {
		this._loadingStyles.size && (this._loadingStyles.delete(t), N.emit(`theme:${t}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
	}
};

//#endregion
//#region node_modules/.pnpm/@primevue+core@4.3.7_vue@3.5.20_typescript@5.8.3_/node_modules/@primevue/core/api/index.mjs
var FilterMatchMode = {
	STARTS_WITH: "startsWith",
	CONTAINS: "contains",
	NOT_CONTAINS: "notContains",
	ENDS_WITH: "endsWith",
	EQUALS: "equals",
	NOT_EQUALS: "notEquals",
	IN: "in",
	LESS_THAN: "lt",
	LESS_THAN_OR_EQUAL_TO: "lte",
	GREATER_THAN: "gt",
	GREATER_THAN_OR_EQUAL_TO: "gte",
	BETWEEN: "between",
	DATE_IS: "dateIs",
	DATE_IS_NOT: "dateIsNot",
	DATE_BEFORE: "dateBefore",
	DATE_AFTER: "dateAfter"
};

//#endregion
//#region node_modules/.pnpm/@primeuix+styles@1.2.3/node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";

//#endregion
//#region node_modules/.pnpm/@primevue+core@4.3.7_vue@3.5.20_typescript@5.8.3_/node_modules/@primevue/core/usestyle/index.mjs
function _typeof$2(o) {
	"@babel/helpers - typeof";
	return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof$2(o);
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), true).forEach(function(r$1) {
			_defineProperty$2(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i$1 = _toPrimitive$2(t, "string");
	return "symbol" == _typeof$2(i$1) ? i$1 : i$1 + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != _typeof$2(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i$1 = e.call(t, r);
		if ("object" != _typeof$2(i$1)) return i$1;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function tryOnMounted(fn) {
	var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
	if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
	else if (sync) fn();
	else nextTick(fn);
}
var _id = 0;
function useStyle(css$1) {
	var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	var isLoaded = ref(false);
	var cssRef = ref(css$1);
	var styleRef = ref(null);
	var defaultDocument = tt() ? window.document : void 0;
	var _options$document = options.document, document$1 = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
	var stop = function stop$1() {};
	var load = function load$1(_css) {
		var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (!document$1) return;
		var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
		var _name = _styleProps.name || name, _id$1 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
		styleRef.value = document$1.querySelector("style[data-primevue-style-id=\"".concat(_name, "\"]")) || document$1.getElementById(_id$1) || document$1.createElement("style");
		if (!styleRef.value.isConnected) {
			cssRef.value = _css || css$1;
			A(styleRef.value, {
				type: "text/css",
				id: _id$1,
				media,
				nonce: _nonce
			});
			first ? document$1.head.prepend(styleRef.value) : document$1.head.appendChild(styleRef.value);
			Kt(styleRef.value, "data-primevue-style-id", _name);
			A(styleRef.value, _styleProps);
			styleRef.value.onload = function(event) {
				return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, { name: _name });
			};
			onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
		}
		if (isLoaded.value) return;
		stop = watch(cssRef, function(value) {
			styleRef.value.textContent = value;
			onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
		}, { immediate: true });
		isLoaded.value = true;
	};
	var unload = function unload$1() {
		if (!document$1 || !isLoaded.value) return;
		stop();
		T(styleRef.value) && document$1.head.removeChild(styleRef.value);
		isLoaded.value = false;
		styleRef.value = null;
	};
	if (immediate && !manual) tryOnMounted(load);
	return {
		id,
		name,
		el: styleRef,
		css: cssRef,
		unload,
		load,
		isLoaded: readonly(isLoaded)
	};
}

//#endregion
//#region node_modules/.pnpm/@primevue+core@4.3.7_vue@3.5.20_typescript@5.8.3_/node_modules/@primevue/core/base/style/index.mjs
function _typeof$1(o) {
	"@babel/helpers - typeof";
	return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof$1(o);
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a$1) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a$1);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a$1) : void 0;
	}
}
function _arrayLikeToArray(r, a$1) {
	(null == a$1 || a$1 > r.length) && (a$1 = r.length);
	for (var e = 0, n = Array(a$1); e < a$1; e++) n[e] = r[e];
	return n;
}
function _iterableToArrayLimit(r, l$1) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i$1, u, a$1 = [], f = true, o = false;
		try {
			if (i$1 = (t = t.call(r)).next, 0 === l$1);
			else for (; !(f = (e = i$1.call(t)).done) && (a$1.push(e.value), a$1.length !== l$1); f = !0);
		} catch (r$1) {
			o = true, n = r$1;
		} finally {
			try {
				if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a$1;
	}
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), true).forEach(function(r$1) {
			_defineProperty$1(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i$1 = _toPrimitive$1(t, "string");
	return "symbol" == _typeof$1(i$1) ? i$1 : i$1 + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != _typeof$1(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i$1 = e.call(t, r);
		if ("object" != _typeof$1(i$1)) return i$1;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var css = function css$1(_ref) {
	var dt$1 = _ref.dt;
	return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt$1("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
	name: "base",
	css,
	style,
	classes,
	inlineStyles,
	load: function load(style$1) {
		var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
			return cs;
		};
		var computedStyle = transform(ar(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), style$1));
		return s$1(computedStyle) ? useStyle(G(computedStyle), _objectSpread$1({ name: this.name }, options)) : {};
	},
	loadCSS: function loadCSS() {
		var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return this.load(this.css, options);
	},
	loadStyle: function loadStyle() {
		var _this = this;
		var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		var style$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
		return this.load(this.style, options, function() {
			var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
			return S.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(ar(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style$1)));
		});
	},
	getCommonTheme: function getCommonTheme(params) {
		return S.getCommon(this.name, params);
	},
	getComponentTheme: function getComponentTheme(params) {
		return S.getComponent(this.name, params);
	},
	getDirectiveTheme: function getDirectiveTheme(params) {
		return S.getDirective(this.name, params);
	},
	getPresetTheme: function getPresetTheme(preset, selector, params) {
		return S.getCustomPreset(this.name, preset, selector, params);
	},
	getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
		return S.getLayerOrderCSS(this.name);
	},
	getStyleSheet: function getStyleSheet() {
		var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		if (this.css) {
			var _css = m(this.css, { dt: E }) || "";
			var _style = G(ar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([
				"",
				"",
				""
			])), _css, extendedCSS));
			var _props = Object.entries(props).reduce(function(acc, _ref2) {
				var _ref3 = _slicedToArray(_ref2, 2), k$1 = _ref3[0], v$1 = _ref3[1];
				return acc.push("".concat(k$1, "=\"").concat(v$1, "\"")) && acc;
			}, []).join(" ");
			return s$1(_style) ? "<style type=\"text/css\" data-primevue-style-id=\"".concat(this.name, "\" ").concat(_props, ">").concat(_style, "</style>") : "";
		}
		return "";
	},
	getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
		var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return S.getCommonStyleSheet(this.name, params, props);
	},
	getThemeStyleSheet: function getThemeStyleSheet(params) {
		var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var css$1 = [S.getStyleSheet(this.name, params, props)];
		if (this.style) {
			var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
			var _css = ar(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), m(this.style, { dt: E }));
			var _style = G(S.transformCSS(name, _css));
			var _props = Object.entries(props).reduce(function(acc, _ref4) {
				var _ref5 = _slicedToArray(_ref4, 2), k$1 = _ref5[0], v$1 = _ref5[1];
				return acc.push("".concat(k$1, "=\"").concat(v$1, "\"")) && acc;
			}, []).join(" ");
			s$1(_style) && css$1.push("<style type=\"text/css\" data-primevue-style-id=\"".concat(name, "\" ").concat(_props, ">").concat(_style, "</style>"));
		}
		return css$1.join("");
	},
	extend: function extend(inStyle) {
		return _objectSpread$1(_objectSpread$1({}, this), {}, {
			css: void 0,
			style: void 0
		}, inStyle);
	}
};

//#endregion
//#region node_modules/.pnpm/@primevue+core@4.3.7_vue@3.5.20_typescript@5.8.3_/node_modules/@primevue/core/service/index.mjs
var PrimeVueService = s();

//#endregion
//#region node_modules/.pnpm/@primevue+core@4.3.7_vue@3.5.20_typescript@5.8.3_/node_modules/@primevue/core/config/index.mjs
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), true).forEach(function(r$1) {
			_defineProperty(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i$1 = _toPrimitive(t, "string");
	return "symbol" == _typeof(i$1) ? i$1 : i$1 + "";
}
function _toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i$1 = e.call(t, r);
		if ("object" != _typeof(i$1)) return i$1;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var defaultOptions = {
	ripple: false,
	inputStyle: null,
	inputVariant: null,
	locale: {
		startsWith: "Starts with",
		contains: "Contains",
		notContains: "Not contains",
		endsWith: "Ends with",
		equals: "Equals",
		notEquals: "Not equals",
		noFilter: "No Filter",
		lt: "Less than",
		lte: "Less than or equal to",
		gt: "Greater than",
		gte: "Greater than or equal to",
		dateIs: "Date is",
		dateIsNot: "Date is not",
		dateBefore: "Date is before",
		dateAfter: "Date is after",
		clear: "Clear",
		apply: "Apply",
		matchAll: "Match All",
		matchAny: "Match Any",
		addRule: "Add Rule",
		removeRule: "Remove Rule",
		accept: "Yes",
		reject: "No",
		choose: "Choose",
		upload: "Upload",
		cancel: "Cancel",
		completed: "Completed",
		pending: "Pending",
		fileSizeTypes: [
			"B",
			"KB",
			"MB",
			"GB",
			"TB",
			"PB",
			"EB",
			"ZB",
			"YB"
		],
		dayNames: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayNamesShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayNamesMin: [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		],
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		chooseYear: "Choose Year",
		chooseMonth: "Choose Month",
		chooseDate: "Choose Date",
		prevDecade: "Previous Decade",
		nextDecade: "Next Decade",
		prevYear: "Previous Year",
		nextYear: "Next Year",
		prevMonth: "Previous Month",
		nextMonth: "Next Month",
		prevHour: "Previous Hour",
		nextHour: "Next Hour",
		prevMinute: "Previous Minute",
		nextMinute: "Next Minute",
		prevSecond: "Previous Second",
		nextSecond: "Next Second",
		am: "am",
		pm: "pm",
		today: "Today",
		weekHeader: "Wk",
		firstDayOfWeek: 0,
		showMonthAfterYear: false,
		dateFormat: "mm/dd/yy",
		weak: "Weak",
		medium: "Medium",
		strong: "Strong",
		passwordPrompt: "Enter a password",
		emptyFilterMessage: "No results found",
		searchMessage: "{0} results are available",
		selectionMessage: "{0} items selected",
		emptySelectionMessage: "No selected item",
		emptySearchMessage: "No results found",
		fileChosenMessage: "{0} files",
		noFileChosenMessage: "No file chosen",
		emptyMessage: "No available options",
		aria: {
			trueLabel: "True",
			falseLabel: "False",
			nullLabel: "Not Selected",
			star: "1 star",
			stars: "{star} stars",
			selectAll: "All items selected",
			unselectAll: "All items unselected",
			close: "Close",
			previous: "Previous",
			next: "Next",
			navigation: "Navigation",
			scrollTop: "Scroll Top",
			moveTop: "Move Top",
			moveUp: "Move Up",
			moveDown: "Move Down",
			moveBottom: "Move Bottom",
			moveToTarget: "Move to Target",
			moveToSource: "Move to Source",
			moveAllToTarget: "Move All to Target",
			moveAllToSource: "Move All to Source",
			pageLabel: "Page {page}",
			firstPageLabel: "First Page",
			lastPageLabel: "Last Page",
			nextPageLabel: "Next Page",
			prevPageLabel: "Previous Page",
			rowsPerPageLabel: "Rows per page",
			jumpToPageDropdownLabel: "Jump to Page Dropdown",
			jumpToPageInputLabel: "Jump to Page Input",
			selectRow: "Row Selected",
			unselectRow: "Row Unselected",
			expandRow: "Row Expanded",
			collapseRow: "Row Collapsed",
			showFilterMenu: "Show Filter Menu",
			hideFilterMenu: "Hide Filter Menu",
			filterOperator: "Filter Operator",
			filterConstraint: "Filter Constraint",
			editRow: "Row Edit",
			saveEdit: "Save Edit",
			cancelEdit: "Cancel Edit",
			listView: "List View",
			gridView: "Grid View",
			slide: "Slide",
			slideNumber: "{slideNumber}",
			zoomImage: "Zoom Image",
			zoomIn: "Zoom In",
			zoomOut: "Zoom Out",
			rotateRight: "Rotate Right",
			rotateLeft: "Rotate Left",
			listLabel: "Option List"
		}
	},
	filterMatchModeOptions: {
		text: [
			FilterMatchMode.STARTS_WITH,
			FilterMatchMode.CONTAINS,
			FilterMatchMode.NOT_CONTAINS,
			FilterMatchMode.ENDS_WITH,
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS
		],
		numeric: [
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS,
			FilterMatchMode.LESS_THAN,
			FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
			FilterMatchMode.GREATER_THAN,
			FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
		],
		date: [
			FilterMatchMode.DATE_IS,
			FilterMatchMode.DATE_IS_NOT,
			FilterMatchMode.DATE_BEFORE,
			FilterMatchMode.DATE_AFTER
		]
	},
	zIndex: {
		modal: 1100,
		overlay: 1e3,
		menu: 1e3,
		tooltip: 1100
	},
	theme: void 0,
	unstyled: false,
	pt: void 0,
	ptOptions: {
		mergeSections: true,
		mergeProps: false
	},
	csp: { nonce: void 0 }
};
var PrimeVueSymbol = Symbol();
function usePrimeVue() {
	var PrimeVue$1 = inject(PrimeVueSymbol);
	if (!PrimeVue$1) throw new Error("PrimeVue is not installed!");
	return PrimeVue$1;
}
function setup(app, options) {
	var PrimeVue$1 = { config: reactive(options) };
	app.config.globalProperties.$primevue = PrimeVue$1;
	app.provide(PrimeVueSymbol, PrimeVue$1);
	clearConfig();
	setupConfig(app, PrimeVue$1);
	return PrimeVue$1;
}
var stopWatchers = [];
function clearConfig() {
	N.clear();
	stopWatchers.forEach(function(fn) {
		return fn === null || fn === void 0 ? void 0 : fn();
	});
	stopWatchers = [];
}
function setupConfig(app, PrimeVue$1) {
	var isThemeChanged = ref(false);
	/*** Methods and Services ***/
	var loadCommonTheme = function loadCommonTheme$1() {
		var _PrimeVue$config;
		if (((_PrimeVue$config = PrimeVue$1.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
		if (!S.isStyleNameLoaded("common")) {
			var _BaseStyle$getCommonT, _PrimeVue$config2;
			var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global = _ref.global, style$1 = _ref.style;
			var styleOptions = { nonce: (_PrimeVue$config2 = PrimeVue$1.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce };
			BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({ name: "primitive-variables" }, styleOptions));
			BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({ name: "semantic-variables" }, styleOptions));
			BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread({ name: "global-variables" }, styleOptions));
			BaseStyle.loadStyle(_objectSpread({ name: "global-style" }, styleOptions), style$1);
			S.setLoadedStyleName("common");
		}
	};
	N.on("theme:change", function(newTheme) {
		if (!isThemeChanged.value) {
			app.config.globalProperties.$primevue.config.theme = newTheme;
			isThemeChanged.value = true;
		}
	});
	/*** Watchers ***/
	var stopConfigWatcher = watch(PrimeVue$1.config, function(newValue, oldValue) {
		PrimeVueService.emit("config:change", {
			newValue,
			oldValue
		});
	}, {
		immediate: true,
		deep: true
	});
	var stopRippleWatcher = watch(function() {
		return PrimeVue$1.config.ripple;
	}, function(newValue, oldValue) {
		PrimeVueService.emit("config:ripple:change", {
			newValue,
			oldValue
		});
	}, {
		immediate: true,
		deep: true
	});
	var stopThemeWatcher = watch(function() {
		return PrimeVue$1.config.theme;
	}, function(newValue, oldValue) {
		if (!isThemeChanged.value) S.setTheme(newValue);
		if (!PrimeVue$1.config.unstyled) loadCommonTheme();
		isThemeChanged.value = false;
		PrimeVueService.emit("config:theme:change", {
			newValue,
			oldValue
		});
	}, {
		immediate: true,
		deep: false
	});
	var stopUnstyledWatcher = watch(function() {
		return PrimeVue$1.config.unstyled;
	}, function(newValue, oldValue) {
		if (!newValue && PrimeVue$1.config.theme) loadCommonTheme();
		PrimeVueService.emit("config:unstyled:change", {
			newValue,
			oldValue
		});
	}, {
		immediate: true,
		deep: true
	});
	stopWatchers.push(stopConfigWatcher);
	stopWatchers.push(stopRippleWatcher);
	stopWatchers.push(stopThemeWatcher);
	stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = { install: function install(app, options) {
	var configOptions = U(defaultOptions, options);
	setup(app, configOptions);
} };

//#endregion
export { clearConfig, PrimeVue as default, defaultOptions, setup, setupConfig, usePrimeVue };
//# sourceMappingURL=primevue_config.js.map