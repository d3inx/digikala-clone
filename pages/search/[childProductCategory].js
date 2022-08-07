import Search from ".";

const ChildProductCategory = ({ data, query }) => {
  return <Search result={data} query={query} />;
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

  return {
    props: { data, query },
  };
}
