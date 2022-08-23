import { useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/?q=${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="relative z-50 bg-white shadow">
      <div className="container mx-auto">
        <div className="flex flex-col items-start py-4 space-y-4">
          <div className="flex flex-col lg:flex-row w-full">
            <Link href={"/"}>
              <Image
                src="https://www.digikala.com/statics/img/svg/logo.svg"
                width={115}
                height={35}
                quality={25}
                loading="eager"
                alt="digikala"
                className="cursor-pointer"
                priority
              />
            </Link>
            <form
              onSubmit={handleSubmit}
              className="flex flex-row mt-4 lg:mt-0 mr-4 px-4 py-2 bg-gray-200 rounded-lg lg:rounded-xl w-2/3  lg:w-1/4"
            >
              <SearchIcon
                onClick={handleSubmit}
                className="w-6 h-6 text-gray-500 cursor-pointer"
              />
              <input
                type="text"
                className="pr-2 outline-none text-sm bg-transparent h-full"
                placeholder="جستجو..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
