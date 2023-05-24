const SearchData = (data) => {
  return {
    sortOptions: data?.sort_options,
    products: [
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
    ],
    totalPages: data?.total_pages
  };
};

export default SearchData;
