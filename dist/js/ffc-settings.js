/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/ff-challenge-options.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/ff-challenge-options.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background: #fff;\\n}\\n\\n.ffc-options {\\n  padding: 3rem 2rem;\\n}\\n.ffc-options__control-bar {\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-items: center;\\n}\\n.ffc-options__control-bar .ffc-options__logo {\\n  display: block;\\n}\\n.ffc-options__control-bar-item {\\n  margin-right: 1rem;\\n}\\n.ffc-options__button {\\n  display: flex;\\n  align-items: center;\\n  border: 1px solid #4199fd;\\n  border-radius: 30px;\\n  background-color: #4199fd;\\n  color: #fff;\\n  cursor: pointer;\\n  padding: 5px 15px;\\n  transition: background-color 0.3s ease;\\n  box-shadow: none;\\n  outline: 0;\\n}\\n.ffc-options__button:hover {\\n  background-color: #3177c7;\\n  transition: background-color 0.3s ease;\\n}\\n.ffc-options__loader {\\n  display: none;\\n  width: 15px;\\n  margin-left: 8px;\\n}\\n.ffc-options__loader--show {\\n  display: inline-block;\\n}\\n.ffc-options__loader--hide {\\n  display: none;\\n}\\n.ffc-options .ffc-challenge-table {\\n  margin-top: 1rem;\\n  width: 100%;\\n  text-align: left;\\n  border-collapse: collapse;\\n}\\n.ffc-options .ffc-challenge-table thead tr {\\n  border-bottom: 1px solid #ccd0d4;\\n}\\n.ffc-options .ffc-challenge-table thead tr th {\\n  padding: 1rem 0;\\n}\\n.ffc-options .ffc-challenge-table tfoot tr {\\n  border-top: 1px solid #ccd0d4;\\n}\\n.ffc-options .ffc-challenge-table tfoot tr th {\\n  padding: 1rem 0;\\n}\\n.ffc-options .ffc-challenge-table tbody tr:nth-child(even) {\\n  background-color: #fafafa;\\n}\\n.ffc-options .ffc-challenge-table tbody tr td {\\n  padding: 1rem 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/ff-challenge-options.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/loader.svg":
/*!*******************************!*\
  !*** ./src/images/loader.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/loader.svg\");\n\n//# sourceURL=webpack:///./src/images/loader.svg?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/logo.svg\");\n\n//# sourceURL=webpack:///./src/images/logo.svg?");

/***/ }),

/***/ "./src/js/admin/ffc-settings.js":
/*!**************************************!*\
  !*** ./src/js/admin/ffc-settings.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-functions */ \"./src/js/common-functions.js\");\n/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.svg */ \"./src/images/logo.svg\");\n/* harmony import */ var _images_loader_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/loader.svg */ \"./src/images/loader.svg\");\n/* harmony import */ var _sass_ff_challenge_options_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/ff-challenge-options.scss */ \"./src/sass/ff-challenge-options.scss\");\n/* harmony import */ var _sass_ff_challenge_options_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_ff_challenge_options_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n/**\n * Button to refresh the Challenge data.\n */\nconst refreshDataButton = document.querySelector(\n\t'.ffc-options__button--refresh-data'\n);\n\nif ( refreshDataButton ) {\n\trefreshDataButton.addEventListener( 'click', function () {\n\t\tObject(_common_functions__WEBPACK_IMPORTED_MODULE_0__[\"toggleLoader\"])( 'show' );\n\t\trefreshDataButton.firstChild.textContent = ffI18n.refreshing;\n\t\tconst ffcTable = document.querySelector( '.ffc-challenge-table' );\n\n\t\t/**\n\t\t * If table is not empty, then clear it.\n\t\t */\n\t\tif ( ffcTable.innerHTML ) {\n\t\t\tffcTable.innerHTML = '';\n\t\t}\n\n\t\tObject(_common_functions__WEBPACK_IMPORTED_MODULE_0__[\"getChallengeData\"])().then( function ( responseData ) {\n\t\t\trefreshDataButton.firstChild.textContent = ffI18n.refreshData;\n\t\t\tObject(_common_functions__WEBPACK_IMPORTED_MODULE_0__[\"toggleLoader\"])( 'hide' );\n\t\t\tObject(_common_functions__WEBPACK_IMPORTED_MODULE_0__[\"sendChallengeShortcodeDataToServer\"])( responseData );\n\t\t\tObject(_common_functions__WEBPACK_IMPORTED_MODULE_0__[\"generateChallengeShortcodeTable\"])( responseData.data );\n\t\t} );\n\t} );\n}\n\n\n//# sourceURL=webpack:///./src/js/admin/ffc-settings.js?");

