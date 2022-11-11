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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/video */ \"./src/scripts/video.js\");\n/* harmony import */ var _scripts_picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/picture */ \"./src/scripts/picture.js\");\n\n\n\n//get button that will start video\nconst startVideoButton = document.getElementById('start-video-btn');\n\n//start video on click\nlet video;\nlet stream;\nstartVideoButton.addEventListener('click', e => {\n  video = new _scripts_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  stream = document.getElementById('video');\n});\n\n//get button that will take picture\nconst captureButton = document.getElementById('capture-btn');\n\n//take picture on click \nlet picture;\nlet frame1 = document.getElementById('frame-1');\ncaptureButton.addEventListener('click', e => {\n  picture = new _scripts_picture__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stream, frame1);\n});\nconst multipleCaptureButton = document.getElementById('multi-capture-btn');\nlet frames = document.getElementsByClassName('small-frame');\nmultipleCaptureButton.addEventListener('click', e => {\n  function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n  async function takePhotos() {\n    for (let i = 0; i < frames.length; i++) {\n      await delay(2000);\n      picture = new _scripts_picture__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stream, frames[i]);\n    }\n  }\n  takePhotos();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0k7O0FBRXhDO0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDOztBQUVuRTtBQUNBLElBQUlDLEtBQUs7QUFDVCxJQUFJQyxNQUFNO0FBQ1ZKLGdCQUFnQixDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUM5Q0gsS0FBSyxHQUFHLElBQUlMLHNEQUFLLEVBQUU7RUFDbkJNLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzdDLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1LLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDOztBQUU1RDtBQUNBLElBQUlNLE9BQU87QUFDWCxJQUFJQyxNQUFNLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUMvQ0ssYUFBYSxDQUFDRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzQ0UsT0FBTyxHQUFHLElBQUlULHdEQUFPLENBQUNLLE1BQU0sRUFBRUssTUFBTSxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLE1BQU1DLHFCQUFxQixHQUFHVCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztBQUUxRSxJQUFJUyxNQUFNLEdBQUdWLFFBQVEsQ0FBQ1csc0JBQXNCLENBQUMsYUFBYSxDQUFDO0FBQzNERixxQkFBcUIsQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDbkQsU0FBU08sS0FBSyxDQUFDQyxFQUFFLEVBQUU7SUFDZixPQUFPLElBQUlDLE9BQU8sQ0FBQ0MsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7RUFDMUQ7RUFFQSxlQUFlSSxVQUFVLEdBQUc7SUFDeEIsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLE1BQU0sQ0FBQ1MsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNuQyxNQUFNTixLQUFLLENBQUMsSUFBSSxDQUFFO01BQ2xCTCxPQUFPLEdBQUcsSUFBSVQsd0RBQU8sQ0FBQ0ssTUFBTSxFQUFFTyxNQUFNLENBQUNRLENBQUMsQ0FBQyxDQUFDO0lBQzVDO0VBQ0o7RUFFQUQsVUFBVSxFQUFFO0FBRWhCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW8gZnJvbSBcIi4vc2NyaXB0cy92aWRlb1wiO1xuaW1wb3J0IFBpY3R1cmUgZnJvbSBcIi4vc2NyaXB0cy9waWN0dXJlXCI7XG5cbi8vZ2V0IGJ1dHRvbiB0aGF0IHdpbGwgc3RhcnQgdmlkZW9cbmNvbnN0IHN0YXJ0VmlkZW9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtdmlkZW8tYnRuJyk7XG5cbi8vc3RhcnQgdmlkZW8gb24gY2xpY2tcbmxldCB2aWRlbztcbmxldCBzdHJlYW07XG5zdGFydFZpZGVvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB2aWRlbyA9IG5ldyBWaWRlbygpO1xuICAgIHN0cmVhbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xufSlcblxuLy9nZXQgYnV0dG9uIHRoYXQgd2lsbCB0YWtlIHBpY3R1cmVcbmNvbnN0IGNhcHR1cmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdHVyZS1idG4nKVxuXG4vL3Rha2UgcGljdHVyZSBvbiBjbGljayBcbmxldCBwaWN0dXJlO1xubGV0IGZyYW1lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZS0xJyk7XG5jYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwaWN0dXJlID0gbmV3IFBpY3R1cmUoc3RyZWFtLCBmcmFtZTEpO1xufSlcblxuY29uc3QgbXVsdGlwbGVDYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpLWNhcHR1cmUtYnRuJyk7XG5cbmxldCBmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbWFsbC1mcmFtZScpO1xubXVsdGlwbGVDYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBmdW5jdGlvbiBkZWxheShtcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdGFrZVBob3RvcygpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXdhaXQoZGVsYXkoMjAwMCkpO1xuICAgICAgICAgICAgcGljdHVyZSA9IG5ldyBQaWN0dXJlKHN0cmVhbSwgZnJhbWVzW2ldKTtcbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgdGFrZVBob3RvcygpOyBcblxufSlcbiJdLCJuYW1lcyI6WyJWaWRlbyIsIlBpY3R1cmUiLCJzdGFydFZpZGVvQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZpZGVvIiwic3RyZWFtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYXB0dXJlQnV0dG9uIiwicGljdHVyZSIsImZyYW1lMSIsIm11bHRpcGxlQ2FwdHVyZUJ1dHRvbiIsImZyYW1lcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGFrZVBob3RvcyIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/picture.js":
/*!********************************!*\
  !*** ./src/scripts/picture.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Picture {\n  constructor(video, canvasFrame) {\n    this.video = video;\n    this.canvasFrame = canvasFrame;\n    this.takePicture();\n  }\n  takePicture() {\n    this.canvasFrame.width = 160;\n    this.canvasFrame.height = 120;\n    let canvasContext = this.canvasFrame.getContext('2d');\n    canvasContext.drawImage(this.video, 0, 0, 640, 480, 0, 0, 160, 120);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picture);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waWN0dXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBVyxDQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTtJQUM3QixJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLFdBQVcsRUFBRTtFQUN0QjtFQUVBQSxXQUFXLEdBQUk7SUFDWCxJQUFJLENBQUNELFdBQVcsQ0FBQ0UsS0FBSyxHQUFHLEdBQUc7SUFDNUIsSUFBSSxDQUFDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxHQUFHO0lBQzdCLElBQUlDLGFBQWEsR0FBRyxJQUFJLENBQUNKLFdBQVcsQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztJQUNyREQsYUFBYSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDUCxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2RTtBQUNKO0FBRUEsK0RBQWVGLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGljdHVyZS5qcz9iZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBpY3R1cmUge1xuICAgIGNvbnN0cnVjdG9yICh2aWRlbywgY2FudmFzRnJhbWUpIHtcbiAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgICAgICB0aGlzLmNhbnZhc0ZyYW1lID0gY2FudmFzRnJhbWU7XG4gICAgICAgIHRoaXMudGFrZVBpY3R1cmUoKTtcbiAgICB9XG5cbiAgICB0YWtlUGljdHVyZSAoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRnJhbWUud2lkdGggPSAxNjA7XG4gICAgICAgIHRoaXMuY2FudmFzRnJhbWUuaGVpZ2h0ID0gMTIwO1xuICAgICAgICBsZXQgY2FudmFzQ29udGV4dCA9IHRoaXMuY2FudmFzRnJhbWUuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgNjQwLCA0ODAsIDAsIDAsIDE2MCwgMTIwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmU7Il0sIm5hbWVzIjpbIlBpY3R1cmUiLCJjb25zdHJ1Y3RvciIsInZpZGVvIiwiY2FudmFzRnJhbWUiLCJ0YWtlUGljdHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/picture.js\n");

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