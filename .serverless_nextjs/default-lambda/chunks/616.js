"use strict";
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 8706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DeptBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function DeptBanner({ latestNews , latestEvents  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid gap-5 grid-cols-12 h-auto lg:h-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-start-1 col-end-13 bg-gray-deptHeader min-h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid gap-5 grid-cols-12 min-h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-full lg:col-start-2 lg:col-end-7 bg-bt bg-cover text-center sm:text-2xl font-bold flex",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "m-auto font-heading lg:text-3xl text-blue-ramaiah",
                                children: [
                                    "DEPARTMENT OF ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "BIOTECHNOLOGY"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-12 lg:col-start-7 lg:col-end-12 inline-flex text-center text-blue-ramaiah",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-1/2 lg:w-1/2 lg:mr-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xl font-heading ",
                                            children: "LATEST NEWS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white",
                                            children: latestNews.map((newsItem, i)=>{
                                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-heading lg:text-2xl",
                                                            children: newsItem.publishedDate.substring(8, 10)
                                                        }, i),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: " Nov 2021 "
                                                        })
                                                    ]
                                                }));
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500",
                                            children: latestNews.map((newsItem, i)=>{
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: newsItem.linkURL,
                                                        children: [
                                                            " ",
                                                            newsItem.title
                                                        ]
                                                    })
                                                }, i));
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-1/2 lg:w-1/2 lg:mr-2 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xl font-heading",
                                            children: "LATEST EVENTS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white",
                                            children: latestEvents.map((eventItem, i)=>{
                                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-heading lg:text-2xl",
                                                            children: eventItem.eventStartDate.substring(8, 10)
                                                        }, i),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: " Nov 2021 "
                                                        })
                                                    ]
                                                }));
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500",
                                            children: latestEvents.map((eventItem, i)=>{
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: eventItem.linkURL,
                                                        children: [
                                                            " ",
                                                            eventItem.title
                                                        ]
                                                    })
                                                }, i));
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};


/***/ }),

/***/ 1381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function DeptStats({ stats  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid gap-5 grid-cols-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden lg:inline-flex lg:col-start-4 lg:col-end-10 h-24 bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-br-2xl rounded-bl-2xl shadow-md justify-between lg:justify-evenly space-x-2 text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex self-center text-center",
                    children: stats.map((stat, i)=>{
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-x-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-heading text-3xl",
                                    children: stat.fieldHeading
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: stat.fieldSubHeading
                                })
                            ]
                        }));
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeptStats);


/***/ }),

/***/ 3252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/images/Institute-of-Technology-transparent-bkg.png
/* harmony default export */ const Institute_of_Technology_transparent_bkg = ({"src":"/_next/static/media/Institute-of-Technology-transparent-bkg.2750bad3.png","height":122,"width":409,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM8Z2nYIPj5/BP5y/+vMjIwCPz///8XAwPDfyD+BsQXGHfouXeLfD13xfjOq23//vwRZWRm/g6UYAZikKJ/ANPNGyDcVnOvAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Header.js



function Header() {
    return(/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "grid gap-5 grid-cols-12",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "col-start-1 col-end-13 bg-blue-ramaiah h-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid gap-5 grid-cols-12 h-auto",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-start-2 col-end-12 bg-blue-ramaiah",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-row justify-between items-center content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "hidden lg:inline-block lg:h-5/6 lg:w-auto ",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(next_image["default"], {
                                        src: Institute_of_Technology_transparent_bkg,
                                        alt: "Logo",
                                        layout: "fixed"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-20 w-[10rem] lg:hidden relative",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(next_image["default"], {
                                        src: Institute_of_Technology_transparent_bkg,
                                        alt: "Logo",
                                        layout: "fill",
                                        className: "absolute"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                                    className: "w-auto h-3/6 bg-gray-menu bg-opacity-50 space-x-4 text-xl text-white hidden lg:inline-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "sm:hover:font-bold p-2",
                                            href: "/home",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "sm:hover:font-bold p-2",
                                            href: "/about-us",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "sm:hover:font-bold p-2",
                                            href: "/admissions",
                                            children: "Admissions"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "sm:hover:font-bold",
                                            className: "font-bold border-b-2 p-2",
                                            href: "/academics",
                                            children: "Academics"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "sm:hover:font-bold p-2",
                                            href: "/placement",
                                            children: "Placement"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                    className: "text-xl text-white inline-flex lg:hidden cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 3224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function SideBarSyllabus({ syllabus  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "list-disc",
        children: syllabus.map((syl, id)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: syl.linkURL,
                        children: syl.linkTitle
                    }),
                    " "
                ]
            }, id));
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarSyllabus);


/***/ })

};
;