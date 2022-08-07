"use strict";
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 2316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ specifications)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/product/specificationSection.js


const SpecificationSection = ({ data , show  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center mt-4 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xs lg:text-base w-1/4 text-gray-500 leading-loose",
                children: [
                    data.title,
                    " :"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs lg:text-sm w-3/4 mr-8 py-4 border-b-[.5px] leading-loose ",
                children: data.values.map((item, index)=>index !== data.values.length - 1 ? `${item} ,` : item)
            })
        ]
    });
};
/* harmony default export */ const specificationSection = (SpecificationSection);

;// CONCATENATED MODULE: ./components/product/specifications.js




const Specifications = ({ attributes  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:w-4/5 py-8 border-b-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "pb-2 text-sm lg:text-base font-bold",
                children: "\u0645\u0634\u062E\u0635\u0627\u062A"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-rose-500 w-20 h-[2px]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: show ? attributes.map((data)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(specificationSection, {
                        data: data,
                        show: show
                    }, data.title);
                }) : attributes.slice(0, 5).map((data)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(specificationSection, {
                        data: data,
                        show: show
                    }, data.title);
                })
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
/* harmony default export */ const specifications = (Specifications);


/***/ })

};
;