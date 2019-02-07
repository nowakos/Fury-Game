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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Coin.js":
/*!********************!*\
  !*** ./js/Coin.js ***!
  \********************/
/*! exports provided: Coin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Coin\", function() { return Coin; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Coin = function Coin() {\n  _classCallCheck(this, Coin);\n\n  this.x = Math.floor(Math.random() * 10);\n  this.y = Math.floor(Math.random() * 10);\n};\n\n//# sourceURL=webpack:///./js/Coin.js?");

/***/ }),

/***/ "./js/Furry.js":
/*!*********************!*\
  !*** ./js/Furry.js ***!
  \*********************/
/*! exports provided: Furry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Furry\", function() { return Furry; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Furry = function Furry() {\n  _classCallCheck(this, Furry);\n\n  this.x = 0;\n  this.y = 0;\n  this.direction = \"right\";\n};\n\n//# sourceURL=webpack:///./js/Furry.js?");

/***/ }),

/***/ "./js/Game.js":
/*!********************!*\
  !*** ./js/Game.js ***!
  \********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _Furry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Furry */ \"./js/Furry.js\");\n/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ \"./js/Coin.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.board = $(\"#board>div\");\n    this.furry = new _Furry__WEBPACK_IMPORTED_MODULE_0__[\"Furry\"]();\n    this.coin = new _Coin__WEBPACK_IMPORTED_MODULE_1__[\"Coin\"]();\n    this.score = 0;\n  }\n\n  _createClass(Game, [{\n    key: \"index\",\n    value: function index(x, y) {\n      return x + y * 10;\n    }\n  }, {\n    key: \"showFurry\",\n    value: function showFurry() {\n      this.board[this.index(this.furry.x, this.furry.y)].classList.add(\"furry\");\n    }\n  }, {\n    key: \"showCoin\",\n    value: function showCoin() {\n      this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      var self = this;\n      setInterval(function () {\n        self.moveFurry();\n      }, 250);\n    }\n  }, {\n    key: \"moveFurry\",\n    value: function moveFurry() {\n      var self = this;\n      this.hideVisibleFurry();\n      var direction = this.furry.direction;\n\n      switch (direction) {\n        case \"right\":\n          this.furry.x += 1;\n          break;\n\n        case \"left\":\n          this.furry.x -= 1;\n          break;\n\n        case \"up\":\n          this.furry.y -= 1;\n          break;\n\n        case \"down\":\n          this.furry.y += 1;\n      }\n\n      this.gameOver();\n      this.showFurry();\n      this.checkCoinCollision();\n      $(document).on(\"keydown\", function () {\n        self.turnFurry(event);\n      });\n    }\n  }, {\n    key: \"hideVisibleFurry\",\n    value: function hideVisibleFurry() {\n      var doubledFurry = $(\".furry\");\n\n      if (doubledFurry) {\n        doubledFurry.removeClass(\"furry\");\n      }\n    }\n  }, {\n    key: \"turnFurry\",\n    value: function turnFurry(event) {\n      switch (event.which) {\n        case 37:\n          this.furry.direction = \"left\";\n          break;\n\n        case 38:\n          this.furry.direction = \"up\";\n          break;\n\n        case 39:\n          this.furry.direction = \"right\";\n          break;\n\n        case 40:\n          this.furry.direction = \"down\";\n          break;\n      }\n    }\n  }, {\n    key: \"checkCoinCollision\",\n    value: function checkCoinCollision() {\n      if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.remove(\"coin\");\n        this.score++;\n        var scoreCounter = $(\"#score strong\");\n        scoreCounter.text(this.score);\n        this.coin = new _Coin__WEBPACK_IMPORTED_MODULE_1__[\"Coin\"]();\n        this.showCoin();\n      }\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n        clearInterval(this.startGame);\n        this.hideVisibleFurry();\n        var gameOver = $(\"#gameOver\");\n        this.board.hide();\n        gameOver.show();\n        var button = $('.btn.tryAgain');\n        button.on(\"click\", function () {\n          location.reload();\n        });\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=webpack:///./js/Game.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./js/Game.js\");\n\n$(document).ready(function () {\n  var startButton = $('.btn.start');\n  startButton.on(\"click\", function () {\n    $(\"#startGame\").addClass(\"invisible\");\n    $(\"#score\").removeClass(\"invisible\");\n    $(\"#board\").removeClass(\"invisible\");\n    var startGame = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\n    startGame.showFurry();\n    startGame.showCoin();\n    startGame.startGame();\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });