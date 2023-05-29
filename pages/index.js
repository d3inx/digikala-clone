import { createContext } from "react";

import Header from "../components/home/header";
import DeepLinks from "../components/home/deepLinks";
import IncredibleProducts from "../components/home/incredibleProducts";
import TopBanners from "../components/home/topBanners";
import MainCategories from "../components/home/mainCategories";
import MiddleBanners from "../components/home/middleBanners";
import RecommendationSubCategories from "../components/home/recommendationSubCategories";
import PopularBrands from "../components/home/popularBrands";
import DigiPlus from "../components/home/digiPlus";
import BestSelling from "../components/home/bestSelling";
import SellingAndSalesProducts from "../components/home/sellingAndSalesProducts";
import FreshOffer from "../components/home/freshOffer";
import homeData from "../filter_data/homeData";

export const DataContext = createContext();

export default function Home({ filteredData }) {
  return (
    <DataContext.Provider value={filteredData}>
      <Header />
      <div className="xl:container xl:mx-auto px-4 xl:px-28">
        <DeepLinks />
        <IncredibleProducts
          image={
            "https://www.digikala.com/statics/img/png/specialCarousel/General.png"
          }
          color={"bg-rose-600"}
        />
        <FreshOffer />
        <TopBanners />
        <MainCategories />
        <MiddleBanners />
        <RecommendationSubCategories />
        <PopularBrands />
        <MiddleBanners />
        <DigiPlus />
        <BestSelling />
        <SellingAndSalesProducts />
      </div>
    </DataContext.Provider>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://api.digikala.com/v1/").then((res) =>
    res.json()
  );

  const filteredData = homeData(
    data.data,
    data.data.header_banners,
    data.data.deep_links,
    data.data.incredible_products.products,
    data.data.fresh_incredible_products.products,
    data.data.top_banners,
    data.data.main_categories.categories,
    data.data.middle_banners,
    data.data.recommendation_sub_categories,
    data.data.middle_banners_third,
    data.data.popular_brands.brands,
    data.data.digiplus.jet_delivery_products.products,
    data.data.best_selling_products.products,
    data.data.selling_and_sales_products.products
  );

  return {
    props: { filteredData },
  };
}
