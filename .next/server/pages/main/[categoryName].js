"use strict";
(() => {
var exports = {};
exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 4795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_bestSelling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7671);
/* harmony import */ var _components_home_incredibleProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(800);
/* harmony import */ var _components_home_mainCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(615);
/* harmony import */ var _components_home_middleBanners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8629);
/* harmony import */ var _components_home_popularBrands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _components_home_recommendationSubCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8831);
/* harmony import */ var _components_home_sellingAndSalesProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5533);
/* harmony import */ var _components_home_topBanners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5977);
/* harmony import */ var _components_home_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8711);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_incredibleProducts__WEBPACK_IMPORTED_MODULE_2__, _components_home_popularBrands__WEBPACK_IMPORTED_MODULE_5__, _components_home_header__WEBPACK_IMPORTED_MODULE_9__]);
([_components_home_incredibleProducts__WEBPACK_IMPORTED_MODULE_2__, _components_home_popularBrands__WEBPACK_IMPORTED_MODULE_5__, _components_home_header__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const categoryPage = ({ data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "xl:container xl:mx-auto px-4 xl:px-28",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_header__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                sliderItem: data.data.slider_banners
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_incredibleProducts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                suggestedProducts: data.data.incredible_offers.products,
                image: "https://www.digikala.com/statics/img/png/specialCarousel/Electronics.png",
                color: "bg-indigo-600"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_mainCategories__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                categories: data.data.sub_categories,
                childCategory: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_middleBanners__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                banners: data.data.middle_banners
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_recommendationSubCategories__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categories: data.data.recommendation_sub_categories
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_topBanners__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                topBanners: data.data.top_banners
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_bestSelling__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                products: data.data.best_selling_products.products
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_sellingAndSalesProducts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                products: data.data.top_repurchased_products.products
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_popularBrands__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                brands: data.data.popular_brands.brands
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryPage);
async function getServerSideProps({ params  }) {
    const res = await fetch(`https://api.digikala.com/v1/categories/${params.categoryName}/`);
    const data = await res.json();
    if (data.status === 404) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,75], () => (__webpack_exec__(4795)));
module.exports = __webpack_exports__;

})();