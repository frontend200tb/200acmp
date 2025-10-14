/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BtnUp/BtnUp.component.js":
/*!*************************************************!*\
  !*** ./src/components/BtnUp/BtnUp.component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BtnUpComponent)
/* harmony export */ });
/* harmony import */ var _BtnUp_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnUp.component.scss */ "./src/components/BtnUp/BtnUp.component.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* eslint-disable no-use-before-define */
/** **************
Кнопка для каждой страницы сайта.
Кнопки изначально нет. Она появляется при прокрутке страницы.
По нажатию на кнопку происходит скролл к началу страницы
Кнопка располагается справа внизу страницы
****************** */

function BtnUpComponent() {
  var element = document.createElement('div');
  element.classList.add('btn-up', 'none');
  element.innerHTML = 'НАВЕРХ';
  element.addEventListener('click', scrollUp);
  window.addEventListener('scroll', function () {
    return scrollDown(element);
  });
  render(element);
  return {
    element: element
  };
}
function render(_x) {
  return _render.apply(this, arguments);
}
function _render() {
  _render = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(element) {
    var page;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          page = document.querySelector('#page');
          page.appendChild(element);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _render.apply(this, arguments);
}
function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
function scrollDown(element) {
  var scrollY = window.scrollY || document.documentElement.scrollTop;
  // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
  if (scrollY > 400) {
    element.classList.remove('none');
  } else {
    element.classList.add('none');
  }
}

/***/ }),

/***/ "./src/components/BtnUp/BtnUp.component.scss":
/*!***************************************************!*\
  !*** ./src/components/BtnUp/BtnUp.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Footer/Footer.class.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/Footer.class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.component.html */ "./src/components/Footer/Footer.component.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var Footer = /*#__PURE__*/function (_HTMLElement) {
  function Footer() {
    _classCallCheck(this, Footer);
    return _callSuper(this, Footer);
  }
  _inherits(Footer, _HTMLElement);
  return _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _Footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-component', Footer);

/***/ }),

/***/ "./src/components/Footer/Footer.component.html":
/*!*****************************************************!*\
  !*** ./src/components/Footer/Footer.component.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="container">
  <footer class="footer">
    <div class="footer__logo">200TERABYTE WEB STUDIO</div>
  </footer>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Footer/Footer.component.js":
/*!***************************************************!*\
  !*** ./src/components/Footer/Footer.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.component.scss */ "./src/components/Footer/Footer.component.scss");
/* harmony import */ var _Footer_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.class */ "./src/components/Footer/Footer.class.js");



/***/ }),

/***/ "./src/components/Footer/Footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/Footer/Footer.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/Header.class.js":
/*!***********************************************!*\
  !*** ./src/components/Header/Header.class.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.component.html */ "./src/components/Header/Header.component.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var Header = /*#__PURE__*/function (_HTMLElement) {
  function Header() {
    _classCallCheck(this, Header);
    return _callSuper(this, Header);
  }
  _inherits(Header, _HTMLElement);
  return _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _Header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"];
      this.className = 'header-fixed page_dodgerblue';
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-component', Header);

/***/ }),

/***/ "./src/components/Header/Header.component.html":
/*!*****************************************************!*\
  !*** ./src/components/Header/Header.component.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="container">
  <header class="header">

    <div class="header__1">
      <div class="header__logo">frontend200tb</div>
      <div id="header__nav" class="header__nav"></div>  
    </div>

    <div class="header__2">
      <social-icons></social-icons>
      <settings-component></settings-component>
    </div>

    <search-form></search-form>

  </header>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Header/Header.component.js":
/*!***************************************************!*\
  !*** ./src/components/Header/Header.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.component.scss */ "./src/components/Header/Header.component.scss");
/* harmony import */ var _Header_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.class */ "./src/components/Header/Header.class.js");
/* harmony import */ var _header_nav_header_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-nav/header-nav */ "./src/components/Header/header-nav/header-nav.js");
/* harmony import */ var _search_form_search_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-form/search-form */ "./src/components/Header/search-form/search-form.js");
/* harmony import */ var _social_icons_social_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-icons/social-icons */ "./src/components/Header/social-icons/social-icons.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings */ "./src/components/Header/settings/settings.js");
/* harmony import */ var _settings_set_btn_set_btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/set-btn/set-btn */ "./src/components/Header/settings/set-btn/set-btn.js");
/* harmony import */ var _settings_set_btn_set_btn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_settings_set_btn_set_btn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _settings_set_color_set_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/set-color/set-color */ "./src/components/Header/settings/set-color/set-color.js");
/* harmony import */ var _settings_set_color_set_color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_settings_set_color_set_color__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/components/Header/Header.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/Header/Header.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/header-nav/data-header-nav.js":
/*!*************************************************************!*\
  !*** ./src/components/Header/header-nav/data-header-nav.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _acmp_tasks_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../acmp/tasks/tasks */ "./src/components/acmp/tasks/tasks.js");

var dataHeaderNav = [{
  url: '/acmp.html',
  text: 'acmp',
  content: '<acmp-tasks></acmp-tasks>',
  act: function act() {
    (0,_acmp_tasks_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataHeaderNav);

/***/ }),

/***/ "./src/components/Header/header-nav/header-nav.js":
/*!********************************************************!*\
  !*** ./src/components/Header/header-nav/header-nav.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endUrl: () => (/* binding */ endUrl)
/* harmony export */ });
/* harmony import */ var _data_header_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-header-nav */ "./src/components/Header/header-nav/data-header-nav.js");
/* harmony import */ var _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Nav/Nav.component */ "./src/components/Nav/Nav.component.js");
/****************
Скрипт из файла header-nav.js
Навигация по сайту
acmp
******************/


var headerNav = document.getElementById('header__nav');
var main = document.getElementById('maincomponent');
var endUrl = '/acmp.html';

// 1. Создаем ссылки для меню header_nav из массива dataHeaderNav
createHeaderNav(_data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"]);
renderHeaderNav();
function createHeaderNav(dataHeaderNav) {
  dataHeaderNav.forEach(function (el) {
    el.elem = document.createElement('a');
    el.elem.href = el.url;
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', function (event) {
      event.preventDefault();
      // добавим class="active"
      classActive(dataHeaderNav, el.elem);
      endUrl = el.url;
      main.innerHTML = el.content;
      (0,_Nav_Nav_component__WEBPACK_IMPORTED_MODULE_1__["default"])();
      el.act();
    });
  });
}
function renderHeaderNav() {
  _data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (el) {
    headerNav.appendChild(el.elem);
  });
  classActive(_data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"], _data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"][0].elem);
  main.innerHTML = _data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"][0].content;
  (0,_Nav_Nav_component__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _data_header_nav__WEBPACK_IMPORTED_MODULE_0__["default"][0].act();
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach(function (el) {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

/***/ }),

/***/ "./src/components/Header/search-form/_search-form.scss":
/*!*************************************************************!*\
  !*** ./src/components/Header/search-form/_search-form.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/search-form/elem-search-form.html":
/*!*****************************************************************!*\
  !*** ./src/components/Header/search-form/elem-search-form.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div id="search-google" class="search-google container none">
  <form action="https://www.google.com/search" method="get">
    <input type="text" name="q">
    <input type="submit" value="Search in google.com">
    <input type="reset" value="Reset">
  </form>
</div>

`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Header/search-form/element-search-form.js":
/*!******************************************************************!*\
  !*** ./src/components/Header/search-form/element-search-form.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elem_search_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-search-form.html */ "./src/components/Header/search-form/elem-search-form.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var SearchForm = /*#__PURE__*/function (_HTMLElement) {
  function SearchForm() {
    _classCallCheck(this, SearchForm);
    return _callSuper(this, SearchForm);
  }
  _inherits(SearchForm, _HTMLElement);
  return _createClass(SearchForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _elem_search_form_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('search-form', SearchForm);

/***/ }),

/***/ "./src/components/Header/search-form/search-form.js":
/*!**********************************************************!*\
  !*** ./src/components/Header/search-form/search-form.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_search-form.scss */ "./src/components/Header/search-form/_search-form.scss");
/* harmony import */ var _element_search_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-search-form */ "./src/components/Header/search-form/element-search-form.js");



/***/ }),

/***/ "./src/components/Header/settings/_settings.scss":
/*!*******************************************************!*\
  !*** ./src/components/Header/settings/_settings.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/settings/elem-settings.html":
/*!***********************************************************!*\
  !*** ./src/components/Header/settings/elem-settings.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div id="settings" class="settings">
  <div class="set-up-btn">
    <set-btn></set-btn>
  </div>
  <div id="set-section" class="set-section none">
    <set-color></set-color>
    <set-view></set-view>
  </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Header/settings/element-settings.js":
/*!************************************************************!*\
  !*** ./src/components/Header/settings/element-settings.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elem_settings_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-settings.html */ "./src/components/Header/settings/elem-settings.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var Settings = /*#__PURE__*/function (_HTMLElement) {
  function Settings() {
    _classCallCheck(this, Settings);
    return _callSuper(this, Settings);
  }
  _inherits(Settings, _HTMLElement);
  return _createClass(Settings, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _elem_settings_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('settings-component', Settings);

/***/ }),

