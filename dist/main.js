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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/DOM.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\n\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\n\\r\\nblockquote::before,\\r\\nblockquote::after,\\r\\nq::before,\\r\\nq::after {\\r\\n  content: '';\\r\\n  content: none;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n#row1,\\r\\n#row2,\\r\\n#row3 {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n#row1 {\\r\\n  order: 1;\\r\\n}\\r\\n\\r\\n#row2 {\\r\\n  order: 2;\\r\\n}\\r\\n\\r\\n#row3 {\\r\\n  order: 3;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 7rem;\\r\\n  height: 6rem;\\r\\n  margin: 0.12rem;\\r\\n  border: 1px solid black;\\r\\n  background-color: #0077b3;\\r\\n  color: #cef;\\r\\n  font-size: 3rem;\\r\\n  box-shadow: 3px 3px 5px -3px rgba(0, 34, 51, 0.75);\\r\\n}\\r\\n\\r\\n#info {\\r\\n  display: block;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.button-wrapper {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/js/DOM.js":
/*!***********************!*\
  !*** ./src/js/DOM.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameDisplay; });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable max-len */\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-return-assign */\n/* eslint-disable no-undef */\n/* eslint-disable no-unused-vars */\n\n\n\n\nconst GameDisplay = (() => {\n  const startButton = document.getElementById('submit');\n  const playButton = document.getElementById('playAgain');\n  const resetButton = document.getElementById('reset');\n  const cells = document.querySelectorAll('.cell');\n  const form = document.getElementById('form');\n  const buttonWrapper = document.querySelector('.button-wrapper');\n  const message = document.getElementById('message');\n\n  const displayButtons = function displayButtons(value) {\n    if (value === 'start') {\n      buttonWrapper.style.display = 'block';\n      form.style.display = 'none';\n    } else {\n      buttonWrapper.style.display = 'none';\n      form.style.display = 'block';\n    }\n  };\n\n  const scoreBoard = function scoreBoard(player1 = 'Player1', player2 = 'Player2') {\n    const player1name = document.getElementById('play1name');\n    const player2name = document.getElementById('play2name');\n    const player1score = document.getElementById('play1score');\n    const player2score = document.getElementById('play2score');\n\n    player1name.innerText = `${player1} (X)`;\n    player2name.innerText = `${player2} (O)`;\n\n    player1score.innerText = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerOneScore;\n    player2score.innerText = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerTwoScore;\n  };\n\n  const changeFlow = function changeFlow() {\n    if (_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame() === false) {\n      return;\n    }\n    if (_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame() === 'tie') {\n      message.innerHTML = 'It\\'s a tie.';\n      _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus = false;\n      return;\n    }\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame() === _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerOne() ? _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerOneScore += 1 : _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerTwoScore += 1;\n    message.innerHTML = `${_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endGame().name} WIN! Congratulations...`;\n    scoreBoard(_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerOne().name, _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerTwo().name);\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus = false;\n  };\n\n  const getMark = function getMark(index) {\n    if (_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus === false) {\n      return;\n    }\n    if (_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].move(index)) {\n      const position = document.getElementById(index);\n      position.innerText = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].whosTurn().sign;\n      _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeTurn();\n      changeFlow();\n    } else {\n      message.innerHTML = 'You can\\'t move on that spot!';\n    }\n  };\n\n  const startGame = function startGame() {\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayers();\n    displayButtons('start');\n    scoreBoard(_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerOne().name, _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerTwo().name);\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus = true;\n  };\n\n  const againGame = function againGame() {\n    displayButtons('start');\n    _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\n    cells.forEach(value => value.innerText = '');\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTurn(0);\n    message.innerText = '';\n    scoreBoard(_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerOne().name, _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayerTwo().name);\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameStatus = true;\n  };\n\n  const resetGame = function resetGame() {\n    displayButtons('restart');\n    _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerOneScore = 0;\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerTwoScore = 0;\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTurn(0);\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerOne = ('Player1', 'X');\n    _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerTwo = ('Player2', 'O');\n    cells.forEach(value => value.innerText = '');\n    message.innerText = '';\n    scoreBoard(_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerOne.name, _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerTwo.name);\n    document.getElementById('names').reset();\n  };\n\n  startButton.addEventListener('click', startGame);\n  playButton.addEventListener('click', againGame);\n  resetButton.addEventListener('click', resetGame);\n\n  cells.forEach(\n    cell => cell.addEventListener('click', getMark.bind(undefined, parseInt(cell.id, 10))),\n  );\n\n  return {\n\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/js/DOM.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GamePlay; });\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* eslint-disable no-undef */\n/* eslint-disable no-unused-vars */\n/* eslint-disable no-var */\n\n\n\nconst GamePlay = (() => {\n  var gameStatus = false;\n  var playerOne;\n  var playerTwo;\n  var playerOneScore = 0;\n  var playerTwoScore = 0;\n  var turn = 0;\n  let playerOneWin = false;\n  let playerTwoWin = false;\n\n  const getPlayers = function getPlayers() {\n    let name1;\n    let name2;\n    try {\n      name1 = document.getElementById('player1').value || 'Player1';\n      name2 = document.getElementById('player2').value || 'Player2';\n    } catch (error) {\n      name1 = 'Player1';\n      name2 = 'Player2';\n    }\n    playerOne = Object(_players__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name1, 'X');\n    playerTwo = Object(_players__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name2, 'O');\n  };\n\n  const getPlayerOne = function getPlayerOne() {\n    return playerOne;\n  };\n\n  const getPlayerTwo = function getPlayerTwo() {\n    return playerTwo;\n  };\n\n  const setTurn = function setTurn(value) {\n    turn = value;\n    return turn;\n  };\n\n  const changeTurn = function changeTurn() {\n    if (turn % 2 === 0) {\n      turn += 1;\n      return playerOne;\n    }\n    turn += 1;\n    return playerTwo;\n  };\n\n  const whosTurn = function whosTurn() {\n    if (turn % 2 === 0) {\n      return playerOne;\n    }\n    return playerTwo;\n  };\n\n  const isWin = function isWin() {\n    const board = _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get();\n    const line1 = [board[0], board[1], board[2]];\n    const line2 = [board[3], board[4], board[5]];\n    const line3 = [board[6], board[7], board[8]];\n    const line4 = [board[0], board[3], board[6]];\n    const line5 = [board[1], board[4], board[7]];\n    const line6 = [board[2], board[5], board[8]];\n    const diagonal1 = [board[0], board[4], board[8]];\n    const diagonal2 = [board[2], board[4], board[6]];\n\n    const possibilities = [line1, line2, line3, line4, line5, line6, diagonal1, diagonal2];\n\n    for (let i = 0; i < possibilities.length; i += 1) {\n      if (possibilities[i].every(value => value === 'X')) {\n        playerOneWin = true;\n        playerTwoWin = false;\n        return true;\n      }\n      if (possibilities[i].every(value => value === 'O')) {\n        playerTwoWin = true;\n        playerOneWin = false;\n        return true;\n      }\n    }\n    return false;\n  };\n\n\n  const isTie = function isTie() {\n    const board = _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get();\n    if (!isWin() && board.every(value => value !== '')) {\n      return true;\n    }\n    return false;\n  };\n\n  const whoWon = function whoWon() {\n    if (isWin()) {\n      return playerOneWin ? playerOne : playerTwo;\n    }\n    return false;\n  };\n\n  const isMovable = function isMovable(index) {\n    const board = _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get();\n    if (board[index] === '') {\n      return true;\n    }\n    return false;\n  };\n\n  const move = function move(index) {\n    if (isMovable(index)) {\n      _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(index, whosTurn().sign);\n      return true;\n    }\n    return false;\n  };\n\n  const endGame = function endGame(cb1 = isWin, cb2 = whoWon, cb3 = isTie) {\n    if (cb1()) {\n      return cb2();\n    }\n    if (cb3()) {\n      return 'tie';\n    }\n    return false;\n  };\n\n  return {\n    setTurn,\n    changeTurn,\n    endGame,\n    move,\n    gameStatus,\n    playerOne,\n    playerTwo,\n    playerOneScore,\n    playerTwoScore,\n    getPlayers,\n    whosTurn,\n    getPlayerOne,\n    getPlayerTwo,\n  };\n})();\n\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameBoard; });\nconst GameBoard = (() => {\n  let boardArray = ['', '', '', '', '', '', '', '', ''];\n\n  const getBoard = function getBoard() {\n    return boardArray;\n  };\n\n  const updateBoard = function updateBoard(index, sign) {\n    boardArray[index] = sign;\n  };\n\n  const clearBoard = function clearBoard() {\n    boardArray = ['', '', '', '', '', '', '', '', ''];\n  };\n\n  return {\n    get: getBoard,\n    update: updateBoard,\n    clear: clearBoard,\n  };\n})();\n\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n// eslint-disable-next-line no-unused-vars\nfunction Player(name, sign) {\n  return { name, sign };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/style.css?");

/***/ })

/******/ });