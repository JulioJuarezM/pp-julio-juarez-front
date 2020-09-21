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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./app/app.module.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ 4);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar name = \"myApp\",\n    requires = [];\n\nexports.default = _angular2.default.module(name, requires);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBwLm1vZHVsZS5qcz8yMzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG52YXIgbmFtZSA9IFwibXlBcHBcIixcclxuXHRyZXF1aXJlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUobmFtZSxyZXF1aXJlcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hcHAubW9kdWxlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _appMain = __webpack_require__(/*! ./app/app.main.js */ 2);\n\nvar _appMain2 = _interopRequireDefault(_appMain);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAuanM/MDM2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlBcHAgZnJvbSAnLi9hcHAvYXBwLm1haW4uanMnO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** ./app/app.main.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./main-app/main-app.controller.js */ 3);\n\n__webpack_require__(/*! ./second-app/second.controller.js */ 6);\n\n__webpack_require__(/*! ./services/app.service.js */ 7);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBwLm1haW4uanM/YTFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbWFpbi1hcHAvbWFpbi1hcHAuY29udHJvbGxlci5qcyc7XHJcbmltcG9ydCAnLi9zZWNvbmQtYXBwL3NlY29uZC5jb250cm9sbGVyLmpzJztcclxuaW1wb3J0ICcuL3NlcnZpY2VzL2FwcC5zZXJ2aWNlLmpzJztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXBwLm1haW4uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./app/main-app/main-app.controller.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _appModule = __webpack_require__(/*! ../app.module.js */ 0);\n\nvar _appModule2 = _interopRequireDefault(_appModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _appModule2.default.controller('MainController', ['$scope', 'MyService', function ($scope, MyService) {\n\tconsole.log(\"Controller created!\");\n\tvar self = this;\n\tself.myModel = \"The sum of 2 + 2 is \" + MyService.add(2, 2);\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvbWFpbi1hcHAvbWFpbi1hcHAuY29udHJvbGxlci5qcz8yZGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteU1vZHVsZSBmcm9tICcuLi9hcHAubW9kdWxlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJyxbJyRzY29wZScsJ015U2VydmljZScsZnVuY3Rpb24oJHNjb3BlLE15U2VydmljZSl7XHJcblx0Y29uc29sZS5sb2coXCJDb250cm9sbGVyIGNyZWF0ZWQhXCIpO1xyXG5cdHZhciBzZWxmID0gdGhpcztcclxuXHRzZWxmLm15TW9kZWwgPSBcIlRoZSBzdW0gb2YgMiArIDIgaXMgXCIgKyBNeVNlcnZpY2UuYWRkKDIsMik7XHJcbn1dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21haW4tYXBwL21haW4tYXBwLmNvbnRyb2xsZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ 5);\nmodule.exports = angular;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyL2luZGV4LmpzP2ZlMzUiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9hbmd1bGFyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {


/***/ }),
/* 6 */
/*!*********************************************!*\
  !*** ./app/second-app/second.controller.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _appModule = __webpack_require__(/*! ../app.module.js */ 0);\n\nvar _appModule2 = _interopRequireDefault(_appModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _appModule2.default.controller('SecondController', ['$scope', function ($scope) {\n\tconsole.log(\"Second Controller created!\");\n\tvar self = this;\n\tself.myModel = \"Hello world from the SECOND controller!\";\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvc2Vjb25kLWFwcC9zZWNvbmQuY29udHJvbGxlci5qcz9lZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteU1vZHVsZSBmcm9tICcuLi9hcHAubW9kdWxlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15TW9kdWxlLmNvbnRyb2xsZXIoJ1NlY29uZENvbnRyb2xsZXInLFsnJHNjb3BlJyxmdW5jdGlvbigkc2NvcGUpe1xyXG5cdGNvbnNvbGUubG9nKFwiU2Vjb25kIENvbnRyb2xsZXIgY3JlYXRlZCFcIik7XHJcblx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdHNlbGYubXlNb2RlbCA9IFwiSGVsbG8gd29ybGQgZnJvbSB0aGUgU0VDT05EIGNvbnRyb2xsZXIhXCI7XHJcbn1dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3NlY29uZC1hcHAvc2Vjb25kLmNvbnRyb2xsZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*************************************!*\
  !*** ./app/services/app.service.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _appModule = __webpack_require__(/*! ../app.module.js */ 0);\n\nvar _appModule2 = _interopRequireDefault(_appModule);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _appModule2.default.service('MyService', function () {\n\tthis.add = function (a, b) {\n\t\treturn a + b;\n\t};\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvc2VydmljZXMvYXBwLnNlcnZpY2UuanM/ZTE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlNb2R1bGUgZnJvbSAnLi4vYXBwLm1vZHVsZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteU1vZHVsZS5zZXJ2aWNlKCdNeVNlcnZpY2UnLGZ1bmN0aW9uKCl7XHJcblx0dGhpcy5hZGQgPSBmdW5jdGlvbihhLGIpe1xyXG5cdFx0cmV0dXJuIGEgKyBiO1xyXG5cdH1cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvc2VydmljZXMvYXBwLnNlcnZpY2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);