import { useSelector } from "react-redux";

const Category = ({ showMenu, setShowMenu }) => {
  const category = useSelector(
    (state) => state.home.homeData.data.main_categories.categories
  );
  const activeCategory = useSelector(
    (state) => state.home.homeData.data.recommendation_sub_categories
  );

  console.log(category, activeCategory);

  return (
    <div
      className={`bg-black/30 w-screen lg:h-screen fixed  lg:absolute  overflow-y-scroll  top-0 left-0 lg:left-auto lg:top-auto ${
        showMenu ? "" : "hidden"
      }`}
    >
      <div className="container lg:mx-auto flex flex-wrap lg:rounded-b-xl shadow-md w-5/6 lg:h-2/3 bg-white lg:divide-x-2 lg:divide-x-reverse py-4">
        <div className="lg:w-1/5 flex lg:flex-col flex-wrap">
          {category.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer group hover:bg-gray-100 px-4 py-3"
              >
                <span className="text-sm pr-4 group-hover:text-red-500 font-bold">
                  {item.title_fa}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-4/5 lg:h-full flex flex-col flex-wrap">
          {activeCategory &&
            activeCategory.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col p-4 hover:text-red-500 cursor-pointer"
                >
                  <span className="text-sm pr-4">{item.title_fa}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
