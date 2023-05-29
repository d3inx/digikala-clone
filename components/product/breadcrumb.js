import Link from "next/link";
import { useContext } from "react";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

const Breadcrumb = () => {

  const data = useContext(ProductContext);
  const {breadcrumb} = data;

  return (
    <div>
      {
        breadcrumb?.slice(0, breadcrumb.length - 1).map((item , index) => {
          return (
            <Link href={item.url} key={item.title}>
              <a className="text-xs text-gray-400">
              {item.title}
              <span className="mx-3">{index !== breadcrumb.length - 2 ? '/' : '' }</span>
            </a>
            </Link>
            )
          
        })
      }
    </div>
  )
}

export default Breadcrumb