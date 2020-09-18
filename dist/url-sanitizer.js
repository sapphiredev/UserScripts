// ==UserScript==
// @namespace    https://www.sapphire.sh/
// @author       sapphire
// @downloadURL  https://raw.githubusercontent.com/sapphiredev/UserScripts/release/dist/url-sanitizer.js
// @version      1600389142780
// @name         url sanitizer
// @description  url sanitizer
// @match        http://www.toranoana.jp/*
// @match        https://www.toranoana.jp/*
// @match        https://www.melonbooks.co.jp/*
// @match        https://www.pixiv.net/*
// @match        https://twitter.com/*
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/url-sanitizer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/url-sanitizer.ts":
/*!**************************************!*\
  !*** ./src/scripts/url-sanitizer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
var WebsiteKeys;
(function (WebsiteKeys) {
    WebsiteKeys["TWITTER"] = "twitter";
    WebsiteKeys["PIXIV"] = "pixiv";
    WebsiteKeys["PIXIV_FANBOX"] = "pixiv_fanbox";
    WebsiteKeys["MELONBOOKS"] = "melonbooks";
    WebsiteKeys["TORANOANA"] = "toranoana";
})(WebsiteKeys || (WebsiteKeys = {}));
function parseQuery(text) {
    return text.split('&').map(function (e) { return e.split('='); }).map(function (e) {
        var _a;
        return _a = {},
            _a[e[0]] = e[1],
            _a;
    }).reduce(function (a, b) { return Object.assign(a, b); }, {});
}
function stringifyQuery(query) {
    return Object.keys(query).map(function (e) { return e + "=" + query[e]; }).join('&');
}
function processQuery(key, text) {
    var query = parseQuery(text);
    switch (key) {
        case WebsiteKeys.PIXIV:
            return "?" + stringifyQuery(query);
        case WebsiteKeys.PIXIV_FANBOX:
            return '';
        case WebsiteKeys.MELONBOOKS:
            return "?product_id=" + query.product_id;
    }
}
function getSanitizedURL(key, match) {
    if (key === WebsiteKeys.TWITTER) {
        var screenName = match[1];
        var tweetID = match[2];
        return "https://twitter.com/" + screenName + "/status/" + tweetID;
    }
    var baseURL = match[1];
    var query = processQuery(key, match[2]);
    return "" + baseURL + query;
}
var regularExpressions = (_a = {},
    _a[WebsiteKeys.TWITTER] = /^https:\/\/twitter.com\/(.+)\/status\/(.+)\/(.+)\/1$/,
    _a[WebsiteKeys.PIXIV] = /^(https:\/\/www.pixiv.net\/member_illust.php)\?(.+)#?/,
    _a[WebsiteKeys.PIXIV_FANBOX] = /^(https:\/\/\w+.fanbox.cc\/posts\/\d+)\?(.+)/,
    _a[WebsiteKeys.TORANOANA] = /^(https?:\/\/www.toranoana.jp\/mailorder\/article\/.+)\?(.+)#?/,
    _a[WebsiteKeys.MELONBOOKS] = /^(https:\/\/www.melonbooks.co.jp\/detail\/detail.php)\?(.+)#?/,
    _a);
(function () {
    Object.values(WebsiteKeys).forEach(function (key) {
        var regularExpression = regularExpressions[key];
        var match = window.location.href.match(regularExpression);
        if (match === null) {
            return;
        }
        var url = getSanitizedURL(key, match);
        if (url === null) {
            return;
        }
        window.history.pushState(window.location.href, '', url);
    });
})();


/***/ })

/******/ });