/***/ }),

/***/ "./src/js/common-functions.js":
/*!************************************!*\
  !*** ./src/js/common-functions.js ***!
  \************************************/
/*! exports provided: getChallengeData, sendChallengeShortcodeDataToServer, generateChallengeShortcodeTable, toggleLoader, addLoaderToElements, removeLoaderFromElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChallengeData\", function() { return getChallengeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendChallengeShortcodeDataToServer\", function() { return sendChallengeShortcodeDataToServer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateChallengeShortcodeTable\", function() { return generateChallengeShortcodeTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleLoader\", function() { return toggleLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLoaderToElements\", function() { return addLoaderToElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLoaderFromElements\", function() { return removeLoaderFromElements; });\n/**\n * GET's the challenge data from the strategy11 API.\n */\nfunction getChallengeData() {\n\treturn fetch( 'http://api.strategy11.com/wp-json/challenge/v1/1' ).then(\n\t\t( response ) => {\n\t\t\treturn response.json();\n\t\t}\n\t);\n}\n\n/**\n * Ajax call to `ffc_challenge_shortcode_handler` action.\n * Sends necessary data under the `payload` key to the server.\n *\n * @param {Object} data Data that needs to be sent to server for caching.\n */\nfunction sendChallengeShortcodeDataToServer( data ) {\n\tconst ffcShortcodeData = new FormData();\n\n\t/**\n\t * Build form data before sending.\n\t */\n\tffcShortcodeData.append( 'action', 'ffc_challenge_shortcode_handler' );\n\tffcShortcodeData.append( 'nonce', ffcGlobal.ffcShortcodeNonce );\n\tffcShortcodeData.append( 'payload', JSON.stringify( data ) );\n\n\treturn fetch( ffcGlobal.ajaxUrl, {\n\t\tmethod: 'POST',\n\t\tbody: ffcShortcodeData,\n\t} );\n}\n\n/**\n * Generates table for `ffc_challenge` shortcode on the front end.\n *\n * @param {Object} tableData Data to generate table head and body.\n */\nfunction generateChallengeShortcodeTable( tableData ) {\n\t/**\n\t * This will be used inside <thead> element.\n\t */\n\tconst tableHeaderData = tableData.headers;\n\n\t/**\n\t * This will be used inside <tbody> element.\n\t */\n\tconst tableBodyData = tableData.rows;\n\n\t/**\n\t * The empty <table /> container on the page which will\n\t * be later populated by `tableData`.\n\t */\n\tconst ffcTable = document.querySelectorAll( '.ffc-challenge-table' );\n\n\tif ( ffcTable.innerHTML ) {\n\t\tffcTable.innerHTML = '';\n\t}\n\n\t/**\n\t * Loop through all empty <table /> containers on the front end.\n\t *\n\t * This is done since it is possible that a shor\n\t */\n\t[].forEach.call( ffcTable, function ( node ) {\n\t\tconst fragment = document.createDocumentFragment();\n\t\tconst tableHeader = document.createElement( 'thead' );\n\t\tconst tableFooter = document.createElement( 'tfoot' );\n\t\tconst tableHeaderRow = document.createElement( 'tr' );\n\t\tconst tableFooterRow = document.createElement( 'tr' );\n\t\tconst tableBody = document.createElement( 'tbody' );\n\n\t\ttableHeader.appendChild( tableHeaderRow );\n\t\ttableFooter.appendChild( tableFooterRow );\n\n\t\t/**\n\t\t * Populate <th /> elements inside <thead />.\n\t\t */\n\t\ttableHeaderData.forEach( ( item ) => {\n\t\t\tconst thNode = document.createElement( 'th' );\n\t\t\tthNode.innerText = item;\n\t\t\ttableHeaderRow.appendChild( thNode );\n\t\t} );\n\n\t\t/**\n\t\t * Populate <th /> elements inside <tfoot />.\n\t\t */\n\t\ttableHeaderData.forEach( ( item ) => {\n\t\t\tconst thNode = document.createElement( 'th' );\n\t\t\tthNode.innerText = item;\n\t\t\ttableFooterRow.appendChild( thNode );\n\t\t} );\n\n\t\t/**\n\t\t * Populate <tr /> elements inside <tbody />\n\t\t */\n\t\tfor ( const item in tableBodyData ) {\n\t\t\tconst trNode = document.createElement( 'tr' );\n\t\t\ttrNode.innerHTML = `\n\t\t\t\t<td>${ tableBodyData[ item ].id }</td>\n\t\t\t\t<td>${ tableBodyData[ item ].fname }</td>\n\t\t\t\t<td>${ tableBodyData[ item ].lname }</td>\n\t\t\t\t<td>${ tableBodyData[ item ].email }</td>\n\t\t\t\t<td>${ tableBodyData[ item ].date }</td>\n\t\t\t`;\n\n\t\t\ttableBody.appendChild( trNode );\n\t\t}\n\n\t\t/**\n\t\t * Append <thead /> and <tbody /> to\n\t\t * Document Fragment.\n\t\t */\n\t\tfragment.appendChild( tableHeader );\n\t\tfragment.appendChild( tableBody );\n\t\tfragment.appendChild( tableFooter );\n\n\t\t/**\n\t\t * Append Document Fragment to all the empty <table />\n\t\t * containers with the class `.ffc-challenge-table`\n\t\t */\n\t\tnode.appendChild( fragment );\n\t} );\n}\n\n/**\n * Display toggles the loading icon on the options page.\n *\n * @param {string} status Status of the loader icon.\n */\nfunction toggleLoader( status ) {\n\tconst loaders = document.querySelectorAll( '.ffc-options__loader' );\n\n\tif ( ! loaders ) {\n\t\treturn;\n\t}\n\n\tif ( 'show' === status ) {\n\t\t[].forEach.call( loaders, function ( loader ) {\n\t\t\tloader.classList.remove( 'ffc-options__loader--hide' );\n\t\t\tloader.classList.add( 'ffc-options__loader--show' );\n\t\t} );\n\t}\n\n\tif ( 'hide' === status ) {\n\t\t[].forEach.call( loaders, function ( loader ) {\n\t\t\tloader.classList.remove( 'ffc-options__loader--show' );\n\t\t\tloader.classList.add( 'ffc-options__loader--hide' );\n\t\t} );\n\t}\n}\n\n/**\n * Appends a loader to elements which are waiting for the AJAX call to the API to finish.\n *\n * @param {string} className The name of the element where the loader needs to be appended.\n */\nfunction addLoaderToElements( className ) {\n\tconst elements = document.querySelectorAll( className );\n\n\tif ( ! elements ) {\n\t\treturn;\n\t}\n\n\t[].forEach.call( elements, function ( element ) {\n\t\telement.insertAdjacentHTML(\n\t\t\t'afterend',\n\t\t\t`<div class=\"ffc-loader-container\">\n\t\t\t\t<img class=\"ffc-loader\" src=\"${ ffcGlobal.pluginUrl }/dist/images/loader.svg\" />\n\t\t\t</div>`\n\t\t);\n\t} );\n}\n\n/**\n * Removes the loaders added by `addLoaderToElements` once AJAX call completes.\n */\nfunction removeLoaderFromElements() {\n\tconst elements = document.querySelectorAll( '.ffc-loader-container' );\n\n\tif ( ! elements ) {\n\t\treturn;\n\t}\n\n\t[].forEach.call( elements, function ( element ) {\n\t\telement.remove();\n\t} );\n}\n\n\n//# sourceURL=webpack:///./src/js/common-functions.js?");

/***/ }),

/***/ "./src/sass/ff-challenge-options.scss":
/*!********************************************!*\
  !*** ./src/sass/ff-challenge-options.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ff-challenge-options.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/ff-challenge-options.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/sass/ff-challenge-options.scss?");

/***/ }),

/***/ 1:
/*!********************************************!*\
  !*** multi ./src/js/admin/ffc-settings.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/admin/ffc-settings.js */\"./src/js/admin/ffc-settings.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/admin/ffc-settings.js?");

/***/ })

/******/ });