"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 4719:
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

      const compMod = __webpack_require__(7070)

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
        page: "/home",
        buildId: "JjSgAY7yG8aUrzG-vdrOd",
        escapedBuildId: "JjSgAY7yG8aUrzG\-vdrOd",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1de2a9cac9ec802d67db500dbc1f10d3",previewModeSigningKey:"651290b95efe6b88c8f67b45ff13468f346f2f1750279a00d5d85a80cfcf7a23",previewModeEncryptionKey:"c1d2d27932bd76329cf49c4b54af4247121891f720c95208e9de4776a3a958f1"}
      })
      
    

/***/ }),

/***/ 7070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
;// CONCATENATED MODULE: ./assets/images/Institute-of-Technology.png
/* harmony default export */ const Institute_of_Technology = ({"src":"/_next/static/media/Institute-of-Technology.924a526d.png","height":122,"width":409,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AdNgXJETDfjjge4vzwIBARP9+/33AgMCAPv7/PMVGBDKAcFbap0VDfnSfws3rCn99xz5+v3y/f3+BPz8/v4KDAcALzAiJn6dgUMAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-text-transition/lib/index.js
var lib = __webpack_require__(7978);
;// CONCATENATED MODULE: ./components/HomePage.js






function HomePage({ latestNews , latestEvents  }) {
    const { 0: lnState , 1: setLnState  } = (0,react.useState)([
        ...latestNews
    ]);
    const { 0: leState , 1: setLeState  } = (0,react.useState)([
        ...latestEvents
    ]);
    const { 0: newsIndex , 1: setNewsIndex  } = (0,react.useState)(0);
    const { 0: eventsIndex , 1: setEventsIndex  } = (0,react.useState)(0);
    const { 0: menuItemCLicked , 1: setMenuItemClicked  } = (0,react.useState)(false);
    const { 0: NewsItems , 1: setNewsItems  } = (0,react.useState)([
        "CHANGE OF BRANCH NOTIFICATION (III SEMESTER)",
        "Dept of Information Science and Engineering, RIT organizes Online Certification Course on Practical Approach of Deep Learning for Artificial Intelligence",
        "KSCST Student Project Programme - 2021 - Best Project of the Year Award", 
    ]);
    const { 0: EventItems , 1: setEventItems  } = (0,react.useState)([
        "International Conference on Innovative Interventions for Inclusive and Sustainable Business Landscape (IIISBL - 2021) organized by Department of Management Studies, RIT",
        "iot-deathon by Intel Developer Students Club, RIT",
        "My Story Session - A talk by Mr. Arvind Nadig, Co-founder & CEO at Li2 & Brahma3, Alumni of RIT", 
    ]);
    const { 0: NewsDates , 1: setNewsDates  } = (0,react.useState)([
        "08-Nov-2021",
        "27-Oct-2021",
        "10-Oct-2021", 
    ]);
    const { 0: EventDates , 1: setEventDates  } = (0,react.useState)([
        "02-Nov-2021",
        "22-Oct-2021",
        "06-Oct-2021", 
    ]);
    const { 0: newsItemURL , 1: setNewsItemURL  } = (0,react.useState)([
        "https://drive.google.com/file/d/1sgySy98SJ_fovyEnP7p9fquJYcu_bcAV/view?usp=sharing",
        "https://drive.google.com/file/d/1W20Vyr98KyHVo-m3srf78FurQDIC0Ah2/view?usp=sharing",
        "https://drive.google.com/file/d/1eJ_9WBtD9vDkCTcBpOEUjJYL5LNIu7Jn/view?usp=sharing", 
    ]);
    const { 0: eventItemURL , 1: setEventItemURL  } = (0,react.useState)([
        "https://drive.google.com/file/d/1RgPVsDEdcKi7fnYqoApSFUryveQ-L4Sk/view?usp=sharing",
        "https://drive.google.com/file/d/1FWHMQRLz6gn4NlXgkc7n8qkOWgQSuQA7/view?usp=sharing",
        "https://drive.google.com/file/d/1FHszh7JyBQc7JRrXP8UPdz0tX3DG1Lx9/view?usp=sharing", 
    ]);
    (0,react.useEffect)(()=>{
        const intervalId = setInterval(()=>{
            setNewsIndex(newsIndex + 1);
            setEventsIndex(eventsIndex + 1);
        }, 4000);
        return ()=>clearTimeout(intervalId)
        ;
    }, [
        newsIndex,
        eventsIndex
    ]);
    // useEffect(() => {
    //   setInterval(() => {
    //     setEventsIndex(eventsIndex + 1);
    //   }, 4000);
    // }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-12 min-h-[100vh] max-h-[100vh] z-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-6 bg-homeBanner bg-gray-homeBannerGray bg-no-repeat bg-cover bg-top bg-blend-luminosity flex flex-col min-h-[100%] max-h-[100%]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-[25%] flex-shrink"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-[35%] flex-grow"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "h-[40%] flex-grow",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-3 opacity-100 relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col my-auto",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "bg-blue-ramaiah text-white text-xl px-2 mx-auto text-center",
                                                            children: "Latest News"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "h-auto bg-white shadow-2xl mx-auto w-[60%] z-10",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-2 ",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: " bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                className: "text-4xl font-extrabold inline-block",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                    text: NewsDates[newsIndex % NewsDates.length].substr(0, 2),
                                                                                    overflow: true,
                                                                                    inline: true
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                    text: NewsDates[newsIndex % NewsDates.length].substr(3, 3) + " " + NewsDates[newsIndex % NewsDates.length].substr(7, 4),
                                                                                    overflow: true,
                                                                                    inline: true
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "my-auto",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: newsItemURL[newsIndex % NewsDates.length],
                                                                            target: "_blank",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                text: NewsItems[newsIndex % NewsItems.length],
                                                                                overflow: true
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col my-auto h-[50%]",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "bg-blue-ramaiah text-white text-xl px-2 mx-auto text-center h-auto",
                                                            children: "Latest Events"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "h-auto bg-white shadow-2xl mx-auto w-[60%] ",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "p-2 ",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: " bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                className: "text-4xl font-extrabold inline-block",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                    text: EventDates[eventsIndex % EventDates.length].substr(0, 2),
                                                                                    overflow: true,
                                                                                    inline: true
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                    text: EventDates[eventsIndex % EventDates.length].substr(3, 3) + " " + EventDates[eventsIndex % EventDates.length].substr(7, 4),
                                                                                    overflow: true,
                                                                                    inline: true
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "my-auto",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: eventItemURL[eventsIndex % EventDates.length],
                                                                            target: "_blank",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx(lib/* default */.ZP, {
                                                                                text: EventItems[eventsIndex % EventItems.length],
                                                                                overflow: true
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-span-6 bg-blue-ramaiah flex flex-col min-h-[100%] max-h-[100%] bg-rightSideHome bg-cover bg-no-repeat"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "min-w-[80%] flex items-center p-2 justify-between bg-transparent z-10 absolute top-0 left-[10%]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative lg:h-5/6 lg:w-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx(next_image["default"], {
                                    src: Institute_of_Technology,
                                    alt: "Logo",
                                    layout: "fixed",
                                    className: "absolute"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-white justify-end relative",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    className: "space-x-6 bg-gray-menu bg-opacity-50 p-4 box-border ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "p-4 border-b-2 border-orange-ramaiah text-blue-ramaiah font-bold",
                                            href: "home",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "p-4 hover:font-bold cursor-pointer",
                                            href: "",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "p-4 hover:font-bold cursor-pointer",
                                            href: "",
                                            children: "Admissions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "p-4 hover:font-bold cursor-pointer",
                                            href: "#",
                                            onClick: ()=>{
                                                setMenuItemClicked(!menuItemCLicked);
                                            },
                                            children: "Academics"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "p-4 hover:font-bold cursor-pointer",
                                            href: "",
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: `lg:absolute lg:top-10 lg:min-h-[100px] lg:bg-[#7c688d] lg:-left-10 lg:flex-wrap lg:text-white lg:w-full lg:p-4 lg:pt-0 lg:z-[5] lg:transform lg:transition-all lg:translate-x-4 lg:translate-y-4  lg:duration-100 ${!menuItemCLicked ? "lg:hidden" : "lg:flex"}`,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded",
                                                            children: [
                                                                " ",
                                                                "Circuit Branches",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col border-t-2 flex-grow-0 text-sm",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Computer Science & Engg."
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Electrical & Electronics Engg."
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: [
                                                                        " ",
                                                                        "Electronics & Communications Engg."
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Electronics & Instrumentation Engg."
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Electronics & Telecommunications Engg."
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Information Science & Engg."
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Medical Electronics Engg."
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded",
                                                            children: [
                                                                " ",
                                                                "Non-circuit Branches",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col border-t-2 border-white text-sm",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Architecture"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    href: "/",
                                                                    children: "Biotechnology"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Civil Engineering"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Industrial Engineering & Mgmt"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "Mechanical Engineering"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded",
                                                            children: [
                                                                " ",
                                                                "Research Programs",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col border-t-2 border-white text-sm",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "CAMFS"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "CFR"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "IRF"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "ISE"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded",
                                                            children: [
                                                                " ",
                                                                "PhD",
                                                                " "
                                                            ]
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("br", {
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex flex-col border-t-2 border-white text-sm",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "ECE"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    className: "lg:hover:text-blue-ramaiah lg:cursor-pointer",
                                                                    children: "EEE"
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-span-full bg-gray-homeSection h-[60vh] text-center ",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-blue-ramaiah underline capitalize font-heading text-4xl w-[65%] mx-auto h-full space-y-3 py-3",
                            children: [
                                "Virtual Tour",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                                    src: "https://www.easytourz.com/BT-EmabedTour/all/87002a26d035a1f7",
                                    width: "100%",
                                    height: "90%",
                                    webkitallowfullscreen: "",
                                    mozallowfullscreen: "",
                                    allowFullScreen: ""
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bg-homeBannerJnanam h-auto bg-no-repeat bg-cover bg-bottom space-y-3 py-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mx-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "sam-msr.png",
                                    className: "mx-auto"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex w-full mx-auto justify-center space-x-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "msr.png",
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-white max-w-[30%] self-center space-y-10",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "italic text-5xl font-bold",
                                                children: [
                                                    "A Tribute to Dr. M. S. Ramaiah",
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: "“What we have done for ourselves alone dies with us. What we have done for others and the world remains and is immortal.”"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "bg-orange-ramaiah p-4 text-white text-lg",
                                                children: "EXPLORE BOARD OF MANAGEMENT"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {
            })
        ]
    }));
}
/* harmony default export */ const components_HomePage = (HomePage);

;// CONCATENATED MODULE: ./pages/home.js



function Home({ latestNews , latestEvents  }) {
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
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "font-body",
                children: /*#__PURE__*/ jsx_runtime.jsx(components_HomePage, {
                    latestNews: latestNews,
                    latestEvents: latestEvents
                })
            })
        ]
    }));
};
async function getStaticProps() {
    const l_e = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/");
    const l_eJson = await l_e.json();
    const l_n = await fetch("http://ec2-34-215-195-143.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/");
    const l_nJson = await l_n.json();
    return {
        props: {
            latestNews: l_nJson,
            latestEvents: l_eJson
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
var __webpack_exports__ = __webpack_require__.X(0, [146,959,697,978,52,193], () => (__webpack_exec__(4719)));
module.exports = __webpack_exports__;

})();