/***/ "./src/components/Header/settings/search-btn/search-btn.js":
/*!*****************************************************************!*\
  !*** ./src/components/Header/settings/search-btn/search-btn.js ***!
  \*****************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/** **************
Скрипт из файла search.js
*************** */
/* Алгоритм работы
1. Создаем элемент с id="search-btn"
2. Добавляем элемент с id="search-btn" в customElements
3. Если есть searchBtn и searchGoogle
*/
// 1. Создаем элемент с id="search-btn"
var SearchBtn = /*#__PURE__*/function (_HTMLElement) {
  function SearchBtn() {
    var _this;
    _classCallCheck(this, SearchBtn);
    _this = _callSuper(this, SearchBtn);
    _this.addEventListener('click', searchFormToggle);
    return _this;
  }
  _inherits(SearchBtn, _HTMLElement);
  return _createClass(SearchBtn, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div id=\"search-btn\" class=\"search-btn\"></div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // 2. Добавляем элемент с id="search_btn" в customElements
customElements.define('search-btn', SearchBtn);
var searchBtn = document.querySelector('#search-btn');
var searchGoogle = document.querySelector('#search-google');
function searchFormToggle() {
  searchGoogle.classList.toggle('none');
}

/***/ }),

/***/ "./src/components/Header/settings/set-btn/set-btn.js":
/*!***********************************************************!*\
  !*** ./src/components/Header/settings/set-btn/set-btn.js ***!
  \***********************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/** **************
Скрипт из файла set-btn.js
****************** */
/* Алгоритм работы
1. Создаем элемент с id="set-btn"
2. Добавляем элемент с id="set-btn" в customElements
3. Если есть setBtn и setSection
*/
// 1. Создаем элемент с id="set-btn"
var SetBtn = /*#__PURE__*/function (_HTMLElement) {
  function SetBtn() {
    var _this;
    _classCallCheck(this, SetBtn);
    _this = _callSuper(this, SetBtn);
    _this.addEventListener('click', setToggle);
    return _this;
  }
  _inherits(SetBtn, _HTMLElement);
  return _createClass(SetBtn, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div id=\"set-btn\" class=\"set-btn\"></div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // 2. Добавляем элемент с id="set-btn" в customElements
customElements.define('set-btn', SetBtn);
var setBtn = document.querySelector('#set-btn');
var setSection = document.querySelector('#set-section');
var nav = document.querySelector('#nav');
function setToggle() {
  setSection.classList.toggle('none');
  if (!setSection.classList.contains('none')) {
    nav.style.marginTop = '80px';
  } else {
    nav.style.marginTop = '10px';
  }
}

/***/ }),

/***/ "./src/components/Header/settings/set-color/set-color.js":
/*!***************************************************************!*\
  !*** ./src/components/Header/settings/set-color/set-color.js ***!
  \***************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/** **************
Скрипт из файла set-color.js
****************** */

/** ***************************
В div id="set-color" по нажатию на кнопки
будет меняться цветовая схема страницы
**************************** */

var page = document.querySelector('#page');
var stick = document.querySelector('.header-fixed');
var SetColor = /*#__PURE__*/function (_HTMLElement) {
  function SetColor() {
    _classCallCheck(this, SetColor);
    return _callSuper(this, SetColor);
  }
  _inherits(SetColor, _HTMLElement);
  return _createClass(SetColor, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div id=\"set-color\" class=\"set-color\">\n      <button id=\"select-red\"></button>\n      <button id=\"select-sand\"></button>\n      <button id=\"select-yellow\"></button>\n      <button id=\"select-olive\"></button>\n      <button id=\"select-green\"></button>\n      <button id=\"select-dodgerblue\"></button>\n      <button id=\"select-blue\"></button>\n      <button id=\"select-brown\"></button>\n      <button id=\"select-silver\"></button>\n    </div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('set-color', SetColor);
var selectRed = document.querySelector('#select-red');
var selectSand = document.querySelector('#select-sand');
var selectYellow = document.querySelector('#select-yellow');
var selectOlive = document.querySelector('#select-olive');
var selectGreen = document.querySelector('#select-green');
var selectDodgerblue = document.querySelector('#select-dodgerblue');
var selectBlue = document.querySelector('#select-blue');
var selectBrown = document.querySelector('#select-brown');
var selectSilver = document.querySelector('#select-silver');

/* Удаляем имя класса с прошлым цветом и добавляем имя класса с новым цветом для page */
var addPageColor = function addPageColor(color) {
  page.classList.remove('page_red', 'page_sand', 'page_yellow', 'page_olive', 'page_green', 'page_dodgerblue', 'page_blue', 'page_brown', 'page_silver');
  stick.classList.remove('page_red', 'page_sand', 'page_yellow', 'page_olive', 'page_green', 'page_dodgerblue', 'page_blue', 'page_brown', 'page_silver');
  page.classList.add(color);
  stick.classList.add(color);
};

/* обработаем нажатие на кнопку */
selectRed.addEventListener('click', function () {
  return addPageColor('page_red');
});
selectSand.addEventListener('click', function () {
  return addPageColor('page_sand');
});
selectYellow.addEventListener('click', function () {
  return addPageColor('page_yellow');
});
selectOlive.addEventListener('click', function () {
  return addPageColor('page_olive');
});
selectGreen.addEventListener('click', function () {
  return addPageColor('page_green');
});
selectDodgerblue.addEventListener('click', function () {
  return addPageColor('page_dodgerblue');
});
selectBlue.addEventListener('click', function () {
  return addPageColor('page_blue');
});
selectBrown.addEventListener('click', function () {
  return addPageColor('page_brown');
});
selectSilver.addEventListener('click', function () {
  return addPageColor('page_silver');
});

/***/ }),

/***/ "./src/components/Header/settings/set-view/set-view.js":
/*!*************************************************************!*\
  !*** ./src/components/Header/settings/set-view/set-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/theme */ "./src/components/Header/settings/theme/theme.js");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_theme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _snow_snow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snow/snow */ "./src/components/Header/settings/snow/snow.js");
/* harmony import */ var _snow_snow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_snow_snow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_btn_search_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-btn/search-btn */ "./src/components/Header/settings/search-btn/search-btn.js");
/* harmony import */ var _search_btn_search_btn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_btn_search_btn__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var SetView = /*#__PURE__*/function (_HTMLElement) {
  function SetView() {
    _classCallCheck(this, SetView);
    return _callSuper(this, SetView);
  }
  _inherits(SetView, _HTMLElement);
  return _createClass(SetView, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div class=\"set-view\">\n      <theme-btn></theme-btn>\n      <snow-btn></snow-btn>\n      <search-btn></search-btn>\n    </div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('set-view', SetView);

/***/ }),

/***/ "./src/components/Header/settings/settings.js":
/*!****************************************************!*\
  !*** ./src/components/Header/settings/settings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_settings.scss */ "./src/components/Header/settings/_settings.scss");
/* harmony import */ var _set_view_set_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-view/set-view */ "./src/components/Header/settings/set-view/set-view.js");
/* harmony import */ var _element_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-settings */ "./src/components/Header/settings/element-settings.js");




/***/ }),

/***/ "./src/components/Header/settings/snow/snow.js":
/*!*****************************************************!*\
  !*** ./src/components/Header/settings/snow/snow.js ***!
  \*****************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/** **************
Скрипт из файла snow.js
****************** */
/* Алгоритм работы
1. Создаем касс SnowBtn
2. Добавляем элемент snow-btn (экземпляр класса SnowBtn) в customElements
*/

var page = document.querySelector('#page');

// 1. Создаем касс SnowBtn
var SnowBtn = /*#__PURE__*/function (_HTMLElement) {
  function SnowBtn() {
    var _this;
    _classCallCheck(this, SnowBtn);
    _this = _callSuper(this, SnowBtn);
    _this.addEventListener('click', function () {
      snowToggle();
      saveSnow();
    });
    function snowToggle() {
      page.classList.toggle('snow');
    }

    // Функция saveSnow() сохранит настройки снега в localStorage
    function saveSnow() {
      currentSnow = page.classList.contains('snow') ? 'snow' : 'net';
      localStorage.setItem('snow', currentSnow);
    }

    // Берем настройки из localStorage, если их нет то пусть будет снег
    var currentSnow = localStorage.getItem('snow') || 'snow';
    if (currentSnow == 'snow') {
      page.classList.add('snow');
    }
    return _this;
  }
  _inherits(SnowBtn, _HTMLElement);
  return _createClass(SnowBtn, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div id=\"snow_btn\" class=\"snow_btn\"></div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // 2. Добавляем элемент snow-btn (экземпляр класса SnowBtn) в customElements
customElements.define('snow-btn', SnowBtn);

/***/ }),

/***/ "./src/components/Header/settings/theme/theme.js":
/*!*******************************************************!*\
  !*** ./src/components/Header/settings/theme/theme.js ***!
  \*******************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/** **************
Скрипт из файла theme.js
****************** */
/* Алгоритм работы
1. Создаем касс ThemeBtn
2. Добавляем элемент theme-btn (экземпляр класса ThemeBtn) в customElements
*/

var page = document.querySelector('#page');
var stick = document.querySelector('.header-fixed');

