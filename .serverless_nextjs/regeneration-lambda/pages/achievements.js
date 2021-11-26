"use strict";
(() => {
var exports = {};
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 5966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(2333)
      processEnv([{"path":".env","contents":"AWS_ACCESS_KEY_ID=AKIAWWYCAFHB723MYRFU\nAWS_SECRET_ACCESS_KEY=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"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(3105)

      const appMod = __webpack_require__(8510)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(9743)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(9185),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/achievements",
        buildId: "JjSgAY7yG8aUrzG-vdrOd",
        escapedBuildId: "JjSgAY7yG8aUrzG\-vdrOd",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1de2a9cac9ec802d67db500dbc1f10d3",previewModeSigningKey:"651290b95efe6b88c8f67b45ff13468f346f2f1750279a00d5d85a80cfcf7a23",previewModeEncryptionKey:"c1d2d27932bd76329cf49c4b54af4247121891f720c95208e9de4776a3a958f1"}
      })
      
    

/***/ }),

/***/ 9743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_achievements),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/SideBarSyllabus.js
var SideBarSyllabus = __webpack_require__(3224);
;// CONCATENATED MODULE: ./components/AchievementsContent.js


function AchievementsContent({ st_achieve , fa_achieve , pat , syllabus , timetable , studymaterial ,  }) {
    //   const [facultyData, setfacultyData] = useState(data[0].fa);
    //   const [mission, setMission] = useState(data[0].mission);
    //   const [profile, setProfile] = useState(data[0].profile);
    //console.log(st_achieve);
    return(/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-12 bg-blue-ramaiah lg:bg-transparent lg:relative font-body",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-span-full h-8 lg:bg-blue-ramaiah bg-opacity-30 text-blue-ramaiah space-x-3 m-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full lg:absolute",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:w-full lg:flex lg:flex-col text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/",
                                className: "lg:hover:font-bold active:bg-opacity-100 active:border-b-2 border-white bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "Overview"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "faculty",
                                className: "sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "Faculty"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "research",
                                className: "lg:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "Research"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "bos",
                                className: "sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "BOS|BOE"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "achievements",
                                className: "sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "Achievements"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "activities",
                                className: "sm:hover:font-bold bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2",
                                children: "Activities"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-heading",
                            children: "Students' Achievements"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid lg:grid-cols-3 gap-2",
                            children: st_achieve.map((stAchieve, i)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-1 w-full bg-gray-deptHeader shadow-md text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-pink-ramaiah font-heading text-lg capitalize",
                                            children: stAchieve.title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "",
                                            children: [
                                                stAchieve.date,
                                                " / ",
                                                stAchieve.place
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-left p-2 text-gray-700",
                                            children: stAchieve.description
                                        })
                                    ]
                                }, stAchieve.id));
                            })
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-heading",
                            children: "Faculty's Achievements"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid lg:grid-cols-3 gap-2",
                            children: [
                                fa_achieve.map((faAchieve, i)=>{
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-span-1 w-full bg-gray-deptHeader shadow-md text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-pink-ramaiah font-heading text-lg",
                                                children: faAchieve.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "",
                                                children: faAchieve.duration
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-left p-2 text-gray-700",
                                                children: faAchieve.achievements
                                            })
                                        ]
                                    }, faAchieve.id));
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-heading",
                            children: "Patents"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "grid lg:grid-cols-3 gap-2",
                            children: pat.map((patent, i)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-1 w-full bg-gray-deptHeader shadow-md text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-pink-ramaiah font-heading text-lg",
                                            children: patent.owner_name
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "",
                                            children: patent.patent_number
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-left p-2 text-gray-700",
                                            children: patent.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "",
                                            children: patent.applied_year
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "",
                                            children: patent.status_filed_granted
                                        })
                                    ]
                                }, patent.id));
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: " text-center mb-5 w-[85%] m-auto lg:w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading",
                                    children: "Syllabus"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(SideBarSyllabus/* default */.Z, {
                                        syllabus: syllabus
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: " text-center mb-5 w-[85%] m-auto lg:w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading",
                                    children: "Timetable"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(SideBarSyllabus/* default */.Z, {
                                        syllabus: timetable
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: " text-center mb-5 w-[85%] m-auto lg:w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading",
                                    children: "Study Materials"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(SideBarSyllabus/* default */.Z, {
                                        syllabus: studymaterial
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./components/DeptBanner.js
var DeptBanner = __webpack_require__(8706);
// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(3252);
// EXTERNAL MODULE: ./components/DeptStats.js
var DeptStats = __webpack_require__(1381);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
;// CONCATENATED MODULE: ./pages/achievements.js







function achievements({ stu_achievements , fac_achievements , patents , sy , tt , sm , latestNews , latestEvents , deptStats ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Ramaiah Institute of Technology, Bengaluru - 54"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "font-body",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(DeptBanner/* default */.Z, {
                        latestNews: latestNews,
                        latestEvents: latestEvents
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(DeptStats/* default */.Z, {
                        stats: deptStats
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(AchievementsContent, {
                        st_achieve: stu_achievements,
                        fa_achieve: fac_achievements,
                        pat: patents,
                        syllabus: sy,
                        timetable: tt,
                        studymaterial: sm
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {
                    })
                ]
            })
        ]
    }));
}
async function getStaticProps() {
    const res = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/achievements/");
    const json = await res.json();
    const fa = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/faculty_achievements/");
    const fa_json = await fa.json();
    const patent = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/patents/");
    const patent_json = await patent.json();
    const syl = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/syllabus/1");
    const syllJson = await syl.json();
    const t_t = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/timetable/1");
    const t_tJson = await t_t.json();
    const s_m = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/studymat/1");
    const s_mJson = await s_m.json();
    const l_e = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/");
    const l_eJson = await l_e.json();
    const l_n = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/");
    const l_nJson = await l_n.json();
    const dep_stat = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/");
    const d_sJson = await dep_stat.json();
    //const json = await res.json();
    //console.log(res);
    return {
        props: {
            stu_achievements: json,
            fac_achievements: fa_json,
            patents: patent_json,
            sy: syllJson,
            sm: s_mJson,
            tt: t_tJson,
            latestNews: l_nJson,
            latestEvents: l_eJson,
            deptStats: d_sJson
        }
    };
}
/* harmony default export */ const pages_achievements = (achievements);


/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

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

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [146,959,52,193,616], () => (__webpack_exec__(5966)));
module.exports = __webpack_exports__;

})();