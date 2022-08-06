import dynamic from "next/dynamic";

import Breadcrumb from "../../../components/product/breadcrumb";
import InfoSection from "../../../components/product/infoSection";
import ProductImage from "../../../components/product/productImage";
import RecommendationsProduct from "../../../components/product/recommendationsProduct";
import Seller from "../../../components/product/seller";
import Variant from "../../../components/product/variant";

const Introduction = dynamic(() =>
  import("../../../components/product/introduction")
);
const Review = dynamic(() => import("../../../components/product/review"));

const Specifications = dynamic(() =>
  import("../../../components/product/specifications")
);

const Comments = dynamic(() => import("../../../components/product/comments"));

const Product = ({ data }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 mt-4">
      <Breadcrumb data={data.data.product.breadcrumb} />
      <div className="flex flex-wrap w-full my-8 pb-8 border-b-4 ">
        <ProductImage images={data.data.product.images} />
        <InfoSection
          title_fa={data.data.product.title_fa}
          title_en={data.data.product.title_en}
          rating={data.data.product.rating}
          suggestion={data.data.product.suggestion}
          colors={data.data.product.colors}
          review={data.data.product.review.attributes}
          content_description={data.data.product.category.content_description}
          digiplus={data.data.product.digiplus.services}
        />
        <Variant
          default_variant={data.data.product.default_variant}
          status={data.data.product.status}
        />
      </div>
      <Seller sellers={data.data.product.variants} />
      <RecommendationsProduct
        product={data.data.recommendations.related_products.products}
      />
      {data.data.product.expert_reviews.description !== "" && (
        <Introduction data={data.data.product.expert_reviews.description} />
      )}
      {data.data.product.expert_reviews.review_sections[0] !== undefined && (
        <Review data={data.data.product.expert_reviews.review_sections} />
      )}
      {data.data.product.specifications[0].attributes[0] !== undefined && (
        <Specifications
          attributes={data.data.product.specifications[0].attributes}
        />
      )}
      {data.data.product.last_comments[0] !== undefined && (
        <Comments data={data.data.product.last_comments} />
      )}
    </div>
  );
};

export default Product;

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://api.digikala.com/v1/product/${params.productId.substring(4)}/`
  ).then((res) => res.json());

  return {
    props: { data },
  };
}
