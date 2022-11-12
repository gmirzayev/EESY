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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/video */ \"./src/scripts/video.js\");\n/* harmony import */ var _scripts_picture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/picture */ \"./src/scripts/picture.js\");\n\n\n\n//get button that will start video\nconst startVideoButton = document.getElementById('start-video-btn');\n\n//start video on click\nconst video = new _scripts_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet stream;\nstartVideoButton.addEventListener('click', e => {\n  stream = document.getElementById('video');\n  if (video.playing === true) {\n    video.stopVideo();\n  } else {\n    video.startVideo();\n  }\n});\n\n//get button that will take picture\nconst captureButton = document.getElementById('capture-btn');\n\n//take picture on click \nlet picture;\nconst frame1 = document.getElementById('frame-1');\ncaptureButton.addEventListener('click', e => {\n  picture = new _scripts_picture__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stream, frame1);\n});\n\n//get button that will take multiple pictures\nconst multipleCaptureButton = document.getElementById('multi-capture-btn');\n\n//get all canvas elements with class of small-frame\nlet frames = document.getElementsByClassName('small-frame');\nmultipleCaptureButton.addEventListener('click', e => {\n  //delay function that returns promise after x ms\n  function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n  //take as many photos as there are canvases on a delay of x ms\n  async function takePhotos() {\n    for (let i = 0; i < frames.length; i++) {\n      await delay(2000);\n      picture = new _scripts_picture__WEBPACK_IMPORTED_MODULE_1__[\"default\"](stream, frames[i]);\n    }\n  }\n  takePhotos();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0k7O0FBRXhDO0FBQ0EsTUFBTUUsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDOztBQUVuRTtBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJTCxzREFBSyxFQUFFO0FBQ3pCLElBQUlNLE1BQU07QUFDVkosZ0JBQWdCLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzlDRixNQUFNLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUN6QyxJQUFHQyxLQUFLLENBQUNJLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFDdkJKLEtBQUssQ0FBQ0ssU0FBUyxFQUFFO0VBQ3JCLENBQUMsTUFBTTtJQUNITCxLQUFLLENBQUNNLFVBQVUsRUFBRTtFQUN0QjtBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1DLGFBQWEsR0FBR1QsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDOztBQUU1RDtBQUNBLElBQUlTLE9BQU87QUFDWCxNQUFNQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUNqRFEsYUFBYSxDQUFDTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzQ0ssT0FBTyxHQUFHLElBQUlaLHdEQUFPLENBQUNLLE1BQU0sRUFBRVEsTUFBTSxDQUFDO0FBQ3pDLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHWixRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFMUU7QUFDQSxJQUFJWSxNQUFNLEdBQUdiLFFBQVEsQ0FBQ2Msc0JBQXNCLENBQUMsYUFBYSxDQUFDO0FBQzNERixxQkFBcUIsQ0FBQ1IsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDbkQ7RUFDQSxTQUFTVSxLQUFLLENBQUNDLEVBQUUsRUFBRTtJQUNmLE9BQU8sSUFBSUMsT0FBTyxDQUFDQyxPQUFPLElBQUlDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFLENBQUMsQ0FBQztFQUMxRDtFQUNBO0VBQ0EsZUFBZUksVUFBVSxHQUFHO0lBQ3hCLEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixNQUFNLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDbkMsTUFBTU4sS0FBSyxDQUFDLElBQUksQ0FBRTtNQUNsQkwsT0FBTyxHQUFHLElBQUlaLHdEQUFPLENBQUNLLE1BQU0sRUFBRVUsTUFBTSxDQUFDUSxDQUFDLENBQUMsQ0FBQztJQUM1QztFQUNKO0VBRUFELFVBQVUsRUFBRTtBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gXCIuL3NjcmlwdHMvdmlkZW9cIjtcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuL3NjcmlwdHMvcGljdHVyZVwiO1xuXG4vL2dldCBidXR0b24gdGhhdCB3aWxsIHN0YXJ0IHZpZGVvXG5jb25zdCBzdGFydFZpZGVvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXZpZGVvLWJ0bicpO1xuXG4vL3N0YXJ0IHZpZGVvIG9uIGNsaWNrXG5jb25zdCB2aWRlbyA9IG5ldyBWaWRlbygpO1xubGV0IHN0cmVhbTtcbnN0YXJ0VmlkZW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHN0cmVhbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuICAgIGlmKHZpZGVvLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgdmlkZW8uc3RvcFZpZGVvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmlkZW8uc3RhcnRWaWRlbygpO1xuICAgIH1cbn0pXG5cbi8vZ2V0IGJ1dHRvbiB0aGF0IHdpbGwgdGFrZSBwaWN0dXJlXG5jb25zdCBjYXB0dXJlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcHR1cmUtYnRuJylcblxuLy90YWtlIHBpY3R1cmUgb24gY2xpY2sgXG5sZXQgcGljdHVyZTtcbmNvbnN0IGZyYW1lMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZS0xJyk7XG5jYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwaWN0dXJlID0gbmV3IFBpY3R1cmUoc3RyZWFtLCBmcmFtZTEpO1xufSlcblxuLy9nZXQgYnV0dG9uIHRoYXQgd2lsbCB0YWtlIG11bHRpcGxlIHBpY3R1cmVzXG5jb25zdCBtdWx0aXBsZUNhcHR1cmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVsdGktY2FwdHVyZS1idG4nKTtcblxuLy9nZXQgYWxsIGNhbnZhcyBlbGVtZW50cyB3aXRoIGNsYXNzIG9mIHNtYWxsLWZyYW1lXG5sZXQgZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc21hbGwtZnJhbWUnKTtcbm11bHRpcGxlQ2FwdHVyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy9kZWxheSBmdW5jdGlvbiB0aGF0IHJldHVybnMgcHJvbWlzZSBhZnRlciB4IG1zXG4gICAgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgIH1cbiAgICAvL3Rha2UgYXMgbWFueSBwaG90b3MgYXMgdGhlcmUgYXJlIGNhbnZhc2VzIG9uIGEgZGVsYXkgb2YgeCBtc1xuICAgIGFzeW5jIGZ1bmN0aW9uIHRha2VQaG90b3MoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0KGRlbGF5KDIwMDApKTtcbiAgICAgICAgICAgIHBpY3R1cmUgPSBuZXcgUGljdHVyZShzdHJlYW0sIGZyYW1lc1tpXSk7XG4gICAgICAgIH0gIFxuICAgIH1cblxuICAgIHRha2VQaG90b3MoKTsgXG59KVxuIl0sIm5hbWVzIjpbIlZpZGVvIiwiUGljdHVyZSIsInN0YXJ0VmlkZW9CdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmlkZW8iLCJzdHJlYW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBsYXlpbmciLCJzdG9wVmlkZW8iLCJzdGFydFZpZGVvIiwiY2FwdHVyZUJ1dHRvbiIsInBpY3R1cmUiLCJmcmFtZTEiLCJtdWx0aXBsZUNhcHR1cmVCdXR0b24iLCJmcmFtZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRha2VQaG90b3MiLCJpIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Video {\n  constructor() {\n    this.playing = false;\n  }\n  startVideo() {\n    const constraints = {\n      audio: false,\n      video: {\n        width: 640,\n        height: 480\n      }\n    };\n    navigator.mediaDevices.getUserMedia(constraints).then(this.success.bind(this)).catch(this.error);\n  }\n  success(stream) {\n    console.log(this.playing);\n    this.playing = true;\n    console.log(this.playing);\n    let video = document.getElementById('video');\n    video.srcObject = stream;\n  }\n  error(error) {\n    console.log(error);\n  }\n  stopVideo() {\n    let video = document.getElementById('video');\n    const stream = video.srcObject;\n    const tracks = stream.getTracks();\n    tracks.forEach(track => {\n      track.stop();\n    });\n    video.srcObject = null;\n    this.playing = false;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy92aWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVcsR0FBSTtJQUNYLElBQUksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7RUFDeEI7RUFFQUMsVUFBVSxHQUFJO0lBQ1YsTUFBTUMsV0FBVyxHQUFHO01BQ2hCQyxLQUFLLEVBQUUsS0FBSztNQUNaQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFBRUMsTUFBTSxFQUFFO01BQUk7SUFDckMsQ0FBQztJQUVEQyxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDUCxXQUFXLENBQUMsQ0FDM0NRLElBQUksQ0FBQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdCQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7RUFDMUI7RUFFQUgsT0FBTyxDQUFFSSxNQUFNLEVBQUU7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDO0lBQ3pCLElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUk7SUFDbkJnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNqQixPQUFPLENBQUM7SUFDekIsSUFBSUksS0FBSyxHQUFHYyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDNUNmLEtBQUssQ0FBQ2dCLFNBQVMsR0FBR0wsTUFBTTtFQUM1QjtFQUVBRCxLQUFLLENBQUVBLEtBQUssRUFBRTtJQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0VBQ3RCO0VBRUFPLFNBQVMsR0FBSTtJQUNULElBQUlqQixLQUFLLEdBQUdjLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUM1QyxNQUFNSixNQUFNLEdBQUdYLEtBQUssQ0FBQ2dCLFNBQVM7SUFDOUIsTUFBTUUsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFNBQVMsRUFBRTtJQUVqQ0QsTUFBTSxDQUFDRSxPQUFPLENBQUVDLEtBQUssSUFBSztNQUN0QkEsS0FBSyxDQUFDQyxJQUFJLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0lBRUZ0QixLQUFLLENBQUNnQixTQUFTLEdBQUcsSUFBSTtJQUN0QixJQUFJLENBQUNwQixPQUFPLEdBQUcsS0FBSztFQUN4QjtBQUNKO0FBRUEsK0RBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdmlkZW8uanM/MTFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBWaWRlbyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGFydFZpZGVvICgpIHtcbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgICAgICB2aWRlbzogeyB3aWR0aDogNjQwLCBoZWlnaHQ6IDQ4MCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpXG4gICAgICAgICAgICAudGhlbih0aGlzLnN1Y2Nlc3MuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmVycm9yKVxuICAgIH1cblxuICAgIHN1Y2Nlc3MgKHN0cmVhbSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXlpbmcpO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXlpbmcpO1xuICAgICAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcbiAgICAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH1cblxuICAgIGVycm9yIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgc3RvcFZpZGVvICgpIHtcbiAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJyk7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvLnNyY09iamVjdDtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuXG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKCh0cmFjaykgPT4ge1xuICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2aWRlby5zcmNPYmplY3QgPSBudWxsO1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvOyJdLCJuYW1lcyI6WyJWaWRlbyIsImNvbnN0cnVjdG9yIiwicGxheWluZyIsInN0YXJ0VmlkZW8iLCJjb25zdHJhaW50cyIsImF1ZGlvIiwidmlkZW8iLCJ3aWR0aCIsImhlaWdodCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdWNjZXNzIiwiYmluZCIsImNhdGNoIiwiZXJyb3IiLCJzdHJlYW0iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyY09iamVjdCIsInN0b3BWaWRlbyIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/video.js\n");

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