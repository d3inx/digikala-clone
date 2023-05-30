import React, { createContext } from "react";
import { PaginatedItems } from "../../components/search/pagination";
import SortOption from "../../components/search/sortOption";
import SearchData from "../../filter_data/searchData";

export const SearchContext = createContext();

const Search = ({ filteredData, query }) => {
  return (
    <SearchContext.Provider value={filteredData}>
      <div className="xl:container xl:mx-auto px-4 mt-4">
        <div>
          <SortOption query={query} />
          <PaginatedItems
            itemsPerPage={20}
            className="container"
          />
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  let fetchQuery;
  let result;
  if (query !== {}) {
    fetchQuery = Object.keys(query)
      .map((item, index) => {
        return `${item}=${query[item]}`;
      })
      .join("&");
    result = await fetch(
      `https://api.digikala.com/v1/search/?${fetchQuery}`
    ).then((res) => res.json());
  } else {
    result = await fetch(`https://api.digikala.com/v1/search/`).then((res) =>
      res.json()
    );
  }
  const filteredData = SearchData(
    result.data.sort_options,
    result.data.products,
    result.data.pager.total_pages
  );

  return {
    props: { filteredData, query },
  };
}
