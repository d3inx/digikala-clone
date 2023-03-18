const SearchData = (sort_options, products, total_pages) => {
  return {
    sortOptions: sort_options,
    products: [
      ...products.map((item) => {
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
    totalPages: total_pages
  };
};

export default SearchData;
