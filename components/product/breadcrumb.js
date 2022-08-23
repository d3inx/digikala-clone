import Link from "next/link";

const Breadcrumb = ({data}) => {
  return (
    <div>
      {
        data?.slice(0, data.length - 1).map((item , index) => {
          return (
            <Link href={item.url} key={item.title}>
              <a className="text-xs text-gray-400">
              {item.title}
              <span className="mx-3">{index !== data.length - 2 ? '/' : '' }</span>
            </a>
            </Link>
            )
          
        })
      }
    </div>
  )
}

export default Breadcrumb