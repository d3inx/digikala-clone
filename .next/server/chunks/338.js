"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 9338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-paginate"
var external_react_paginate_ = __webpack_require__(9700);
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: ./components/search/resultProducts.js




const ResultProducts = ({ products  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap divide-x divide-y border-t-[.5px] mt-8",
        children: products.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.url.uri,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:shadow-xl cursor-pointer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full p-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: item.images.main.url[0],
                                width: 300,
                                height: 300,
                                layout: "responsive",
                                alt: item.title_fa
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm h-10 mt-4 line-clamp-2",
                            children: item.title_fa
                        }),
                        item.rating.count > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center my-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(solid_.StarIcon, {
                                    className: "w-4 h-4 text-amber-500"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-xs pr-2",
                                    children: [
                                        item.rating.rate / 20,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        item.status === "marketable" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-row-reverse justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col items-end",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-sm font-bold",
                                            children: [
                                                item.default_variant.price.selling_price.toLocaleString(),
                                                " ",
                                                "\u0631\u06CC\u0627\u0644"
                                            ]
                                        }),
                                        item.default_variant.price.discount_percent > 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs text-gray-400 line-through mt-4",
                                            children: item.default_variant.price.rrp_price.toLocaleString()
                                        })
                                    ]
                                }),
                                item.default_variant.price.discount_percent > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-rose-600 h-5 flex items-center rounded-full px-2 mr-2 text-xs text-white font-bold",
                                    children: [
                                        item.default_variant.price.discount_percent,
                                        "\u066A"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row-reverse justify-between",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold text-gray-400",
                                children: "\u0646\u0627\u0645\u0648\u062C\u0648\u062F"
                            })
                        })
                    ]
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const resultProducts = (ResultProducts);

;// CONCATENATED MODULE: ./components/search/pagination.js





// Example items, to simulate fetching from another resources.
function PaginatedItems({ itemsPerPage , totalPages , products  }) {
    // We start with an empty list of items.
    const { 0: currentItems , 1: setCurrentItems  } = (0,external_react_.useState)(null);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const { 0: itemOffset , 1: setItemOffset  } = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    // useEffect(() => {
    //   // Fetch items from another resources.
    //   const endOffset = itemOffset + itemsPerPage;
    //   setCurrentItems(products.slice(itemOffset, endOffset));
    // }, [itemOffset, itemsPerPage]);
    // Invoke when user click to request another page.
    const handlePageClick = (event)=>{
        const newOffset = event.selected * itemsPerPage % products.length;
        const fetchQuery = Object.keys(router.query).map((item)=>item === "page" ? "" : `${item}=${router.query[item]}`).join("&");
        console.log(router);
        router.pathname === "/search/[childProductCategory]" ? router.push(`/search/[childProductCategory]?${fetchQuery}&page=${event.selected + 1}`) : router.push(`/search?${fetchQuery}&page=${event.selected + 1}`);
        console.log(newOffset);
        setItemOffset(newOffset);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(resultProducts, {
                products: products,
                currentItems: currentItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_paginate_default()), {
                breakLabel: "...",
                nextLabel: "\u0628\u0639\u062F\u06CC >",
                onPageChange: handlePageClick,
                pageRangeDisplayed: 5,
                pageCount: totalPages,
                previousLabel: "< \u0642\u0628\u0644\u06CC",
                renderOnZeroPageCount: null,
                initialPage: router.query.page === undefined ? 0 : router.query.page - 1,
                // styles
                containerClassName: "list-none w-full flex justify-center items-center my-8",
                pageClassName: "mx-4 w-8 h-8 flex items-center justify-center rounded-full text-sm",
                activeClassName: "bg-rose-600 text-white",
                previousClassName: "text-rose-600 font-bold",
                nextClassName: "text-rose-600 font-bold",
                disabledClassName: "hidden"
            })
        ]
    });
}

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/search/sortOption.js



const SortOption = ({ option , query  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex text-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.SortDescendingIcon, {
                    className: "w-5 h-5"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC:"
            }),
            option.map((item)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/search/?q=${query.q}&sort=${item.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `font-light px-4 cursor-pointer ${query.sort == item.id ? "text-rose-500" : "text-gray-400"}
              ${query.sort === undefined && item.id == 22 ? "text-rose-500" : "text-gray-400"}`,
                        children: item.title_fa
                    })
                }, item.id);
            })
        ]
    });
};
/* harmony default export */ const sortOption = (SortOption);

;// CONCATENATED MODULE: ./pages/search/index.js





const Search = ({ result , query  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "xl:container xl:mx-auto px-4 mt-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(sortOption, {
                    option: result.data.sort_options,
                    query: query
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(resultProducts, {
                    products: result.data.products
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PaginatedItems, {
                    itemsPerPage: 20,
                    totalPages: result.data.pager.total_pages,
                    products: result.data.products,
                    className: "container"
                })
            ]
        })
    });
};
/* harmony default export */ const search = (Search);
async function getServerSideProps({ query  }) {
    const fetchQuery = Object.keys(query).map((item, index)=>{
        return `${item}=${query[item]}`;
    }).join("&");
    console.log(`https://api.digikala.com/v1/search/?${fetchQuery}`);
    const result = await fetch(`https://api.digikala.com/v1/search/?${fetchQuery}`).then((res)=>res.json());
    console.log(result);
    return {
        props: {
            result,
            query
        }
    };
}


/***/ })

};
;