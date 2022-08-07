import { SortDescendingIcon } from "@heroicons/react/outline";
import Link from "next/link";

const SortOption = ({ option, query }) => {
  return (
    <div className="flex text-sm">
      <div>
        <SortDescendingIcon className="w-5 h-5" />
      </div>
      <p>مرتب سازی:</p>
      {option.map((item) => {
        return (
          <Link href={`/search/?q=${query.q}&sort=${item.id}`} key={item.id}>
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
