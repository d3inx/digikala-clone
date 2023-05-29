const productData = (data) => {
  const { product } = data;
  const {
    breadcrumb,
    images,
    title_fa,
    title_en,
    rating,
    suggestion,
    colors,
    review,
    category,
    digiplus,
    default_variant,
    status,
    variants,
    expert_reviews,
    last_comments,
  } = product;

  return {
    breadcrumb: 

      breadcrumb != null || undefined
      ? [
        ...breadcrumb?.map((item) => {
          return {
            title: item.title,
            url: item.url.uri,
          };
        }),
      ]
      : null,
    images: {
      mainImage: images.main.url[0],
      list: images.list.map((item) => {
        return {
          url: item.url[0],
        };
      }),
    },
    infoSection: {
      title_fa: title_fa,
      title_en: title_en,
      rating: rating,
      suggestion: suggestion,
      colors:
        colors != null || undefined 
          ? [
              ...colors?.map((item) => {
                return {
                  id: item.id,
                  color: item.title,
                  hexCode: item.hex_code,
                };
              }),
          ]
          : null,

      review:
        review.attributes != null || undefined
          ? [
              ...review.attributes?.map((item) => {
                return {
                  title: item.title,
                  values: item.values,
                };
              }),
            ]
          : null,
      contentDescription: category.content_description,
      digiplus: digiplus.services,
    },
    variant: {
      defaultVariant: {
        sellerName: default_variant.seller?.title,
        rate: default_variant.rate,
        warranty: default_variant.warranty?.title_fa,
        shipmentMethodsDescription:
          default_variant.shipment_methods?.description,
        shipmentMethodsProvidersTitle:
          default_variant.shipment_methods?.providers[0].title,
        digiclubPoint: default_variant.digiclub?.point,
        discountPercent: default_variant.price?.discount_percent,
        rrpPrice: default_variant.price?.rrp_price,
        sellingPrice: default_variant.price?.selling_price,
      },
      status: status,
    },
    sellers:
      variants != null || undefined
        ? [
            ...variants?.slice(0, 3).map((item) => {
              return {
                id: item.id,
                sellerName: item.seller.title,
                shipmentMethodsProviders: [
                  ...item.shipment_methods.providers.map((item) => {
                    return {
                      title: item.title,
                    };
                  }),
                ],
                warranty: item.warranty?.title_fa,
                discountPercent: item.price?.discount_percent,
                rrpPrice: item.price?.rrp_price,
                sellingPrice: item.price?.selling_price,
              };
            }),
          ]
        : null,
    recommendationProduct:
      data.recommendations.related_products.products != null || undefined
        ? [
            ...data.recommendations.related_products.products?.map((item) => {
              return {
                id: item.id,
                url: item.url?.uri,
                image: item?.images.main.url[0],
                title: item?.title_fa,
                price: item.default_variant.price?.selling_price,
              };
            }),
        ]
        : null,

    introduction: expert_reviews.description,
    review: expert_reviews.review_sections,
    specifications: data.product.specifications[0].attributes,
    lastComments:

      last_comments != null || undefined
      ? [
        ...last_comments?.map((item) => {
          return {
            id: item.id,
            rate: item?.rate,
            title: item?.title,
            userName: item?.user_name,
            createdAt: item?.created_at,
            body: item?.body,
            advantages: item?.advantages,
            disadvantages: item?.disadvantages,
            likes: item.reactions?.likes,
            dislikes: item.reactions?.dislikes,
          };
        }),
      ]
      : null,
  };
};

export default productData;
