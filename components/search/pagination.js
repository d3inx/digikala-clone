import { useContext, useState } from "react";

import { useRouter } from "next/router";

import ReactPaginate from "react-paginate";

import ResultProducts from "./resultProducts";
import { SearchContext } from "../../pages/search";

// Example items, to simulate fetching from another resources.

export function PaginatedItems({ itemsPerPage}) {

  const data = useContext(SearchContext);
  const {totalPages,products} = data;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const router = useRouter();

  
  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const fetchQuery = Object.keys(router.query)
      .map((item) => item === 'page' ? '' : `${item}=${router.query[item]}`)
      .join("&");
      console.log(router);
    router.pathname === '/search/[childProductCategory]' ? router.push(`/search/[childProductCategory]?${fetchQuery}&page=${event.selected + 1}`) : router.push(
      `/search?${fetchQuery}&page=${event.selected + 1}`
    )
    console.log(newOffset);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ResultProducts products={products} currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="بعدی >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< قبلی"
        renderOnZeroPageCount={null}
        initialPage={router.query.page === undefined ? 0 : router.query.page - 1}
        // styles
        containerClassName="list-none w-full flex justify-center items-center my-8"
        pageClassName="mx-4 w-8 h-8 flex items-center justify-center rounded-full text-sm"
        activeClassName="bg-rose-600 text-white"
        previousClassName="text-rose-600 font-bold"
        nextClassName="text-rose-600 font-bold"
        disabledClassName="hidden"
      />
    </>
  );
}
