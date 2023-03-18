const productData = (
  breadcrumb,
  images,
  title_fa,
  title_en,
  rating,
  suggestion,
  colors,
  review,
  content_description,
  digiplus,
  default_variant,
  status,
  sellers,
  related_products,
  expert_reviews_description,
  expert_reviews_review_sections,
  specifications_attributes,
  last_comments
) => {
  return {
    breadcrumb: [
      ...breadcrumb?.map((item) => {
        return {
          title: item.title,
          url: item.url.uri,
        };
      }),
    ],
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
      colors: [
        ...colors?.map((item) => {
          return {
            id: item.id,
            color: item.title,
            hexCode: item.hex_code,
          };
        }),
      ],
      review: [
        ...review?.map((item) => {
          return {
            title: item.title,
            values: item.values
          };
        }),
      ],
      contentDescription: content_description,
      digiplus
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
    sellers: [
      ...sellers?.slice(0, 3).map((item) => {
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
    ],
    recommendationProduct: [
      ...related_products?.map((item) => {
        return {
          id: item.id,
          url: item.url?.uri,
          image: item?.images.main.url[0],
          title: item?.title_fa,
          price: item.default_variant.price?.selling_price,
        };
      }),
    ],
    introduction: expert_reviews_description,
    review: expert_reviews_review_sections,
    specifications: specifications_attributes,
    lastComments: [
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
    ],
  };
};

export default productData;
