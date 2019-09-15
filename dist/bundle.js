/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Phaser */ \"./node_modules/Phaser/src/phaser.js\");\n/* harmony import */ var Phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nvar config = {\n  type: Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  width: 800,\n  height: 600,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: {\n        y: 300\n      },\n      debug: false\n    }\n  },\n  scene: {\n    preload: preload,\n    create: create,\n    update: update\n  }\n};\nvar game = new Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game(config);\nvar score = 0;\nvar player;\nvar cursors;\nvar stars;\nvar scoreText;\n\nfunction preload() {\n  this.load.image('sky', 'assets/sky.png');\n  this.load.image('ground', 'assets/platform.png');\n  this.load.image('star', 'assets/star.png');\n  this.load.image('bomb', 'assets/bomb.png');\n  this.load.spritesheet('dude', 'assets/dude.png', {\n    frameWidth: 32,\n    frameHeight: 48\n  });\n  this.load.audio({\n    key: 'title',\n    url: ['assets/Shop BGM.ogg']\n  });\n}\n\nfunction create() {\n  this.add.image(400, 300, 'sky');\n  var sound = this.sound.add('title', {\n    loop: true\n  });\n  sound.play();\n  var platforms = this.physics.add.staticGroup();\n  platforms.create(400, 568, 'ground').setScale(2).refreshBody();\n  platforms.create(600, 400, 'ground');\n  platforms.create(50, 250, 'ground');\n  platforms.create(750, 220, 'ground');\n  player = this.physics.add.sprite(100, 450, 'dude');\n  player.setBounce(0.2);\n  player.setCollideWorldBounds(true);\n  player.body.setGravityY(300);\n  this.anims.create({\n    key: 'left',\n    frames: this.anims.generateFrameNumbers('dude', {\n      start: 0,\n      end: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  this.anims.create({\n    key: 'turn',\n    frames: [{\n      key: 'dude',\n      frame: 4\n    }],\n    frameRate: 20\n  });\n  this.anims.create({\n    key: 'right',\n    frames: this.anims.generateFrameNumbers('dude', {\n      start: 5,\n      end: 8\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  this.physics.add.collider(player, platforms);\n  cursors = this.input.keyboard.createCursorKeys();\n  stars = this.physics.add.group({\n    key: 'star',\n    repeat: 11,\n    setXY: {\n      x: 12,\n      y: 0,\n      stepX: 70\n    }\n  });\n  stars.children.iterate(function (child) {\n    child.setBounceY(Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.FloatBetween(0.4, 0.8));\n  });\n  this.physics.add.collider(stars, platforms);\n  this.physics.add.overlap(player, stars, collectStar, null, this);\n  scoreText = this.add.text(16, 16, 'score: 0', {\n    fontSize: '32px',\n    fill: '#000'\n  });\n  var bombs = this.physics.add.group();\n  this.physics.add.collider(bombs, platforms);\n  this.physics.add.collider(player, bombs, hitBomb, null, this);\n}\n\nfunction collectStar(player, star) {\n  star.disableBody(true, true);\n  score += 10;\n  scoreText.setText('Scored: ' + score);\n\n  if (stars.countActive(true) === 0) {\n    stars.children.iterate(function (child) {\n      child.enableBody(true, child.x, 0, true, true);\n    });\n    var x = player.x < 400 ? Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(400, 800) : Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, 400);\n    var bomb = bombs.create(x, 16, 'bomb');\n    bomb.setBounce(1);\n    bomb.setCollideWorldBounds(true);\n    bomb.setVelocity(Phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(-200, 200), 0);\n  }\n}\n\nfunction hitBomb(player, bomb) {\n  this.physics.pause();\n  player.setTint(0xff0000);\n  player.anims.play('turn');\n  gameOver = true;\n}\n\nfunction update() {\n  if (cursors.left.isDown) {\n    player.setVelocityX(-160);\n    player.anims.play('left', true);\n  } else if (cursors.right.isDown) {\n    player.setVelocityX(160);\n    player.anims.play('right', true);\n  } else {\n    player.setVelocityX(0);\n    player.anims.play('turn');\n  }\n\n  if (cursors.up.isDown && player.body.touching.down) {\n    player.setVelocityY(-530);\n  }\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/hoangta/Documents/References/phaser-es6-webpack-phaser3 test 1/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });