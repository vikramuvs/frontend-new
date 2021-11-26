"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8272:
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

      const compMod = __webpack_require__(6832)

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
        page: "/",
        buildId: "JjSgAY7yG8aUrzG-vdrOd",
        escapedBuildId: "JjSgAY7yG8aUrzG\-vdrOd",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1de2a9cac9ec802d67db500dbc1f10d3",previewModeSigningKey:"651290b95efe6b88c8f67b45ff13468f346f2f1750279a00d5d85a80cfcf7a23",previewModeEncryptionKey:"c1d2d27932bd76329cf49c4b54af4247121891f720c95208e9de4776a3a958f1"}
      })
      
    

/***/ }),

/***/ 6832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./components/DeptBanner.js
var DeptBanner = __webpack_require__(8706);
// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(3252);
// EXTERNAL MODULE: ./components/DeptStats.js
var DeptStats = __webpack_require__(1381);
// EXTERNAL MODULE: ./components/SideBarSyllabus.js
var SideBarSyllabus = __webpack_require__(3224);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./components/DeptMainContent.js



function DeptMainContent({ data , syllabus , timetable , studymaterial  }) {
    const { 0: vision , 1: setVision  } = (0,react.useState)(data[0].vision);
    const { 0: mission , 1: setMission  } = (0,react.useState)(data[0].mission);
    const { 0: profile , 1: setProfile  } = (0,react.useState)(data[0].profile);
    const { 0: op , 1: setOp  } = (0,react.useState)(true);
    const { 0: ug , 1: setUg  } = (0,react.useState)(false);
    const { 0: pg , 1: setPg  } = (0,react.useState)(false);
    const { 0: hod , 1: setHod  } = (0,react.useState)(false);
    // console.log(data);
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
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "font-heading text-lg",
                                    children: " VISION"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                " ",
                                vision,
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "font-heading pt-2 text-lg",
                                    children: "MISSION"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                " ",
                                mission,
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "font-heading pt-2 text-lg",
                                    children: "DEPARTMENT PROFILE"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                profile,
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "font-heading pt-2 text-lg",
                                    children: "DEPARTMENT HISTORY"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2002 B.E. Biotechnology program started under Visvesvaraya Technological University (VTU), Belgaum, with an intake of 30 students."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2006 Student intake increased from 30 to 60. "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2007 Autonomous under VTU. "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2008 Recognized R\xa0D centre offering PhD / M.Sc. (Engg.) in Biotechnology under VTU."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2009 NBA Accredited B.E-Biotechnology Programme for three years: (June 2010 - 2013)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: " 2011 Outcome Based Education is implemented. "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2012 M. Tech in Biotechnology program started under autonomous scheme, with an intake of 18 students."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2016 NBA Accredited B.E-Biotechnology Programme for three years: (June 2016 - 2019)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2018 PG Diploma in Biopharmaceutical Technology started. This Program is supported by the Department of IT \xa0 BT, Government of Karnataka."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2019 NBA Accredited B.E-Biotechnology Programme for three years (June 2019-2022)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "2019 NBA Accredited M.Tech.- Biotechnology Programme for three years (June 2019-2022)"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "lg:space-x-2 flex m-auto pt-6 flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${op ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah" : " "}`,
                                    onClick: ()=>{
                                        setOp(true);
                                        setUg(false);
                                        setPg(false);
                                        setHod(false);
                                    },
                                    children: "Offered Programs"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${ug ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah" : " "}`,
                                    onClick: ()=>{
                                        setOp(false);
                                        setUg(true);
                                        setPg(false);
                                        setHod(false);
                                    },
                                    children: "Objectives UG"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${pg ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah" : " "}`,
                                    onClick: ()=>{
                                        setOp(false);
                                        setUg(false);
                                        setPg(true);
                                        setHod(false);
                                    },
                                    children: "Objectives PG"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${hod ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah" : " "}`,
                                    onClick: ()=>{
                                        setOp(false);
                                        setUg(false);
                                        setPg(false);
                                        setHod(true);
                                    },
                                    children: "HOD's Profile"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${!op ? "hidden" : ""}`,
                            children: [
                                "Department of Biotechnology offers three programs that are affiliated to VTU – Belgaum and recognized by AICTE:",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Bachelor of Engineering in Biotechnology with intake count of 60"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PG Diploma in Biopharmaceutical Technology (LINK HERE)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Master of Technology in Biotechnology with intake count of 18"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "M.Sc. (Engg) by Research with intake as per VTU norms"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Ph.D. with intake as per VTU norms "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${!ug ? "hidden" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Program Educational Objectives (PEOs):"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "PEO 1: To impart a strong foundation in mathematics, basic and engineering sciences contributing to Biotechnology.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "PEO 2: To produce graduates who can pursue higher education and research in biotechnology and allied fields.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "PEO 3: To produce graduates with an ability to design, develop and implement research projects and apply to solve problems related to areas of biotechnology.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "PEO 4: To provide opportunities for students to work in multidisciplinary teams with professional ethics, good communication, leadership skills and commitment to society.",
                                                " "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Program Outcomes (POs):"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        "Engineering Graduates will be capable of:",
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Program Specific Outcomes (PSOs):"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "To have thorough grounding in Mathematics, Chemistry and Biology."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "To be proficient in the principles and practices of advanced biological sciences."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "To apply engineering principles to biological systems to solve Biotechnology problems."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${!pg ? "hidden" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Program Educational Objectives (PEOs):"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PEO 1: To produce postgraduates who can articulate technical developments in the field of biotechnology and apply relevant tools to solve problems in real life situations"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PEO 2: To enable postgraduates to have an ability to design and conduct research to meet desired needs within realistic economic, environmental, socio-political, ethical, health, safety & sustainability realms"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PEO 3: To prepare postgraduates to be successful professionals in the industry, academia, research, entrepreneurial pursuit and consulting firms"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PEO 4: To prepare students to enrich their knowledge & skills throughout their career"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Program Outcomes (POs):"
                                }),
                                "Engineering Graduates will be capable of:",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "list-disc ml-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PO1: An ability to independently carry out research/investigation & development work to solve the practical problem"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PO2: An ability to write & present a substantial technical report/document"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PO3: Students should be able to demonstrate a degree of mastery over the area as per the specialization of the programme. The mastery should be at a level higher than the requirements in the appropriate bachelor program"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PO4: Demonstrate the ability to design, conduct experiments and analyze data in the field of Biotechnology"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: "PO5: Able to employ Biotechnology tools in biological research."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${!hod ? "hidden" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                    children: "Dr. Chandra Prabha M N"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/bt.jpg",
                                    className: "mx-auto text-center"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Dr. Chandra Prabha M N, completed her Bachelor’s degree in Chemical Engineering securing II rank at University level from M.S. Ramaiah Institute of Technology in 1997. She obtained her Masters in Engineering from Indian Institute of Science (IISc) in 2001 and Ph.D. from Faculty of Engineering, IISc in 2007. She has received Fellowship from CEFIPRA- France, to undergo a high level scientific training at CNRS, Henry Poincare University, Nancy, France in 2003 and was a visiting scholar at Columbia University, USA under DST- NSF joint research program in 2004. She has presented her research in various International Scientific forums at South Korea (2012), Italy (2010), Argentina (2009), Germany (2007), Cape Town (2005)."
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Dr. Chandra Prabha M N joined Ramaiah Institute of Technology as faculty in 2007. Her research interest includes microbe-mineral interactions and application of nanomaterials/nanocomposites in environmental and health biotechnology. In particular, her research focuses on exploiting the functional properties of nanomaterials and bio-material interfaces for various engineering applications. She has received ~1.5 crore funding through several externally funded projects from DST, AICTE, VTU and VGST. She has published over 60 research papers in International journals, conference proceedings and 6 book chapters. She also serves as reviewer for several international journals. She has guided many research scholars for Ph.D. and M. Tech. research projects."
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "She is recipient of prestigious \"Career Award for Young Teachers\" by AICTE in 2010, a final shortlisted candidate for INAE Young Engineer Award in 2009, recipient of INSA Summer Fellowship in 2009. She is also recipient of “Award for Excellence in Research - 2019” from Ramaiah Institute of Technology"
                                })
                            ]
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
}
/* harmony default export */ const components_DeptMainContent = (DeptMainContent);

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
;// CONCATENATED MODULE: ./pages/index.js







function Index({ visionData , latestNews , latestEvents , deptStats , sy , tt , sm ,  }) {
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
                    /*#__PURE__*/ jsx_runtime.jsx(components_DeptMainContent, {
                        data: visionData,
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
};
async function getStaticProps() {
    const res = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/");
    const json = await res.json();
    //const json = await res.json();
    //console.log(res);
    const l_e = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/");
    const l_eJson = await l_e.json();
    const l_n = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/");
    const l_nJson = await l_n.json();
    const dep_stat = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/");
    const d_sJson = await dep_stat.json();
    const syl = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/syllabus/1");
    const syllJson = await syl.json();
    const t_t = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/timetable/1");
    const t_tJson = await t_t.json();
    const s_m = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/studymat/1");
    const s_mJson = await s_m.json();
    return {
        props: {
            visionData: json,
            latestNews: l_nJson,
            latestEvents: l_eJson,
            deptStats: d_sJson,
            sy: syllJson,
            sm: s_mJson,
            tt: t_tJson
        }
    };
}


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
var __webpack_exports__ = __webpack_require__.X(0, [146,959,52,193,616], () => (__webpack_exec__(8272)));
module.exports = __webpack_exports__;

})();