import dynamic from "next/dynamic";

import Breadcrumb from "../../../components/product/breadcrumb";
import InfoSection from "../../../components/product/infoSection";
import ProductImage from "../../../components/product/productImage";
import RecommendationsProduct from "../../../components/product/recommendationsProduct";
import Seller from "../../../components/product/seller";
import Variant from "../../../components/product/variant";
import productData from "../../../filter_data/productData";

const Introduction = dynamic(() =>
  import("../../../components/product/introduction")
);
const Review = dynamic(() => import("../../../components/product/review"));

const Specifications = dynamic(() =>
  import("../../../components/product/specifications")
);

const Comments = dynamic(() => import("../../../components/product/comments"));

const Product = ({ filteredData }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 mt-4">
      <Breadcrumb data={filteredData.breadcrumb} />
      <div className="flex flex-wrap w-full my-8 pb-8 border-b-4 ">
        <ProductImage images={filteredData.images} />
        <InfoSection
          title_fa={filteredData.infoSection.title_fa}
          title_en={filteredData.infoSection.title_en}
          rating={filteredData.infoSection.rating}
          suggestion={filteredData.infoSection.suggestion}
          colors={filteredData.infoSection.colors}
          review={filteredData.infoSection.review}
          content_description={filteredData.infoSection.contentDescription}
          digiplus={filteredData.infoSection.digiplus}
        />
        <Variant
          default_variant={filteredData.variant}
          status={filteredData.variant.status}
        />
      </div>
      <Seller sellers={filteredData.sellers} />
      <RecommendationsProduct
        product={filteredData.recommendationProduct}
      />
      {filteredData.introduction !== "" && (
        <Introduction data={filteredData.introduction} />
      )}
      {filteredData.review[0] !== undefined && (
        <Review data={filteredData.review} />
      )}
      {filteredData.specifications[0] !== undefined && (
        <Specifications
          attributes={filteredData.specifications}
        />
      )}
      {filteredData.lastComments[0] !== undefined && (
        <Comments data={filteredData.lastComments} />
      )}
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://api.digikala.com/v1/product/${params.productId.substring(4)}/`
  ).then((res) => res.json());

  const filteredData = productData(
    data.data.product.breadcrumb,
    data.data.product.images,
    data.data.product.title_fa,
    data.data.product.title_en,
    data.data.product.rating,
    data.data.product.suggestion,
    data.data.product.colors,
    data.data.product.review.attributes,
    data.data.product.category.content_description,
    data.data.product.digiplus.services,
    data.data.product.default_variant,
    data.data.product.status,
    data.data.product.variants,
    data.data.recommendations.related_products.products,
    data.data.product.expert_reviews.description,
    data.data.product.expert_reviews.review_sections,
    data.data.product.specifications[0].attributes,
    data.data.product.last_comments
  );

  return {
    props: { filteredData },
  };
}
