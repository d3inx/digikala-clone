import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import ImageLoader from "./imageLoader";

const Category = dynamic(() => import("./category"), {
  ssr: false,
});

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-start py-4 space-y-4">
          <div className="flex flex-col lg:flex-row w-full">
            <Image
              src="https://www.digikala.com/statics/img/svg/logo.svg"
              width={115}
              height={35}
              alt=""
            />
            <form className="flex flex-row mt-4 lg:mt-0 mr-4 px-4 py-2 bg-gray-200 rounded-lg lg:rounded-xl w-2/3  lg:w-1/4">
              <SearchIcon className="w-6 h-6 text-gray-500" />
              <input
                type="text"
                className="pr-2 outline-none text-sm bg-transparent h-full"
                placeholder="جستجو..."
              />
            </form>
          </div>
          <ul>
            <li
              className={`flex cursor-pointer ${
                showMenu ? "border-b-2 pb-1 border-red-500" : ""
              }`}
              onClick={() => setShowMenu(!showMenu)}
            >
              <MenuIcon className="w-6 h-6 text-gray-500" />
              <span className="text-gray-500 pr-4">دسته بندی</span>
            </li>
          </ul>
        </div>
      </div>
      {showMenu && <Category showMenu={showMenu} setShowMenu={setShowMenu} />}
    </div>
  );
};

export default Navbar;
