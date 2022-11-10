/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/video */ \"./src/scripts/video.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const startVideoButton = document.getElementById('start-video');\n  // const videoWindow = document.getElementById('video');\n  let video;\n  startVideoButton.addEventListener('click', e => {\n    video = new _scripts_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBb0M7QUFFcENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxnQkFBZ0IsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQy9EO0VBQ0EsSUFBSUMsS0FBSztFQUNURixnQkFBZ0IsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFHSSxDQUFDLElBQUs7SUFDOUNELEtBQUssR0FBRyxJQUFJTCxzREFBSyxFQUFFO0VBQ3ZCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW8gZnJvbSBcIi4vc2NyaXB0cy92aWRlb1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRWaWRlb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC12aWRlbycpO1xuICAgIC8vIGNvbnN0IHZpZGVvV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XG4gICAgbGV0IHZpZGVvO1xuICAgIHN0YXJ0VmlkZW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2aWRlbyA9IG5ldyBWaWRlbygpO1xuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJWaWRlbyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0VmlkZW9CdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInZpZGVvIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/video.js":
/*!******************************!*\
  !*** ./src/scripts/video.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Video {\n  constructor() {\n    this.startVideo();\n  }\n  startVideo() {\n    const constraints = {\n      audio: false,\n      video: {\n        width: 640,\n        height: 480\n      }\n    };\n    navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);\n    function success(stream) {\n      let video = document.getElementById('video');\n      video.srcObject = stream;\n    }\n    function error(error) {\n      console.log(error);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVcsR0FBSTtJQUNYLElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ3JCO0VBRUFBLFVBQVUsR0FBSTtJQUNWLE1BQU1DLFdBQVcsR0FBRztNQUNoQkMsS0FBSyxFQUFFLEtBQUs7TUFDWkMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRSxHQUFHO1FBQUVDLE1BQU0sRUFBRTtNQUFJO0lBQ3JDLENBQUM7SUFFREMsU0FBUyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQ1AsV0FBVyxDQUFDLENBQzNDUSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUNiQyxLQUFLLENBQUNDLEtBQUssQ0FBQztJQUVqQixTQUFTRixPQUFPLENBQUVHLE1BQU0sRUFBRTtNQUN0QixJQUFJVixLQUFLLEdBQUdXLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztNQUM1Q1osS0FBSyxDQUFDYSxTQUFTLEdBQUdILE1BQU07SUFDNUI7SUFFQSxTQUFTRCxLQUFLLENBQUVBLEtBQUssRUFBRTtNQUNuQkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQztJQUN0QjtFQUNKO0FBQ0o7QUFFQSwrREFBZWQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy92aWRlby5qcz8xMWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFZpZGVvIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRWaWRlbygpO1xuICAgIH1cblxuICAgIHN0YXJ0VmlkZW8gKCkge1xuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgIGF1ZGlvOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZGVvOiB7IHdpZHRoOiA2NDAsIGhlaWdodDogNDgwIH1cbiAgICAgICAgfTtcblxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cylcbiAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MgKHN0cmVhbSkge1xuICAgICAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBlcnJvciAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87Il0sIm5hbWVzIjpbIlZpZGVvIiwiY29uc3RydWN0b3IiLCJzdGFydFZpZGVvIiwiY29uc3RyYWludHMiLCJhdWRpbyIsInZpZGVvIiwid2lkdGgiLCJoZWlnaHQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiLCJzdHJlYW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjT2JqZWN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/video.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;