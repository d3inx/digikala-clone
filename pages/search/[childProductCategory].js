import Search from ".";
import SearchData from "../../filter_data/searchData";

const ChildProductCategory = ({ filteredData, query }) => {
  return <Search filteredData={filteredData} query={query} />;
};

export default ChildProductCategory;

export async function getServerSideProps({ params, query }) {
  const fetchQuery = Object.keys(query)
    .map((item, index) => {
      return `${item}=${query[item]}`;
    })
    .join("&");
  const res = await fetch(
    `https://api.digikala.com/v1/categories/${params.childProductCategory.substring(
      9
    )}/search/?${fetchQuery}`
  );
  const data = await res.json();

  if (data.status === 404) {
    return {
      notFound: true,
    };
  }

  const filteredData = SearchData(
    data.data.sort_options,
    data.data.products,
    data.data.pager.total_pages,
  );

  return {
    props: { filteredData, query },
  };
}
