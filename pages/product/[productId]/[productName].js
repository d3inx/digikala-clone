import dynamic from "next/dynamic";
import { createContext } from "react";

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

export const ProductContext = createContext();

const Product = ({ filteredData }) => {
  return (
    <ProductContext.Provider value={filteredData}>
      <div className="xl:container xl:mx-auto px-4 mt-4">
        <Breadcrumb />
        <div className="flex flex-wrap w-full my-8 pb-8 border-b-4 ">
          <ProductImage />
          <InfoSection />
          <Variant />
        </div>
        <Seller />
        <RecommendationsProduct />
        {filteredData.introduction !== "" && (
          <Introduction />
        )}
        {filteredData.review[0] !== undefined && (
          <Review  />
        )}
        {filteredData.specifications[0] !== undefined && (
          <Specifications  />
        )}
        {filteredData.lastComments[0] !== undefined && (
          <Comments data={filteredData.lastComments} />
        )}
      </div>
    </ProductContext.Provider>
  );
};

export default Product;

export async function getServerSideProps({ params }) {
  console.log(params.productId.substring(4));
  const data = await fetch(
    `https://api.digikala.com/v1/product/${params.productId.substring(4)}/`
  ).then((res) => res.json());
    console.log(data.data.product.breadcrumb);
  const filteredData = productData(
    data.data
  );

  return {
    props: { filteredData },
  };
}
