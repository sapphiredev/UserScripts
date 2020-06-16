// ==UserScript==
// @namespace    https://www.sapphire.sh/
// @author       sapphire
// @downloadURL  https://raw.githubusercontent.com/sapphiredev/UserScripts/release/dist/pixiv-fanbox-actions.js
// @version      1592322502127
// @name         pixiv fanbox actions
// @description  add action buttons to pixiv fanbox pages
// @match        https://www.pixiv.net/*
// @match        https://*.fanbox.cc/*
// @grant        none
// ==/UserScript==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/pixiv-fanbox-actions.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./sleep */ "./src/helpers/sleep.ts"));


/***/ }),

/***/ "./src/helpers/sleep.ts":
/*!******************************!*\
  !*** ./src/helpers/sleep.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(tick) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, tick);
                })];
        });
    });
}
exports.sleep = sleep;


/***/ }),

/***/ "./src/scripts/pixiv-fanbox-actions.ts":
/*!*********************************************!*\
  !*** ./src/scripts/pixiv-fanbox-actions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
function generateButtons(params) {
    var links = params.links, images = params.images;
    var div = document.createElement('div');
    div.setAttribute('style', 'position:fixed;left:100px;top:100px;');
    {
        var button = document.createElement('button');
        button.textContent = 'open';
        button.onclick = generateHandler(images);
        div.appendChild(button);
    }
    if (links.prevLink !== null) {
        var button = document.createElement('button');
        button.textContent = 'prev';
        button.onclick = function () {
            div.remove();
            location.href = links.prevLink;
        };
        div.appendChild(button);
    }
    if (links.nextLink !== null) {
        var button = document.createElement('button');
        button.textContent = 'next';
        button.onclick = function () {
            div.remove();
            location.href = links.nextLink;
        };
        div.appendChild(button);
    }
    return div;
}
function waitForElement(selector) {
    return __awaiter(this, void 0, void 0, function () {
        var e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (false) {}
                    e = document.querySelectorAll(selector);
                    if (e.length > 0) {
                        return [2 /*return*/, e];
                    }
                    return [4 /*yield*/, helpers_1.sleep(100)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
function generateHandler(images) {
    var _this = this;
    return function () { return __awaiter(_this, void 0, void 0, function () {
        var _i, images_1, href, x;
        return __generator(this, function (_a) {
            console.log(images);
            for (_i = 0, images_1 = images; _i < images_1.length; _i++) {
                href = images_1[_i].href;
                x = open(href);
            }
            return [2 /*return*/];
        });
    }); };
}
function getArticle() {
    return __awaiter(this, void 0, void 0, function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waitForElement('article')];
                case 1:
                    _a.sent();
                    x = document.querySelector('article');
                    if (x === null) {
                        throw new Error('article not found');
                    }
                    return [2 /*return*/, x];
            }
        });
    });
}
function getImages(article) {
    return __awaiter(this, void 0, void 0, function () {
        var e;
        return __generator(this, function (_a) {
            e = article.querySelectorAll('article div:last-child a');
            return [2 /*return*/, Array.from(e)];
        });
    });
}
function attach(links) {
    return __awaiter(this, void 0, void 0, function () {
        var article, images, buttons;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getArticle()];
                case 1:
                    article = _a.sent();
                    return [4 /*yield*/, getImages(article)];
                case 2:
                    images = _a.sent();
                    buttons = generateButtons({ links: links, images: images });
                    article.appendChild(buttons);
                    return [2 /*return*/];
            }
        });
    });
}
function getLink(userId, postId) {
    return "https://www.pixiv.net/fanbox/creator/" + userId + "/post/" + postId;
}
function getLinks(response) {
    var _a, _b;
    var userId = response.user.userId;
    var prevId = (_a = response.prevPost) === null || _a === void 0 ? void 0 : _a.id;
    var nextId = (_b = response.nextPost) === null || _b === void 0 ? void 0 : _b.id;
    return {
        prevLink: prevId !== undefined ? getLink(userId, prevId) : null,
        nextLink: nextId !== undefined ? getLink(userId, nextId) : null,
    };
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var XHR;
    return __generator(this, function (_a) {
        XHR = window.XMLHttpRequest;
        // @ts-ignore
        window.XMLHttpRequest = function () {
            var xhr = new XHR();
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (xhr.status !== 200) {
                    return;
                }
                if (xhr.responseURL.match(/post\.info/) === null) {
                    return;
                }
                var response = JSON.parse(xhr.response).body;
                var links = getLinks(response);
                attach(links);
            }, false);
            return xhr;
        };
        return [2 /*return*/];
    });
}); })();


/***/ })

/******/ });