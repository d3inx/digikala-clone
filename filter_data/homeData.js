const homeData = (
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
  selling_and_sales_products
) =>  {
  return {
    header_banners: [
        ...header_banners?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
          };
        }),
      ],
      deep_links: [
        ...deep_links?.map((item) => {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.icon.webp_url[0] || item.icon.url[0],
          };
        }),
      ],
      incredible_products: [
        ...incredible_products?.map((item) => {
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
      ],
      fresh_incredible_products: [
        ...fresh_incredible_products?.slice(0, 3).map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url.uri,
            image: item.images.main.url[0],
            discountPercent: item.default_variant.price?.discount_percent,
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
      main_categories: [
        ...main_categories?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            image: item.logo?.webp_url[0] || item.logo?.url[0],
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
      middle_banners_third: [
        ...middle_banners_third?.map((item) => {
          return {
            id: item.id,
            image: item.image,
            title: item.title,
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
      digiplus: [
        ...digiplus?.map((item) => {
          return {
            id: item.id,
            title: item.title_fa,
            url: item.url?.uri,
            image: item.images.main?.url[0],
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
      selling_and_sales_products: [
        ...selling_and_sales_products?.map((item) => {
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

export default homeData;
