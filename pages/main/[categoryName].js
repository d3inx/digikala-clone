import BestSelling from "../../components/home/bestSelling";
import IncredibleProducts from "../../components/home/incredibleProducts";
import MainCategories from "../../components/home/mainCategories";
import MiddleBanners from "../../components/home/middleBanners";
import PopularBrands from "../../components/home/popularBrands";
import RecommendationSubCategories from "../../components/home/recommendationSubCategories";
import SellingAndSalesProducts from "../../components/home/sellingAndSalesProducts";
import TopBanners from "../../components/home/topBanners";
import ChildCategoryData from "../../filter_data/childCategoryData";
import Header from "./../../components/home/header";

const categoryPage = ({ filteredData }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 xl:px-28">
        <Header sliderItem={filteredData.slider_banners} />
        <IncredibleProducts
          suggestedProducts={filteredData.incredible_offers}
          image={
            "https://www.digikala.com/statics/img/png/specialCarousel/Electronics.png"
          }
          color={"bg-indigo-600"}
        />
        <MainCategories categories={filteredData.sub_categories} />
        <MiddleBanners banners={filteredData.middle_banners} />
        <RecommendationSubCategories categories={filteredData.recommendation_sub_categories} />
        <TopBanners topBanners={filteredData.top_banners} />
        <BestSelling products={filteredData.best_selling_products} />
        <SellingAndSalesProducts products={filteredData.top_repurchased_products} />
        <PopularBrands brands={filteredData.popular_brands} />
      </div>
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
   const filteredData = ChildCategoryData(
    data.data.slider_banners,
    data.data.incredible_offers.products,
    data.data.sub_categories,
    data.data.middle_banners,
    data.data.recommendation_sub_categories,
    data.data.top_banners,
    data.data.best_selling_products.products,
    data.data.top_repurchased_products.products,
    data.data.popular_brands.brands,
  );

  

  return {
    props: { filteredData },
  };
}
