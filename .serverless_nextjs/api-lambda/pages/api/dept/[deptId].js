"use strict";
(() => {
var exports = {};
exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7157);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2800);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6249);

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([{"path":".env","contents":"AWS_ACCESS_KEY_ID=AKIAWWYCAFHB723MYRFU\nAWS_SECRET_ACCESS_KEY=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"}])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
          ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
          : []

        if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
          combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
        }

        const apiHandler = (0,next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__/* .getApiHandler */ .Y)({
          pageModule: __webpack_require__(7382),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/dept/[deptId]",
          basePath: "",
          pageIsDynamic: true,
          encodedPreviewProps: {previewModeId:"1de2a9cac9ec802d67db500dbc1f10d3",previewModeSigningKey:"651290b95efe6b88c8f67b45ff13468f346f2f1750279a00d5d85a80cfcf7a23",previewModeEncryptionKey:"c1d2d27932bd76329cf49c4b54af4247121891f720c95208e9de4776a3a958f1"}
        })
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);
      

/***/ }),

/***/ 7382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ helloAPI)
/* harmony export */ });
function helloAPI(req, res) {
    const req1 = req.query;
    // const fetchedData = await fetch(
    //   "http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/",
    //   {
    //     method: "GET",
    //   }
    // );
    fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/sideheadings/" + req1, {
        method: "GET"
    }).then((data)=>res.status(200).json(data)
    );
}; // function DeptDetails({ eventData }) {
 //   console.log(eventData);
 //   return <div></div>;
 // }
 // export async function getStaticPaths() {
 //   return {
 //     fallback: true,
 //     // paths: {
 //     //   params: { eventId: "1" },
 //     // },
 //     paths: ["deptId", "1"],
 //   };
 // }
 // export async function getStaticProps(context) {
 //   const deptId = context.params.deptId;
 //   const fetchedData = await fetch(
 //     "http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/",
 //     {
 //       method: "GET",
 //     }
 //   );
 //   return {
 //     props: {
 //       eventData: {
 //         id: fetchedData.id,
 //         mission: fetchedData.mission,
 //         vision: fetchedData.vision,
 //       },
 //     },
 //   };
 // }
 // export default DeptDetails;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458,800], () => (__webpack_exec__(8132)));
module.exports = __webpack_exports__;

})();