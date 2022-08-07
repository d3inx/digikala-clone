"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 3599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ review)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/product/reviewSection.js




const ReviewSection = ({ item , show , setShow  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap w-full my-8 pb-8 border-b-4 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "pb-2 text-sm lg:text-base font-bold",
                        children: item.title
                    }),
                    item.sections.map((section)=>{
                        if (section.template === "text") {
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-wrap w-full my-8 pb-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xs lg:text-sm leading-loose mt-4",
                                    dangerouslySetInnerHTML: {
                                        __html: section.text
                                    }
                                })
                            }, section.text);
                        } else if (section.template === "image") {
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full flex flex-wrap justify-center my-8 pb-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full lg:w-4/5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: section.image,
                                        width: 800,
                                        height: 500,
                                        layout: "responsive",
                                        alt: "",
                                        className: "object-cover"
                                    })
                                })
                            }, section.image);
                        } else if (section.template === "text-image") {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full flex flex-wrap my-8 pb-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-3/4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs lg:text-sm leading-loose mt-4",
                                            dangerouslySetInnerHTML: {
                                                __html: section.text
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-1/4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: section.image,
                                            width: 800,
                                            height: 500,
                                            layout: "responsive",
                                            alt: "",
                                            className: "object-cover"
                                        })
                                    })
                                ]
                            }, section.text);
                        } else if (section.template === "image-text") {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full flex flex-wrap my-8 pb-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-1/4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: section.image,
                                            width: 800,
                                            height: 500,
                                            layout: "responsive",
                                            alt: "",
                                            className: "object-cover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-full lg:w-3/4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs lg:text-sm leading-loose mt-4",
                                            dangerouslySetInnerHTML: {
                                                __html: section.text
                                            }
                                        })
                                    })
                                ]
                            }, section.text);
                        }
                    })
                ]
            }),
            !show ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex items-center text-cyan-500 mt-4 text-sm",
                onClick: ()=>setShow(!show),
                children: [
                    "\u0628\u06CC\u0634\u062A\u0631",
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronLeftIcon, {
                        className: "w-4 h-4 text-cyan-500"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex items-center text-cyan-500 mt-4 text-sm",
                onClick: ()=>setShow(!show),
                children: [
                    "\u0628\u0633\u062A\u0646",
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChevronLeftIcon, {
                        className: "w-4 h-4 text-cyan-500"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const reviewSection = (ReviewSection);

;// CONCATENATED MODULE: ./components/product/review.js



const Review = ({ data  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:w-4/5 py-8 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "pb-2 text-sm lg:text-base font-bold",
                children: "\u0628\u0631\u0631\u0633\u06CC \u062A\u062E\u0635\u0635\u06CC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-rose-500 w-20 h-[2px]"
            }),
            show ? data.map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(reviewSection, {
                    item: item,
                    show: show,
                    setShow: setShow
                }, item.title);
            }) : data.slice(0, 1).map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(reviewSection, {
                    item: item,
                    show: show,
                    setShow: setShow
                }, item.title);
            })
        ]
    });
};
/* harmony default export */ const review = (Review);


/***/ })

};
;