const ChildCategoryData = (
  data,
) =>  {
  return {
    slider_banners: [
        ...data?.slider_banners.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      incredible_offers: [
        ...data.incredible_offers.products?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
            sellingPrice: item.default_variant.price?.selling_price,
            discountPercent: item.default_variant.price?.discount_percent,
            rrpPrice: item.default_variant.price?.rrp_price,
          };
        }),
      ],
      sub_categories: [
        ...data.sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item?.top_product_image,
            url: item.url?.uri,
          };
        }),
      ],
      middle_banners: [
        ...data.middle_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      recommendation_sub_categories: [
        ...data.recommendation_sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item?.top_product_image,
          };
        }),
      ],
      top_banners: [
        ...data.top_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      best_selling_products: [
        ...data.best_selling_products.products?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
          };
        }),
      ],
      popular_brands: [
        ...data.popular_brands.brands?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item.logo?.url[0],
          };
        }),
      ],
      
      top_repurchased_products: [
        ...data.top_repurchased_products.products?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
            sellingPrice: item.default_variant.price?.selling_price,
            discountPercent: item.default_variant.price?.discount_percent,
            rrpPrice: item.default_variant.price?.rrp_price,
          };
        }),
      ]
  }
};

export default ChildCategoryData;
