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

export default function Home({ data }) {
  // eslint-disable-line

  return (
    <>
      <Header sliderItem={data.data.header_banners} />
      <div className="xl:container xl:mx-auto px-4 xl:px-28">
        <DeepLinks links={data.data.deep_links} />
        <IncredibleProducts
          suggestedProducts={data.data.incredible_products.products}
          image={
            "https://www.digikala.com/statics/img/png/specialCarousel/General.png"
          }
          color={"bg-rose-600"}
        />
        <FreshOffer offer={data.data.fresh_incredible_products} />
        <TopBanners topBanners={data.data.top_banners} />
        <MainCategories categories={data.data.main_categories.categories} />
        <MiddleBanners banners={data.data.middle_banners} />
        <RecommendationSubCategories
          categories={data.data.recommendation_sub_categories}
        />
        <PopularBrands brands={data.data.popular_brands.brands} />
        <MiddleBanners banners={data.data.middle_banners_third} />
        <DigiPlus product={data.data.digiplus.jet_delivery_products.products} />
        <BestSelling products={data.data.best_selling_products.products} />
        <SellingAndSalesProducts
          products={data.data.selling_and_sales_products.products}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://api.digikala.com/v1/").then((res) =>
    res.json()
  );

  return {
    props: { data },
  };
}