// 1. Создаем касс ThemeBtn
var ThemeBtn = /*#__PURE__*/function (_HTMLElement) {
  function ThemeBtn() {
    var _this;
    _classCallCheck(this, ThemeBtn);
    _this = _callSuper(this, ThemeBtn);
    _this.addEventListener('click', function () {
      themeToggle();
      saveTheme();
    });
    function themeToggle() {
      page.classList.toggle('dark-theme');
      stick.classList.toggle('dark-theme');
    }

    // Функция saveTheme() сохранит настройки темы в localStorage
    function saveTheme() {
      currentTheme = page.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    }

    // Берем настройки из localStorage, если их нет то пусть будет снег будет светлая тема
    var currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme == 'dark') {
      page.classList.add('dark-theme');
      stick.classList.add('dark-theme');
    }
    return _this;
  }
  _inherits(ThemeBtn, _HTMLElement);
  return _createClass(ThemeBtn, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div id=\"theme_btn\" class=\"theme_btn\"></div>\n    ";
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)); // 2. Добавляем элемент theme-btn (экземпляр класса ThemeBtn) в customElements
customElements.define('theme-btn', ThemeBtn);

/***/ }),

/***/ "./src/components/Header/social-icons/_social-icons.scss":
/*!***************************************************************!*\
  !*** ./src/components/Header/social-icons/_social-icons.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Header/social-icons/elem-social-icons.html":
/*!*******************************************************************!*\
  !*** ./src/components/Header/social-icons/elem-social-icons.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `
<div class="social" id="social">
  <a class="social__icon social__icon_vk" href="https://vk.com/benchpress250" title="ВКонтакте" target="_blank"></a>

  <a class="social__icon social__icon_wa" href="https://wa.me/79507658158") title="WhatsApp" target="_blank"></a>

  <a class="social__icon social__icon_tg" href="https://t.me/Frontend200tb" title="Telegram" target="_blank"></a>

  <a class="social__icon social__icon_dc" href="https://discord.com/channels/@me" title="Discord" target="_blank"></a>

  <a class="social__icon social__icon_github" href="https://github.com/frontend200tb" title="GitHub" target="_blank"></a>

  <a class="social__icon social__icon_cw" href="https://www.codewars.com/users/frontend200tb" title="Codewars" target="_blank"></a>

  <a class="social__icon social__icon_cf" href="https://codeforces.com/profile/frontend200tb" title="Codeforces" target="_blank"></a>

  <a class="social__icon social__icon_lc" href="https://leetcode.com/u/frontend200tb/" title="LeetCode" target="_blank"></a>

  <a class="social__icon social__icon_cp" href="https://codepen.io/ivan200tb/" title="Codepen" target="_blank"></a>

  <a class="social__icon social__icon_replit" href="https://replit.com/@frontend200tb" title="Repl.it" target="_blank"></a>

  <a class="social__icon social__icon_yt" href="https://www.youtube.com/@ivan-kashirin" title="@ivan-kashirin" target="_blank"></a>

  <a class="social__icon social__icon_yt" href="https://www.youtube.com/@ivan200kg" title="@ivan200kg" target="_blank"></a>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Header/social-icons/element-social-icons.js":
/*!********************************************************************!*\
  !*** ./src/components/Header/social-icons/element-social-icons.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elem_social_icons_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elem-social-icons.html */ "./src/components/Header/social-icons/elem-social-icons.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var SocialIcons = /*#__PURE__*/function (_HTMLElement) {
  function SocialIcons() {
    _classCallCheck(this, SocialIcons);
    return _callSuper(this, SocialIcons);
  }
  _inherits(SocialIcons, _HTMLElement);
  return _createClass(SocialIcons, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _elem_social_icons_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('social-icons', SocialIcons);

/***/ }),

/***/ "./src/components/Header/social-icons/social-icons.js":
/*!************************************************************!*\
  !*** ./src/components/Header/social-icons/social-icons.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_icons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_social-icons.scss */ "./src/components/Header/social-icons/_social-icons.scss");
/* harmony import */ var _element_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-social-icons */ "./src/components/Header/social-icons/element-social-icons.js");



/***/ }),

/***/ "./src/components/Main/Main.class.js":
/*!*******************************************!*\
  !*** ./src/components/Main/Main.class.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.component.html */ "./src/components/Main/Main.component.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var Main = /*#__PURE__*/function (_HTMLElement) {
  function Main() {
    _classCallCheck(this, Main);
    return _callSuper(this, Main);
  }
  _inherits(Main, _HTMLElement);
  return _createClass(Main, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _Main_component_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('main-component', Main);

/***/ }),

/***/ "./src/components/Main/Main.component.html":
/*!*************************************************!*\
  !*** ./src/components/Main/Main.component.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="container">
  <section id="maincomponent"></section>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Main/Main.component.js":
/*!***********************************************!*\
  !*** ./src/components/Main/Main.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.component.scss */ "./src/components/Main/Main.component.scss");
/* harmony import */ var _Main_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.class */ "./src/components/Main/Main.class.js");



/***/ }),

/***/ "./src/components/Main/Main.component.scss":
/*!*************************************************!*\
  !*** ./src/components/Main/Main.component.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Nav/Nav.class.js":
/*!*****************************************!*\
  !*** ./src/components/Nav/Nav.class.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.component.html */ "./src/components/Nav/Nav.component.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var Nav = /*#__PURE__*/function (_HTMLElement) {
  function Nav() {
    _classCallCheck(this, Nav);
    return _callSuper(this, Nav);
  }
  _inherits(Nav, _HTMLElement);
  return _createClass(Nav, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = _Nav_component_html__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('nav-component', Nav);

/***/ }),

/***/ "./src/components/Nav/Nav.component.html":
/*!***********************************************!*\
  !*** ./src/components/Nav/Nav.component.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div class="container">
  <nav class="nav" id="nav"></nav>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/Nav/Nav.component.js":
/*!*********************************************!*\
  !*** ./src/components/Nav/Nav.component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNav)
/* harmony export */ });
/* harmony import */ var _Nav_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.class */ "./src/components/Nav/Nav.class.js");
/* harmony import */ var _data_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-nav */ "./src/components/Nav/data-nav.js");
/* harmony import */ var _Header_header_nav_header_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/header-nav/header-nav */ "./src/components/Header/header-nav/header-nav.js");
/** **************
Скрипт из файла nav.js
создает ссылки в меню nav для каждого пункта меню header_nav
Cf      Tasks
****************** */




var nav = document.getElementById('nav');
var main = document.getElementById('maincomponent');

/** **************
1. nav для страниц acmp
**************** */

// 1.1 Создаем ссылки из массива dataNavAcmp
createNavAcmp(_data_nav__WEBPACK_IMPORTED_MODULE_1__.dataNavAcmp);
function createNavAcmp(navCode) {
  navCode.forEach(function (el) {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', function (event) {
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      main.innerHTML = el.content;
      el.act();
    });
  });
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach(function (el) {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}
function createNav() {
  // 1.2 Добавим ссылки navAcmp в nav если адрес acmp.html
  if (_Header_header_nav_header_nav__WEBPACK_IMPORTED_MODULE_2__.endUrl === '/acmp.html') {
    nav.innerHTML = '';
    _data_nav__WEBPACK_IMPORTED_MODULE_1__.dataNavAcmp.forEach(function (el) {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    _data_nav__WEBPACK_IMPORTED_MODULE_1__.dataNavAcmp[0].elem.classList.add('active');
  }
}

/***/ }),

/***/ "./src/components/Nav/data-nav.js":
/*!****************************************!*\
  !*** ./src/components/Nav/data-nav.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataNavAcmp: () => (/* binding */ dataNavAcmp)
/* harmony export */ });
/* harmony import */ var _acmp_tasks_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../acmp/tasks/tasks */ "./src/components/acmp/tasks/tasks.js");

var dataNavAcmp = [{
  url: 'tasks.html',
  text: 'Задачи',
  content: '<acmp-tasks></acmp-tasks>',
  act: function act() {
    (0,_acmp_tasks_tasks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}];

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp1.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp1.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 1. A+B -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 2%)</div>

<p>Требуется сложить два целых числа А и В.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записаны два натуральных числа через пробел. Значения чисел не превышают 10<sup>9</sup>.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел А и В.</p>

<h4>Пример</h4>
<code>2 3</code>
<code>5</code>

<details>
  <summary>Решение</summary>
<pre>
#include &lt;iostream&gt;

using namespace std;

int main() {
  int a, b;
  cin >> a >> b;

  cout &lt;&lt; a + b;
}
</pre>
</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp10.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp10.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 10. Уравнение -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 17%)</div>

<p>Вася в школе изучил квадратные уравнения и понял, как они легко решаются путем вычисления дискриминанта. Но Петя поведал ему о методе решения кубических уравнений вида A*X3 + B*X2 + C*X + D = 0. На факультативе по математике Васе задали решить около ста уравнений как раз такого вида. Но, к сожалению, Вася забыл формулы, о которых рассказывал ему Петя. Но Васе было известно, что все корни уравнений – целые числа и находятся на отрезке [-100, 100]. Поэтому у Васи есть шанс найти их методом перебора, но для этого ему придется затратить уйму времени, т.к. возможно необходимо будет осуществить перебор нескольких тысяч значений. Помогите Васе написать программу, которая поможет ему найти корни кубических уравнений!</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записаны 4 числа: A, B, C и D – целые коэффициенты кубического уравнения. Каждый коэффициент по модулю меньше 32768, A ≠ 0.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести через пробел в порядке возрастания все корни заданного кубического уравнения. Кратные корни следует выводить только один раз.</p>

