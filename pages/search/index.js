import React from "react";
import { PaginatedItems } from "../../components/search/pagination";
import ResultProducts from "../../components/search/resultProducts";
import SortOption from "../../components/search/sortOption";
import SearchData from "../../filter_data/searchData";

const Search = ({ filteredData , query }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 mt-4">
      <div>
        <SortOption option={filteredData.sortOptions} query={query} />
        <ResultProducts products={filteredData.products} />
        <PaginatedItems itemsPerPage={20} totalPages={filteredData.totalPages} products={filteredData.products} className='container' />
      </div>
    </div>
  );
};

export default Search;

export async function getServerSideProps({query}) {
  const fetchQuery =  Object.keys(query).map((item , index) => {
    return `${item}=${query[item]}`;
  }
  ).join('&');
  const result = await fetch(
    `https://api.digikala.com/v1/search/?${fetchQuery}`
  ).then((res) => res.json());

  const filteredData = SearchData(
    result.data.sort_options,
    result.data.products,
    result.data.pager.total_pages,
  );

  return {  
    props: { filteredData , query  },
  };
}
