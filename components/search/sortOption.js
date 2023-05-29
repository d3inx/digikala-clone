import Link from "next/link";
import { useContext } from "react";

import { SortDescendingIcon } from "@heroicons/react/outline";

import { SearchContext } from "../../pages/search";

const SortOption = ({ query }) => {

  const data = useContext(SearchContext);
  const {sortOptions} = data;

  return (
    <div className="flex text-sm">
      <div>
        <SortDescendingIcon className="w-5 h-5" />
      </div>
      <p>مرتب سازی:</p>
      {sortOptions.map((item) => {
        return (
          <Link href={query.q !== undefined ? `/search/?q=${query.q}&sort=${item.id}` : `/search/?sort=${item.id}` } key={item.id}>
            <div
              className={`font-light px-4 cursor-pointer ${
                query.sort == item.id ? "text-rose-500" : "text-gray-400"
              }
              ${
                query.sort === undefined && item.id == 22
                  ? "text-rose-500"
                  : "text-gray-400"
              }`}
            >
              {item.title_fa}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SortOption;
