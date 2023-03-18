const ChildCategoryData = (
  slider_banners,
  incredible_offers,
  sub_categories,
  middle_banners,
  recommendation_sub_categories,
  top_banners,
  best_selling_products,
  top_repurchased_products,
  popular_brands,
) =>  {
  return {
    slider_banners: [
        ...slider_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      incredible_offers: [
        ...incredible_offers?.map((item) => {
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
        ...sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item?.top_product_image,
            url: item.url?.uri,
          };
        }),
      ],
      middle_banners: [
        ...middle_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      recommendation_sub_categories: [
        ...recommendation_sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item?.top_product_image,
          };
        }),
      ],
      top_banners: [
        ...top_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      best_selling_products: [
        ...best_selling_products?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
          };
        }),
      ],
      popular_brands: [
        ...popular_brands?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item.logo?.url[0],
          };
        }),
      ],
      
      top_repurchased_products: [
        ...top_repurchased_products?.map((item) => {
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
