import BestSelling from "../../components/home/bestSelling";
import IncredibleProducts from "../../components/home/incredibleProducts";
import MainCategories from "../../components/home/mainCategories";
import MiddleBanners from "../../components/home/middleBanners";
import PopularBrands from "../../components/home/popularBrands";
import RecommendationSubCategories from "../../components/home/recommendationSubCategories";
import SellingAndSalesProducts from "../../components/home/sellingAndSalesProducts";
import TopBanners from "../../components/home/topBanners";
import Header from "./../../components/home/header";

const categoryPage = ({ data }) => {
  console.log(data);

  return (
    <div className="xl:container xl:mx-auto px-4 xl:px-28">
        <Header sliderItem={data.data.slider_banners} />
        <IncredibleProducts
          suggestedProducts={data.data.incredible_offers.products}
          image={
            "https://www.digikala.com/statics/img/png/specialCarousel/Electronics.png"
          }
          color={"bg-indigo-600"}
        />
        <MainCategories categories={data.data.sub_categories} childCategory={true} />
        <MiddleBanners banners={data.data.middle_banners} />
        <RecommendationSubCategories categories={data.data.recommendation_sub_categories} />
        <TopBanners topBanners={data.data.top_banners} />
        <BestSelling products={data.data.best_selling_products.products} />
        <SellingAndSalesProducts products={data.data.top_repurchased_products.products} />
        <PopularBrands brands={data.data.popular_brands.brands} />
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

  return {
    props: { data },
  };
}