<h4>Пример 1</h4>
<code>1 -3 0 0</code>
<code>0 3</code>

<h4>Пример 2</h4>
<code>3 -15 18 0</code>
<code>0 2 3</code>

<h4>Пример 3</h4>
<code>1 -7 -33 135</code>
<code>-5 3 9</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp11.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp11.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 11. Зайчик -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 55%)</div>

<p>В нашем зоопарке появился заяц. Его поместили в клетку, и чтобы ему не было скучно, директор зоопарка распорядился поставить в его клетке лесенку. Теперь наш зайчик может прыгать по лесенке вверх, перепрыгивая через ступеньки. Лестница имеет определенное количество ступенек N. Заяц может одним прыжком преодолеть не более К ступенек. Для разнообразия зайчик пытается каждый раз найти новый путь к вершине лестницы. Директору любопытно, сколько различных способов есть у зайца добраться до вершины лестницы при заданных значениях K и N. Помогите директору написать программу, которая поможет вычислить это количество. Например, если K=3 и N=4, то существуют следующие маршруты: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1. Т.е. при данных значениях у зайца всего 7 различных маршрутов добраться до вершины лестницы.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записаны два натуральных числа K и N (1 ≤ K ≤ N ≤ 300). К - максимальное количество ступенек, которое может преодолеть заяц одним прыжком, N – общее число ступенек лестницы.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести количество возможных вариантов различных маршрутов зайца на верхнюю ступеньку лестницы без ведущих нулей.</p>

<h4>Пример 1</h4>
<code>1 3</code>
<code>1</code>

<h4>Пример 2</h4>
<code>2 7</code>
<code>21</code>

<h4>Пример 3</h4>
<code>3 10</code>
<code>274</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp12.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp12.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 12. Дачники -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 45%)</div>

<p>Всем известно, что дачники – народ странный, почти такой же, как и программисты. Строят они свои дачи непонятно где, да и выращивают там непонятно что и непонятно зачем. А уж как они туда добираются, это другая история: кто на автобусе, кто на электричке, кто на автомобиле, ну а кто-то вовсе пешком ходит от дома и до самого участка. Так что не стоит удивляться, если вдруг Вы узнаете, что некое садоводческое товарищество располагается на острове, а дачники добираются до него самолетом. Да еще и на этом острове может не быть посадочной полосы, так что высадиться на остров можно, только прыгая с парашютом (мы уж не рассматриваем то, как они возвращаются с дач домой). Рассмотрим этот уникальный случай. Пилот всегда старается осуществить высадку парашютистов таким образом, чтобы дачники приземлялись как можно ближе к своим прямоугольным участкам. Пилоту интересно знать: сколько дачников приземлится на свои участки? Помогите ему решить эту задачу!</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано натуральное число N (1 ≤ N ≤ 1000) – количество дачников, далее идут N строк, в каждой из которых описаны координаты каждого дачника и его участка:
  X Y X1 Y1 X2 Y2 X3 Y3 X4 Y4
  где
  (X,Y) – координаты приземления парашютиста
  (X1, Y1, X2, Y2, X3, Y3, X4,Y4) – координаты прямоугольного участка на плоскости, указанные последовательно.
  Все координаты – целые числа, не превышающие 50000 по абсолютной величине</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести количество дачников, приземлившихся на свой участок. Попадание на границу участка считается попаданием на участок.</p>

<h4>Пример 1</h4>
<pre>
3
6 6 3 6 6 9 8 7 5 4
13 5 9 2 9 8 12 8 12 2
3 2 2 1 2 3 6 3 6 1
</pre>
<code>2</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp13.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp13.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 13. Быки и коровы -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 20%)</div>

<p>Петя и Вася часто играют в различные логические игры. Недавно Петя поведал Васе о новой игре «Быки и коровы» и теперь они играют в эту игру сутками. Суть игры очень проста: Петя загадывает четырехзначное число, состоящее из различных цифр. Вася отгадывает задуманное Петей число, перебирая возможные варианты. Каждый раз Вася предлагает вариант своего четырёхзначного числа, состоящего из различных цифр, а Петя делает Васе подсказку: сообщает количество быков и коров, после чего Вася с учетом подсказки продолжает отгадывание числа до тех пор, пока не отгадает. Быки – это количество цифр в предложенном Васей числе, совпадающих по значению и стоящих в правильной позиции в задуманном Петей числе. Коровы – количество цифр, совпадающих по значению, но находящихся в неверной позиции. Например, если Петя задумал число 5671, а Вася предложил вариант 7251, то число быков равно 1 (только цифра 1 на своем месте), а число коров равно 2 (только цифры 7 и 5 не на своих местах). Петя силен в математике, но даже он может ошибаться. Помогите Пете написать программу, которая бы по загаданному Петей и предложенному Васей числам сообщала количество быков и коров.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записано два четырехзначных натуральных числа A и B через пробел, где А – загаданное Петей число, а В – предложенный Васей вариант.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести два целых числа через пробел — количество быков и коров.</p>

<h4>Пример 1</h4>
<code>5671 7251</code>
<code>1 2</code>

<h4>Пример 2</h4>
<code>1234 1234</code>
<code>4 0</code>

<h4>Пример 3</h4>
<code>2034 6234</code>
<code>2 1</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp14.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp14.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 14. НОК -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 19%)</div>

<p>Требуется написать программу, определяющую наименьшее общее кратное (НОК) чисел a и b.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записаны два натуральных числа А и В через пробел, не превышающих 46340.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — НОК чисел А и В.</p>

<h4>Пример 1</h4>
<code>36 27</code>
<code>108</code>

<h4>Пример 2</h4>
<code>39 65</code>
<code>195</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp15.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp15.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 15. Дороги -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 18%)</div>

<p>В галактике «Milky Way» на планете «Snowflake» есть N городов, некоторые из которых соединены дорогами. Император галактики «Milky Way» решил провести инвентаризацию дорог на планете «Snowflake». Но, как оказалось, он не силен в математике, поэтому он просит вас сосчитать количество дорог. Требуется написать программу, помогающую императору сосчитать количество дорог на планете «Snowflake».</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано число N (0 ≤ N ≤ 100). В следующих N строках записано по N чисел, каждое из которых является единичкой или ноликом. Причем, если в позиции (i, j) квадратной матрицы стоит единичка, то i-ый и j-ый города соединены дорогами, а если нолик, то не соединены. Гарантируется, что все дороги соединяют различные города.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT необходимо вывести число, определяющее количество дорог на планете «Snowflake».</p>

<h4>Пример 1</h4>
<pre>
5
0 1 0 0 0
1 0 1 1 0
0 1 0 0 0
0 1 0 0 0
0 0 0 0 0
</pre>
<code>3</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp16.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp16.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 16. Лесенка -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 45%)</div>

<p>Лесенкой называется набор кубиков, в котором каждый более верхний слой содержит кубиков меньше, чем предыдущий. Требуется написать программу, вычисляющую число лесенок, которое можно построить из N кубиков.</p>

<h4>Входные данные</h4>
<p>Во входном файле INPUT.TXT записано натуральное число N (1 ≤ N ≤ 100) – количество кубиков в лесенке.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT необходимо вывести число лесенок, которые можно построить из N кубиков.</p>

<h4>Пример 1</h4>
<code>3</code>
<code>2</code>

<h4>Пример 2</h4>
<code>6</code>
<code>4</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp17.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp17.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 17. Поле чудес -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 31%)</div>

<p>Для игры в «Поле чудес» используется круглый барабан, разделенный на сектора, и стрелка. В каждом секторе записано некоторое число. В различных секторах может быть записано одно и то же число. Однажды ведущий игры решил изменить правила. Он сам стал вращать барабан и называть игроку (который барабана не видел) все числа подряд в том порядке, в котором на них указывала стрелка в процессе вращения барабана. Получилось так, что барабан сделал целое число оборотов, то есть последний сектор совпал с первым. После этого, ведущий задал участнику вопрос: какое наименьшее число секторов может быть на барабане? Требуется написать программу, отвечающую на этот вопрос ведущего.</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано число N – количество чисел, которое назвал ведущий (2 ≤ N ≤ 30000). Во второй строке записано N чисел, на которые указывала стрелка в процессе вращения барабана. Первое число всегда совпадает с последним (в конце стрелка указывает на тот же сектор, что и в начале). Числа, записанные в секторах барабана – натуральные, не превышающие 32000.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT необходимо вывести одно число – минимальное число секторов, которое может быть на барабане.</p>

<h4>Пример 1</h4>
<pre>
13
5 3 1 3 5 2 5 3 1 3 5 2 5
</pre>
<code>6</code>

<h4>Пример 2</h4>
<pre>
4
1 1 1 1
</pre>
<code>1</code>

<h4>Пример 3</h4>
<pre>
4
1 2 3 1
</pre>
<code>3</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp18.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp18.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 18. Факториал -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 42%)</div>

<p>Требуется вычислить факториал целого числа N. Факториал обозначают как N! и вычисляют по формуле:</p>

<code>N! = 1 * 2 * 3 * … * (N-1) * N, причем 0! = 1.</code>

