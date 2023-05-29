const SearchData = (data) => {
  return {
    sortOptions:
      data?.sort_options != null || undefined ? data?.sort_options : null,
    products:
      data?.products != null || undefined
        ? [
            ...data?.products.map((item) => {
              return {
                id: item?.id,
                url: item?.url.uri,
                title: item?.title_fa,
                image: item?.images.main?.url[0],
                rating: item?.rating,
                status: item?.status,
                sellingPrice: item?.default_variant.price?.selling_price,
                discountPercent: item?.default_variant.price?.discount_percent,
                rrpPrice: item?.default_variant.price?.rrp_price,
              };
            }),
          ]
        : null,
    totalPages:
      data?.total_pages != null || undefined ? data?.total_pages : null,
  };
};

export default SearchData;
