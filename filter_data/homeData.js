const homeData = (data) => {
  const {
    header_banners,
    deep_links,
    incredible_products,
    fresh_incredible_products,
    top_banners,
    main_categories,
    middle_banners,
    recommendation_sub_categories,
    middle_banners_third,
    popular_brands,
    digiplus,
    best_selling_products,
    selling_and_sales_products,
  } = data;
  return {
    header_banners:
      header_banners != null || undefined
        ? [
            ...header_banners?.map((item) => {
              return {
                id: item.id,
                image: item.image,
                title: item.title,
              };
            }),
          ]
        : null,

    deep_links:
      deep_links != null || undefined
        ? [
            ...deep_links?.map((item) => {
              return {
                id: item.id,
                title: item.title,
                description: item.description,
                image: item.icon.webp_url[0] || item.icon.url[0],
              };
            }),
          ]
        : null,

    incredible_products:
      incredible_products != null || undefined
        ? [
            ...incredible_products.products?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                url: item.url.uri,
                image: item.images.main.url[0],
                sellingPrice: item.default_variant.price?.selling_price,
                discountPercent: item.default_variant.price?.discount_percent,
                rrpPrice: item.default_variant.price?.rrp_price,
              };
            }),
          ]
        : null,
    fresh_incredible_products:
      fresh_incredible_products != null || undefined
        ? [
            ...fresh_incredible_products.products?.slice(0, 3).map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                url: item.url.uri,
                image: item.images.main.url[0],
                discountPercent: item.default_variant.price?.discount_percent,
              };
            }),
          ]
        : null,
    top_banners:
      top_banners != null || undefined
        ? [
            ...top_banners?.map((item) => {
              return {
                id: item.id,
                image: item.image,
                title: item.title,
              };
            }),
          ]
        : null,
    main_categories:
      main_categories.categories != null || undefined
        ? [
            ...main_categories.categories?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                image: item.logo?.webp_url[0] || item.logo?.url[0],
                url: item.url?.uri,
              };
            }),
          ]
        : null,
    middle_banners:
      middle_banners != null || undefined
        ? [
            ...middle_banners?.map((item) => {
              return {
                id: item.id,
                image: item.image,
                title: item.title,
              };
            }),
          ]
        : null,
    recommendation_sub_categories:
      recommendation_sub_categories != null || undefined
        ? [
            ...recommendation_sub_categories?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                url: item.url?.uri,
                image: item?.top_product_image,
              };
            }),
          ]
        : null,
    middle_banners_third:
      middle_banners_third != null || undefined
        ? [
            ...middle_banners_third?.map((item) => {
              return {
                id: item.id,
                image: item.image,
                title: item.title,
              };
            }),
          ]
        : null,
    popular_brands:
      popular_brands.brands != null || undefined
        ? [
            ...popular_brands.brands?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                image: item.logo?.url[0],
              };
            }),
          ]
        : null,
    digiplus:
      digiplus.jet_delivery_products != null || undefined
        ? [
            ...digiplus.jet_delivery_products.products?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                url: item.url?.uri,
                image: item.images.main?.url[0],
              };
            }),
          ]
        : null,
    best_selling_products:
      best_selling_products != null || undefined
        ? [
            ...best_selling_products.products?.map((item) => {
              return {
                id: item.id,
                title: item.title_fa,
                url: item.url?.uri,
                image: item.images.main?.url[0],
              };
            }),
          ]
        : null,
    selling_and_sales_products:
      selling_and_sales_products != null || undefined
        ? [
            ...selling_and_sales_products.products?.map((item) => {
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

export default homeData;