<p>Так же допустимо рекуррентное соотношение: N! = (N-1)! * N</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записано одно целое неотрицательное число N (N &lt; 1000).</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести одно целое число — значение N!.</p>

<h4>Пример 1</h4>
<code>1</code>
<code>1</code>

<h4>Пример 2</h4>
<code>3</code>
<code>6</code>

<h4>Пример 3</h4>
<code>5</code>
<code>120</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp19.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp19.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 19. Ферзь, ладья и конь -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 29%)</div>

<p>На шахматной доске 8х8 расположены три фигуры: ферзь, ладья и конь. Требуется определить количество пустых полей доски, которые находятся под боем. Для простоты будем полагать, что фигуры могут «бить» через другие фигуры. Например, в рассмотренной справа ситуации будем считать, что ферзь бьет D5 через ладью.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записаны через пробел координаты расположения трех фигур: ферзя, ладьи и коня соответственно. Каждая координата состоит из одного английского символа (от A до H) и одной цифры (от 1 до 8).</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести количество пустых полей, которые бьют указанные во входных данных фигуры.</p>

<h4>Пример 1</h4>
<code>D1 D3 E5</code>
<code>29</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp2.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp2.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 2. Сумма -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 19%)</div>

<p>Требуется посчитать сумму целых чисел, расположенных между числами 1 и N включительно.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записано единственное целое число N, не превышающее по абсолютной величине 10<sup>4</sup>.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число — сумму чисел, расположенных между 1 и N включительно.</p>

<h4>Пример</h4>
<code>5</code>
<code>15</code>

<details>
  <summary>Решение</summary>
<pre>
#include &lt;iostream&gt;

using namespace std;

int main() {
  int n; // от -10000 до +10000
  cin >> n;

  int sum = 0; // сумма чисел между 1 и n
  if (n > 1) {
    for (int i = 1; i &lt;= n; i++) {
      sum += i;
    }
  } else {
    for (int i = n; i &lt;= 1; i++) {
      sum += i;
    }
  }

  cout &lt;&lt; sum;
}
</pre>
</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp20.html":
/*!****************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp20.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 20. Пилообразная последовательность -->
<div class="time-memory">(Время 2с. Память 128мб. Сложность 38%)</div>

<p>Последовательность a1, a2, a3, … , an-1, an называется пилообразной, если она удовлетворяет одному из следующих условий:</p>
<ol>
  <li>a1 &lt; a2 > a3 &lt; … > an-1 &lt; an</li>
  <li>a1 &lt; a2 > a3 &lt; … &lt; an-1 > an</li>
  <li>a1 > a2 &lt; a3 > … &lt; an-1 > an</li>
  <li>a1 > a2 &lt; a3 > … > an-1 &lt; an</li>
</ol>
<p>Дана числовая последовательность. Требуется определить длину самой длинной ее пилообразной непрерывной подпоследовательности.</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано натуральное число N – количество элементов последовательности. Во второй строке файла через пробел записаны N элементов целочисленной последовательности {ai}. Ограничения: N &lt; 10<sup>6</sup>, |ai| &lt; 32000.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести одно целое число – длину самой длинной непрерывной пилообразной подпоследовательности.</p>

<h4>Пример 1</h4>
<pre>
3
1 2 3
</pre>
<code>2</code>

<h4>Пример 2</h4>
<pre>
12
5 7 6 3 4 2 7 1 8 9 4 5
</pre>
<code>7</code>

<h4>Пример 3</h4>
<pre>
5
1 -2 3 -4 5
</pre>
<code>5</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp3.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp3.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 3. Пятью пять - двадцать пять! -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 8%)</div>

<p>Вася и Петя учатся в школе в одном классе. Недавно Петя поведал Васе о хитром способе возведения в квадрат натуральных чисел, оканчивающихся на цифру 5. Теперь Вася может с легкостью возводить в квадрат двузначные (и даже некоторые трехзначные) числа, оканчивающиеся на 5. Способ заключается в следующем: для возведения в квадрат числа, оканчивающегося на 5 достаточно умножить число, полученное из исходного вычеркиванием последней пятерки на следующее по порядку число, затем остается лишь приписать «25» к получившемуся результату справа. Например, для того, чтобы возвести число 125 в квадрат достаточно 12 умножить на 13 и приписать 25, т.е. приписывая к числу 12*13=156 число 25, получаем результат 15625, т.е. 125<sup>2</sup>=15625. Напишите программу, возводящую число, оканчивающееся на 5, в квадрат для того, чтобы Вася смог проверить свои навыки.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записано одно натуральное число А, оканчивающееся на цифру 5, не превышающее 4*10<sup>5</sup>.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT выведите одно натуральное число - A<sup>2</sup> без лидирующих нулей.</p>

<h4>Пример 1</h4>
<code>5</code>
<code>25</code>

<h4>Пример 2</h4>
<code>75</code>
<code>5625</code>

<h4>Пример 3</h4>
<code>4255</code>
<code>18105025</code>

<details>
  <summary>Решение</summary>
<pre>
#include &lt;iostream&gt;

using namespace std;

int main() {
  long long a;
  cin >> a;

  cout &lt;&lt; a * a;
}
</pre>
</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp4.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp4.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 4. Игра -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 4%)</div>

<p>В свободное время одноклассники Вася и Петя любят играть в различные логические игры: морской бой, крестики-нолики, шахматы, шашки и многое другое. Ребята уже испробовали и поиграли во всевозможные классические игры подобного рода, включая компьютерные. Однажды им захотелось сыграть во что-нибудь новое, но ничего подходящего найти не удалось. Тогда Петя придумал следующую игру «Угадайка»: Играют двое участников. Первый загадывает любое трехзначное число, такое что первая и последняя цифры отличаются друг от друга более чем на единицу. Далее загадавший число игрок переворачивает загаданное число, меняя первую и последнюю цифры местами, таким образом получая еще одно число. Затем из максимального из полученных двух чисел вычитается минимальное. Задача второго игрока – угадать по первой цифре полученного в результате вычитания числа само это число. Например, если Вася загадал число 487, то перестановкой первой и последней цифры он получит число 784. После чего ему придется вычесть из 784 число 487, в результате чего получится число 297, которое и должен отгадать Петя по указанной первой цифре «2», взятой из этого числа. Петя успевает лучше Васи по математике, поэтому практически всегда выигрывает в играх такого типа. Но в данном случае Петя схитрил и специально придумал такую игру, в которой он не проиграет Васе в любом случае. Дело в том, что придуманная Петей игра имеет выигрышную стратегию, которая заключается в следующем: искомое число всегда является трехзначным и вторая его цифра всегда равна девяти, а для получения значения последней достаточно отнять от девяти первую, т.е. в рассмотренном выше случае последняя цифра равна 9-2=7. Помогите Пете еще упростить процесс отгадывания числа по заданной его первой цифре, написав соответствующую программу.</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT задана единственная цифра К, соответствующая первой цифре полученного Васей в результате вычитания наименьшего загаданного Васей значения из наибольшего.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести значение полученной Васей разности.</p>

<h4>Пример 1</h4>
<code>5</code>
<code>594</code>

<h4>Пример 2</h4>
<code>2</code>
<code>297</code>

<h4>Пример 3</h4>
<code>7</code>
<code>792</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp5.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp5.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 5. Статистика -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 15%)</div>

<p>Вася не любит английский язык, но каждый раз старается получить хотя бы четверку за четверть, чтобы оставаться ударником. В текущей четверти Вася заметил следующую закономерность: по нечетным дням месяца он получал тройки, а по четным – четверки. Так же он помнит, в какие дни он получал эти оценки. Поэтому он выписал на бумажке все эти дни для того, чтобы оценить, сколько у него троек и сколько четверок. Помогите Васе это сделать, расположив четные и нечетные числа в разных строчках. Вася может рассчитывать на оценку 4, если четверок не меньше, чем троек.</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано единственное число N – количество элементов целочисленного массива (1 ≤ N ≤ 100). Вторая строка содержит N чисел, представляющих заданный массив. Каждый элемент массива – натуральное число от 1 до 31. Все элементы массива разделены пробелом.</p>

<h4>Выходные данные</h4>
<p>В первую строку выходного файла OUTPUT.TXT нужно вывести числа, которые соответствуют дням месяцев, в которые Вася получил тройки, а во второй строке соответственно расположить числа месяца, в которые Вася получил четверки. В третьей строке нужно вывести «YES», если Вася может рассчитывать на четверку и «NO» в противном случае. В каждой строчке числа следует выводить в том же порядке, в котором они идут во входных данных. При выводе числа отделяются пробелом.</p>

<h4>Пример 1</h4>
<pre>
5
4 16 19 31 2
</pre>
<pre>
19 31
4 16 2
YES
</pre>

<h4>Пример 2</h4>
<pre>
8
29 4 7 12 15 17 24 1
</pre>
<pre>
29 7 15 17 1
4 12 24
NO
</pre>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp6.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp6.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 6. Шахматы -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 23%)</div>

<p>Совсем недавно Вася занялся программированием и решил реализовать собственную программу для игры в шахматы. Но у него возникла проблема определения правильности хода конем, который делает пользователь. Т.е. если пользователь вводит значение «C7-D5», то программа должна определить это как правильный ход, если же введено «E2-E4», то ход неверный. Также нужно проверить корректность записи ввода: если например, введено «D9-N5», то программа должна определить данную запись как ошибочную. Помогите ему осуществить эту проверку!</p>

<h4>Входные данные</h4>
<p>В единственной строке входного файла INPUT.TXT записан текст хода (непустая строка), который указал пользователь. Пользователь не может ввести строку, длиннее 5 символов.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести «YES», если указанный ход конем верный, если же запись корректна (в смысле правильности записи координат), но ход невозможен, то нужно вывести «NO». Если же координаты не определены или заданы некорректно, то вывести сообщение «ERROR».</p>

<h4>Пример 1</h4>
<code>C7-D5</code>
<code>YES</code>

<h4>Пример 2</h4>
<code>E2-E4</code>
<code>NO</code>

<h4>Пример 3</h4>
<code>BSN</code>
<code>ERROR</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp7.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp7.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 7. Золото племени АББА -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 30%)</div>

<p>Главный вождь племени Абба не умеет считать. В обмен на одну из его земель вождь другого племени предложил ему выбрать одну из трех куч с золотыми монетами. Но вождю племени Абба хочется получить наибольшее количество золотых монет. Помогите вождю сделать правильный выбор!</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записаны три натуральных числа через пробел. Каждое из чисел не превышает 10<sup>100</sup>. Числа записаны без ведущих нулей.</p>

<h4>Выходные данные</h4>
<p>В выходной файл OUTPUT.TXT нужно вывести одно целое число — максимальное количество монет, которые может взять вождь.</p>

<h4>Пример 1</h4>
<code>5 7 3</code>
<code>7</code>

<h4>Пример 2</h4>
<code>987531 234 86364</code>
<code>987531</code>

<h4>Пример 3</h4>
<code>189285 283 4958439238923098349024</code>
<code>4958439238923098349024</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp8.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp8.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 8. Арифметика -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 5%)</div>

<p>В прошлом году Вася пошел в школу и научился считать. В этом году он изучил таблицу умножения и теперь умеет перемножать любые числа от 1 до 10 без ошибок. Друг Петя рассказал ему про системы счисления, отличные от десятичной. В частности, про двоичную, восьмеричную и даже шестнадцатеричную. Теперь Вася без труда (но уже с помощью листка и ручки) может перемножать числа от 1 до 10 и в этих системах, используя перевод из нестандартной системы в десятичную и обратно из десятичной. Например, если Васе нужно перемножить числа 101 и 1001 в двоичной системе, то он сначала эти числа переводит в десятичное представление следующим образом:</p>

<code>(101)<sub>2</sub>=1*2<sup>2</sup>+0*2<sup>1</sup>+1*2<sup>0</sup>=4+0+1=5</code>
<code>(1001)<sub>2</sub>=1*2<sup>3</sup>+0*2<sup>2</sup>+0*2<sup>1</sup>+1*2<sup>0</sup>=8+0+0+1=9</code>

<p>После чего перемножение чисел 5 и 9 Вася с легкостью производит в десятичной системе счисления в уме и получает число 45. Далее производится перевод из десятичной системы счисления в двоичную. Для этого Вася делит число 45 на 2 (порядок системы счисления), запоминая остатки от деления, до тех пор пока в результате не останется число 0:</p>

<p>Ответ составляется из полученных остатков от деления путем их записи в обратном порядке. Таким образом Вася получает результат: (101)<sub>2</sub> * (1001)<sub>2</sub> = (101101)<sub>2</sub>. Но теперь Вася изучает таблицу умножения чисел от 1 до 100 в десятичной системе счисления, а поскольку запомнить такую таблицу очень сложно, то Васе придется очень долго ее зубрить. Составьте для Васи программу, которая поможет ему проверять свои знания.</p>

<h4>Входные данные</h4>
<p>Во входном файле INPUT.TXT записаны три натуральных числа A, B и C через пробел. Числа A и B ≤ 10<sup>2</sup>, а C ≤ 10<sup>6</sup>.</p>

<h4>Выходные данные</h4>
<p>В выходной файл нужно вывести YES в том случае, если A*B=C и вывести NO в противном случае.</p>

<h4>Пример 1</h4>
<code>8 54 432</code>
<code>YES</code>

<h4>Пример 2</h4>
<code>16 19 777</code>
<code>NO</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/el-acmp/el-acmp9.html":
/*!***************************************************!*\
  !*** ./src/components/acmp/el-acmp/el-acmp9.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!-- Задача 9. Домашнее задание -->
<div class="time-memory">(Время 1с. Память 16мб. Сложность 27%)</div>

<p>Петя успевает по математике лучше всех в классе, поэтому учитель задал ему сложное домашнее задание, в котором нужно в заданном наборе целых чисел найти сумму всех положительных элементов, затем найти где в заданной последовательности находятся максимальный и минимальный элемент и вычислить произведение чисел, расположенных в этой последовательности между ними. Так же известно, что минимальный и максимальный элемент встречаются в заданном множестве чисел только один раз и не являются соседними. Поскольку задач такого рода учитель дал Пете около ста, то Петя как сильный программист смог написать программу, которая по заданному набору чисел самостоятельно находит решение. А Вам слабо?</p>

<h4>Входные данные</h4>
<p>В первой строке входного файла INPUT.TXT записано единственное число N – количество элементов массива. Вторая строка содержит N целых чисел, представляющих заданный массив. Все элементы массива разделены пробелом. Каждое из чисел во входном файле, в том числе и N, не превышает 10<sup>2</sup> по абсолютной величине.</p>

<h4>Выходные данные</h4>
<p>В единственную строку выходного файла OUTPUT.TXT нужно вывести два числа, разделенных пробелом: сумму положительных элементов и произведение чисел, расположенных между минимальным и максимальным элементами. Значения суммы и произведения не превышают по модулю 3*10<sup>4</sup>.</p>

<h4>Пример 1</h4>
<pre>
5
-7 5 -1 3 9
</pre>
<code>17 -15</code>

<h4>Пример 2</h4>
<pre>
8
3 14 -9 4 -5 1 -12 4
</pre>
<code>26 180</code>

<h4>Пример 3</h4>
<pre>
10
-5 1 2 3 4 5 6 7 8 -3
</pre>
<code>36 5040</code>

<details>
  <summary>Решение</summary>

</details>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/tasks/js/data-aside.js":
/*!****************************************************!*\
  !*** ./src/components/acmp/tasks/js/data-aside.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asideThemes: () => (/* binding */ asideThemes)
