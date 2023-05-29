const ChildCategoryData = (data) => {
  return {
    slider_banners:
      data.slider_banners != null || undefined
        ? [
            ...data?.slider_banners.map((item) => {
              return {
                id: item.id,
                image: item.image,
                title: item.title,
              };
            }),
          ]
        : null,
    incredible_offers: 

    data.incredible_offers != null || undefined
        ? [
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
        ]
        : null,
    sub_categories: 

    data.sub_categories != null || undefined
      ? [
        ...data.sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item?.top_product_image,
            url: item.url?.uri,
          };
        }),
      ]
      : null,
    middle_banners: 

    data.middle_banners != null || undefined
      ? [
        ...data.middle_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ]
      : null,
    recommendation_sub_categories: 

    data.recommendation_sub_categories != null || undefined
      ? [
        ...data.recommendation_sub_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item?.top_product_image,
          };
        }),
      ]
      : null,
    top_banners: 

    data.top_banners != null || undefined
      ? [
        ...data.top_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ]
      : null,
    best_selling_products: 

    data.best_selling_products != null || undefined
      ? [
        ...data.best_selling_products.products?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
          };
        }),
      ]
      : null,
    popular_brands:

    data.popular_brands != null || undefined
      ? [
        ...data.popular_brands.brands?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item.logo?.url[0],
          };
        }),
      ]
      : null,

    top_repurchased_products: 

    data.top_repurchased_products != null || undefined
      ? [
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
      : null,
  };
};

export default ChildCategoryData;
