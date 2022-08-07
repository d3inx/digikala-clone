import React from "react";
import { PaginatedItems } from "../../components/search/pagination";
import ResultProducts from "../../components/search/resultProducts";
import SortOption from "../../components/search/sortOption";

const Search = ({ result , query }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 mt-4">
      <div>
        <SortOption option={result.data.sort_options} query={query} />
        <ResultProducts products={result.data.products} />
        <PaginatedItems itemsPerPage={20} totalPages={result.data.pager.total_pages} products={result.data.products} className='container' />
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
  console.log(`https://api.digikala.com/v1/search/?${fetchQuery}`);
  const result = await fetch(
    `https://api.digikala.com/v1/search/?${fetchQuery}`
  ).then((res) => res.json());
  console.log(result);
  return {
    props: { result , query  },
  };
}