/* harmony export */ });
// Создаем массив asideThemes с темами для блока aside
var asideThemes = ['Задачи 1-50'];

/***/ }),

/***/ "./src/components/acmp/tasks/js/data-pages.js":
/*!****************************************************!*\
  !*** ./src/components/acmp/tasks/js/data-pages.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pages: () => (/* binding */ pages)
/* harmony export */ });
/* harmony import */ var _pages_elem_tasks1_50_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/elem-tasks1-50.html */ "./src/components/acmp/tasks/pages/elem-tasks1-50.html");
// Создаем массив pages со страницами из aside меню

var pages = [_pages_elem_tasks1_50_html__WEBPACK_IMPORTED_MODULE_0__["default"]];

/***/ }),

/***/ "./src/components/acmp/tasks/js/element-tasks.js":
/*!*******************************************************!*\
  !*** ./src/components/acmp/tasks/js/element-tasks.js ***!
  \*******************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var AcmpTasks = /*#__PURE__*/function (_HTMLElement) {
  function AcmpTasks() {
    _classCallCheck(this, AcmpTasks);
    return _callSuper(this, AcmpTasks);
  }
  _inherits(AcmpTasks, _HTMLElement);
  return _createClass(AcmpTasks, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <section class=\"main__aside\">\n    </section>\n    ";
      this.className = 'acmp-tasks';
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('acmp-tasks', AcmpTasks);

/***/ }),

/***/ "./src/components/acmp/tasks/js/f-create-aside.js":
/*!********************************************************!*\
  !*** ./src/components/acmp/tasks/js/f-create-aside.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAside: () => (/* binding */ createAside),
/* harmony export */   createMain: () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _data_aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-aside */ "./src/components/acmp/tasks/js/data-aside.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ "./src/components/acmp/tasks/js/pages.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/** ***************
Функция createInput создает inputArray
**************** */



// 2. Создаем массив asideDiv для элементов aside меню
var asideDiv = [];

// 3. Для каждой темы из массива asideThemes
var _iterator = _createForOfIteratorHelper(_data_aside__WEBPACK_IMPORTED_MODULE_0__.asideThemes),
  _step;
