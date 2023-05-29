import { createContext } from "react";

import BestSelling from "../../components/main/bestSelling";
import IncredibleOffers from "../../components/main/incredibleOffers";
import SubCategories from "../../components/main/subCategories";
import MiddleBanners from "../../components/main/middleBanners";
import PopularBrands from "../../components/main/popularBrands";
import RecommendationSubCategories from "../../components/main/recommendationSubCategories";
import SellingAndSalesProducts from "../../components/main/sellingAndSalesProducts";
import TopBanners from "../../components/main/topBanners";
import Header from "./../../components/main/header";

import ChildCategoryData from "../../filter_data/childCategoryData";

export const MainContext = createContext();

const categoryPage = ({ filteredData }) => {
  console.log(filteredData);
  return (
    <MainContext.Provider value={filteredData}>
      <div className="xl:container xl:mx-auto px-4 xl:px-28">
        <Header />
        <IncredibleOffers
          image={
            "https://www.digikala.com/statics/img/png/specialCarousel/Electronics.png"
          }
          color={"bg-indigo-600"}
        />
        <SubCategories  />
        <MiddleBanners  />
        <RecommendationSubCategories
        />
        <TopBanners  />
        <BestSelling />
        <SellingAndSalesProducts
        />
        <PopularBrands brands={filteredData.popular_brands} />
      </div>
    </MainContext.Provider>
  );
};

export default categoryPage;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.digikala.com/v1/categories/${params.categoryName}/`
  );
  const data = await res.json();

  if (data.status === 404) {
    return {
      notFound: true,
    };
  }
  if (data.status === 301) {
    return {
      redirect: {
        permanent: false,
        destination: data.redirect_url.uri,
      },
    };
  }
  const filteredData = ChildCategoryData(data.data);

  return {
    props: { filteredData },
  };
}