try {
  var _loop = function _loop() {
    var theme = _step.value;
    // 3.1 Создаем элемент elementAside
    var elementAside = document.createElement('a');
    elementAside.href = '#';
    elementAside.innerHTML = theme;

    // 3.2 Добавляем элемент elementAside в массив asideDiv
    asideDiv.push(elementAside);

    // 3.3 По клику на элемент elementAside
    elementAside.addEventListener('click', function (e) {
      e.preventDefault();

      // 3.3.1 добавим ему class="active"
      classActive(asideDiv, elementAside);
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }

  // Ставим class="active" выбранному элементу меню и убираем с остальных
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function classActive(elementOl) {
  var elementLi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  elementOl.forEach(function (li) {
    li.classList.remove('active');
  });
  if (elementLi) {
    elementLi.classList.add('active');
  }
}
var aside = document.createElement('aside');
aside.classList.add('aside');
aside.append.apply(aside, asideDiv);
var main = document.createElement('main');
main.classList.add('main');
main.id = 'tasks'; // эта строчка отличается

(0,_pages__WEBPACK_IMPORTED_MODULE_1__["default"])(asideDiv, main);
function createAside() {
  return aside;
}
function createMain() {
  return main;
}

/***/ }),

/***/ "./src/components/acmp/tasks/js/pages.js":
/*!***********************************************!*\
  !*** ./src/components/acmp/tasks/js/pages.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLink)
/* harmony export */ });
/* harmony import */ var _data_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-pages */ "./src/components/acmp/tasks/js/data-pages.js");
/* harmony import */ var _pages_elem_tasks1_50__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/elem-tasks1-50 */ "./src/components/acmp/tasks/pages/elem-tasks1-50.js");
/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/


function pageLink(asideItems, currentContent) {
  asideItems.forEach(function (elem, index) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      if (_data_pages__WEBPACK_IMPORTED_MODULE_0__.pages[index]) {
        currentContent.innerHTML = _data_pages__WEBPACK_IMPORTED_MODULE_0__.pages[index];

        // подключаем на каждую страницу свои задачи
        switch (index) {
          case 0:
            (0,_pages_elem_tasks1_50__WEBPACK_IMPORTED_MODULE_1__["default"])();
            break;
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/components/acmp/tasks/pages/elem-tasks1-50.html":
/*!*************************************************************!*\
  !*** ./src/components/acmp/tasks/pages/elem-tasks1-50.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<article class="article">
  Задачи по спортивному программированию с сайта <a href="https://acmp.ru/" target="_blank">acmp.ru</a>
</article>


<!-- Содержание -->
<article class="article">

  <table class="acmp-tasks">

    <thead>
      <tr>
        <th>Номер</th>
        <th>Задача</th>
        <th>Тема</th>
        <th>Сложность</th>
        <th>Решена</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>1</td>
        <td><a href="#t1">A+B</a></td>
        <td>Задачи для начинающих</td>
        <td>2%</td>
        <td>+</td>
      </tr>

      <tr>
        <td>2</td>
        <td><a href="#t2">Сумма</a></td>
        <td>Целочисленная арифметика</td>
        <td>19%</td>
        <td>+</td>
      </tr>

      <tr>
        <td>3</td>
        <td><a href="#t3">Пятью пять - двадцать пять!</a></td>
        <td>Целочисленная арифметика</td>
        <td>8%</td>
        <td>+</td>
      </tr>

      <tr>
        <td>4</td>
        <td><a href="#t4">Игра</a></td>
        <td></td>
        <td>4%</td>
        <td></td>
      </tr>

      <tr>
        <td>5</td>
        <td><a href="#t5">Статистика</a></td>
        <td></td>
        <td>15%</td>
        <td></td>
      </tr>

      <tr>
        <td>6</td>
        <td><a href="#t6">Шахматы</a></td>
        <td></td>
        <td>23%</td>
        <td></td>
      </tr>

      <tr>
        <td>7</td>
        <td><a href="#t7">Золото племени АББА</a></td>
        <td></td>
        <td>30%</td>
        <td></td>
      </tr>

      <tr>
        <td>8</td>
        <td><a href="#t8">Арифметика</a></td>
        <td></td>
        <td>5%</td>
        <td></td>
      </tr>

      <tr>
        <td>9</td>
        <td><a href="#t9">Домашнее задание</a></td>
        <td></td>
        <td>27%</td>
        <td></td>
      </tr>

      <tr>
        <td>10</td>
        <td><a href="#t10">Уравнение</a></td>
        <td></td>
        <td>17%</td>
        <td></td>
      </tr>

      <tr>
        <td>11</td>
        <td><a href="#t11">Зайчик</a></td>
        <td></td>
        <td>55%</td>
        <td></td>
      </tr>

      <tr>
        <td>12</td>
        <td><a href="#t12">Дачники</a></td>
        <td></td>
        <td>45%</td>
        <td></td>
      </tr>

      <tr>
        <td>13</td>
        <td><a href="#t13">Быки и коровы</a></td>
        <td></td>
        <td>20%</td>
        <td></td>
      </tr>

      <tr>
        <td>14</td>
        <td><a href="#t14">НОК</a></td>
        <td></td>
        <td>19%</td>
        <td></td>
      </tr>

      <tr>
        <td>15</td>
        <td><a href="#t15">Дороги</a></td>
        <td></td>
        <td>18%</td>
        <td></td>
      </tr>

      <tr>
        <td>16</td>
        <td><a href="#t16">Лесенка</a></td>
        <td></td>
        <td>45%</td>
        <td></td>
      </tr>

      <tr>
        <td>17</td>
        <td><a href="#t17">Поле чудес</a></td>
        <td></td>
        <td>31%</td>
        <td></td>
      </tr>

      <tr>
        <td>18</td>
        <td><a href="#t18">Факториал</a></td>
        <td></td>
        <td>42%</td>
        <td></td>
      </tr>

      <tr>
        <td>19</td>
        <td><a href="#t19">Ферзь, ладья и конь</a></td>
        <td></td>
        <td>29%</td>
        <td></td>
      </tr>

      <tr>
        <td>20</td>
        <td><a href="#t20">Пилообразная последовательность</a></td>
        <td></td>
        <td>38%</td>
        <td></td>
      </tr>

    </tbody>
  </table>
</article>


<!-- Задача 1. A+B -->
<article class="article">
  <div class="anchor" id="t1"></div>
  <h3>Задача 1. A+B</h3>

  <div class="t1"></div>

</article>


<!-- Задача 2. Сумма -->
<article class="article">
  <div class="anchor" id="t2"></div>
  <h3>Задача 2. Сумма</h3>

  <div class="t2"></div>

</article>


<!-- Задача 3. Пятью пять - двадцать пять! -->
<article class="article">
  <div class="anchor" id="t3"></div>
  <h3>Задача 3. Пятью пять - двадцать пять!</h3>

  <div class="t3"></div>

</article>


<!-- Задача 4. Игра -->
<article class="article">
  <div class="anchor" id="t4"></div>
  <h3>Задача 4. Игра</h3>

  <div class="t4"></div>

</article>


<!-- Задача 5. Статистика -->
<article class="article">
  <div class="anchor" id="t5"></div>
  <h3>Задача 5. Статистика</h3>

  <div class="t5"></div>

</article>


<!-- Задача 6. Шахматы -->
<article class="article">
  <div class="anchor" id="t6"></div>
  <h3>Задача 6. Шахматы</h3>

  <div class="t4"></div>

</article>


<!-- Задача 7. Золото племени АББА -->
<article class="article">
  <div class="anchor" id="t7"></div>
  <h3>Задача 7. Золото племени АББА</h3>

  <div class="t7"></div>

</article>


<!-- Задача 8. Арифметика -->
<article class="article">
  <div class="anchor" id="t8"></div>
  <h3>Задача 8. Арифметика</h3>

  <div class="t8"></div>

</article>


<!-- Задача 9. Домашнее задание -->
<article class="article">
  <div class="anchor" id="t9"></div>
  <h3>Задача 9. Домашнее задание</h3>

  <div class="t9"></div>

</article>


<!-- Задача 10. Уравнение -->
<article class="article">
  <div class="anchor" id="t10"></div>
  <h3>Задача 10. Уравнение</h3>

  <div class="t10"></div>

</article>


<!-- Задача 11. Зайчик -->
<article class="article">
  <div class="anchor" id="t11"></div>
  <h3>Задача 11. Зайчик</h3>

  <div class="t11"></div>

</article>


<!-- Задача 12. Дачники -->
<article class="article">
  <div class="anchor" id="t12"></div>
  <h3>Задача 12. Дачники</h3>

  <div class="t12"></div>

</article>


<!-- Задача 13. Быки и коровы -->
<article class="article">
  <div class="anchor" id="t13"></div>
  <h3>Задача 13. Быки и коровы</h3>

  <div class="t13"></div>

</article>


<!-- Задача 14. НОК -->
<article class="article">
  <div class="anchor" id="t14"></div>
  <h3>Задача 14. НОК</h3>

  <div class="t14"></div>

</article>


<!-- Задача 15. Дороги -->
<article class="article">
  <div class="anchor" id="t15"></div>
  <h3>Задача 15. Дороги</h3>

  <div class="t15"></div>

</article>


<!-- Задача 16. Лесенка -->
<article class="article">
  <div class="anchor" id="t16"></div>
  <h3>Задача 16. Лесенка</h3>

  <div class="t16"></div>

</article>


<!-- Задача 17. Поле чудес -->
<article class="article">
  <div class="anchor" id="t17"></div>
  <h3>Задача 17. Поле чудес</h3>

  <div class="t17"></div>

</article>


<!-- Задача 18. Факториал -->
<article class="article">
  <div class="anchor" id="t18"></div>
  <h3>Задача 18. Факториал</h3>

  <div class="t18"></div>

</article>


<!-- Задача 19. Ферзь, ладья и конь -->
<article class="article">
  <div class="anchor" id="t19"></div>
  <h3>Задача 19. Ферзь, ладья и конь</h3>

  <div class="t19"></div>

</article>


<!-- Задача 20. Пилообразная последовательность -->
<article class="article">
  <div class="anchor" id="t20"></div>
  <h3>Задача 20. Пилообразная последовательность</h3>

  <div class="t20"></div>

</article>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/components/acmp/tasks/pages/elem-tasks1-50.js":
/*!***********************************************************!*\
  !*** ./src/components/acmp/tasks/pages/elem-tasks1-50.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inElem)
/* harmony export */ });
/* harmony import */ var _el_acmp_el_acmp1_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../el-acmp/el-acmp1.html */ "./src/components/acmp/el-acmp/el-acmp1.html");
/* harmony import */ var _el_acmp_el_acmp2_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../el-acmp/el-acmp2.html */ "./src/components/acmp/el-acmp/el-acmp2.html");
/* harmony import */ var _el_acmp_el_acmp3_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../el-acmp/el-acmp3.html */ "./src/components/acmp/el-acmp/el-acmp3.html");
/* harmony import */ var _el_acmp_el_acmp4_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../el-acmp/el-acmp4.html */ "./src/components/acmp/el-acmp/el-acmp4.html");
/* harmony import */ var _el_acmp_el_acmp5_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../el-acmp/el-acmp5.html */ "./src/components/acmp/el-acmp/el-acmp5.html");
/* harmony import */ var _el_acmp_el_acmp6_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../el-acmp/el-acmp6.html */ "./src/components/acmp/el-acmp/el-acmp6.html");
/* harmony import */ var _el_acmp_el_acmp7_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../el-acmp/el-acmp7.html */ "./src/components/acmp/el-acmp/el-acmp7.html");
/* harmony import */ var _el_acmp_el_acmp8_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../el-acmp/el-acmp8.html */ "./src/components/acmp/el-acmp/el-acmp8.html");
/* harmony import */ var _el_acmp_el_acmp9_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../el-acmp/el-acmp9.html */ "./src/components/acmp/el-acmp/el-acmp9.html");
/* harmony import */ var _el_acmp_el_acmp10_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../el-acmp/el-acmp10.html */ "./src/components/acmp/el-acmp/el-acmp10.html");
/* harmony import */ var _el_acmp_el_acmp11_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../el-acmp/el-acmp11.html */ "./src/components/acmp/el-acmp/el-acmp11.html");
/* harmony import */ var _el_acmp_el_acmp12_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../el-acmp/el-acmp12.html */ "./src/components/acmp/el-acmp/el-acmp12.html");
/* harmony import */ var _el_acmp_el_acmp13_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../el-acmp/el-acmp13.html */ "./src/components/acmp/el-acmp/el-acmp13.html");
/* harmony import */ var _el_acmp_el_acmp14_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../el-acmp/el-acmp14.html */ "./src/components/acmp/el-acmp/el-acmp14.html");
/* harmony import */ var _el_acmp_el_acmp15_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../el-acmp/el-acmp15.html */ "./src/components/acmp/el-acmp/el-acmp15.html");
/* harmony import */ var _el_acmp_el_acmp16_html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../el-acmp/el-acmp16.html */ "./src/components/acmp/el-acmp/el-acmp16.html");
/* harmony import */ var _el_acmp_el_acmp17_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../el-acmp/el-acmp17.html */ "./src/components/acmp/el-acmp/el-acmp17.html");
/* harmony import */ var _el_acmp_el_acmp18_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../el-acmp/el-acmp18.html */ "./src/components/acmp/el-acmp/el-acmp18.html");
/* harmony import */ var _el_acmp_el_acmp19_html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../el-acmp/el-acmp19.html */ "./src/components/acmp/el-acmp/el-acmp19.html");
/* harmony import */ var _el_acmp_el_acmp20_html__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../el-acmp/el-acmp20.html */ "./src/components/acmp/el-acmp/el-acmp20.html");




















function inElem() {
  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = _el_acmp_el_acmp1_html__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if (document.querySelector('.t2')) {
    document.querySelector('.t2').innerHTML = _el_acmp_el_acmp2_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  if (document.querySelector('.t3')) {
    document.querySelector('.t3').innerHTML = _el_acmp_el_acmp3_html__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  if (document.querySelector('.t4')) {
    document.querySelector('.t4').innerHTML = _el_acmp_el_acmp4_html__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  if (document.querySelector('.t5')) {
    document.querySelector('.t5').innerHTML = _el_acmp_el_acmp5_html__WEBPACK_IMPORTED_MODULE_4__["default"];
  }
  if (document.querySelector('.t6')) {
    document.querySelector('.t6').innerHTML = _el_acmp_el_acmp6_html__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
  if (document.querySelector('.t7')) {
    document.querySelector('.t7').innerHTML = _el_acmp_el_acmp7_html__WEBPACK_IMPORTED_MODULE_6__["default"];
  }
  if (document.querySelector('.t8')) {
    document.querySelector('.t8').innerHTML = _el_acmp_el_acmp8_html__WEBPACK_IMPORTED_MODULE_7__["default"];
  }
  if (document.querySelector('.t9')) {
    document.querySelector('.t9').innerHTML = _el_acmp_el_acmp9_html__WEBPACK_IMPORTED_MODULE_8__["default"];
  }
  if (document.querySelector('.t10')) {
    document.querySelector('.t10').innerHTML = _el_acmp_el_acmp10_html__WEBPACK_IMPORTED_MODULE_9__["default"];
  }
  if (document.querySelector('.t11')) {
    document.querySelector('.t11').innerHTML = _el_acmp_el_acmp11_html__WEBPACK_IMPORTED_MODULE_10__["default"];
  }
  if (document.querySelector('.t12')) {
    document.querySelector('.t12').innerHTML = _el_acmp_el_acmp12_html__WEBPACK_IMPORTED_MODULE_11__["default"];
  }
  if (document.querySelector('.t13')) {
    document.querySelector('.t13').innerHTML = _el_acmp_el_acmp13_html__WEBPACK_IMPORTED_MODULE_12__["default"];
  }
  if (document.querySelector('.t14')) {
    document.querySelector('.t14').innerHTML = _el_acmp_el_acmp14_html__WEBPACK_IMPORTED_MODULE_13__["default"];
  }
  if (document.querySelector('.t15')) {
    document.querySelector('.t15').innerHTML = _el_acmp_el_acmp15_html__WEBPACK_IMPORTED_MODULE_14__["default"];
  }
  if (document.querySelector('.t16')) {
    document.querySelector('.t16').innerHTML = _el_acmp_el_acmp16_html__WEBPACK_IMPORTED_MODULE_15__["default"];
  }
  if (document.querySelector('.t17')) {
    document.querySelector('.t17').innerHTML = _el_acmp_el_acmp17_html__WEBPACK_IMPORTED_MODULE_16__["default"];
  }
  if (document.querySelector('.t18')) {
    document.querySelector('.t18').innerHTML = _el_acmp_el_acmp18_html__WEBPACK_IMPORTED_MODULE_17__["default"];
  }
  if (document.querySelector('.t19')) {
    document.querySelector('.t19').innerHTML = _el_acmp_el_acmp19_html__WEBPACK_IMPORTED_MODULE_18__["default"];
  }
  if (document.querySelector('.t20')) {
    document.querySelector('.t20').innerHTML = _el_acmp_el_acmp20_html__WEBPACK_IMPORTED_MODULE_19__["default"];
  }
}

/***/ }),

/***/ "./src/components/acmp/tasks/tasks.js":
/*!********************************************!*\
  !*** ./src/components/acmp/tasks/tasks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTasks)
/* harmony export */ });
/* harmony import */ var _js_element_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/element-tasks */ "./src/components/acmp/tasks/js/element-tasks.js");
/* harmony import */ var _js_element_tasks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_element_tasks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_f_create_aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/f-create-aside */ "./src/components/acmp/tasks/js/f-create-aside.js");
/** *******************
Скрипт из файла tasks.js
Объект tasks содержит страницу alg-tasks
Функция showTasks показывает страницу tasks
******************** */



// 1. Создаем объект tasks
var tasks = {};

// 2. В объекте tasks создаем свойство aside
tasks.aside = (0,_js_f_create_aside__WEBPACK_IMPORTED_MODULE_1__.createAside)();

// 3. В объекте tasks создаем свойство main
tasks.main = (0,_js_f_create_aside__WEBPACK_IMPORTED_MODULE_1__.createMain)();

// 4. Экспортируем функцию showTasks()
function showTasks() {
  var mainAside = document.querySelector('.main__aside');
  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(tasks.aside);
    mainAside.append(tasks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    var eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_Main_Main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main/Main.component */ "./src/components/Main/Main.component.js");
/* harmony import */ var _components_Header_Header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/Header.component */ "./src/components/Header/Header.component.js");
/* harmony import */ var _components_Nav_Nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav/Nav.component */ "./src/components/Nav/Nav.component.js");
/* harmony import */ var _components_Footer_Footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer/Footer.component */ "./src/components/Footer/Footer.component.js");
/* harmony import */ var _components_BtnUp_BtnUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BtnUp/BtnUp.component */ "./src/components/BtnUp/BtnUp.component.js");
// index.js корневой скрипт

// Стили


// Компоненты





// Функции

(0,_components_BtnUp_BtnUp_component__WEBPACK_IMPORTED_MODULE_5__["default"])();
console.log('200tb start');
})();

/******/ })()
;
//# sourceMappingURL=index.js.map