import { PostType } from "@/libs/types"
import Image from "next/image"
import Link from "next/link"

const Card = ({key,item}: {key:string,item:PostType}) => {

  return (
    <div key={key} className="mb-12 lg:flex items-center gap-12">
          {item.img && 
          <div className="flex flex-1 h-[350px] relative">
            <Image src={item?.img} alt="post" fill className="object-cover"/>
          </div>
          }
          <div className="flex flex-1 flex-col gap-5">
            <div className="max-lg:mt-4">
              <span className="text-gray-500"> {item.createdAt.substring(0,10)} - </span>
              <span className="text-red-400 font-light"> {item.catSlug} </span>
            </div>
            <Link href={`/posts/${item.slug}`}>
            <h1 className="text-xl font-semibold">{item.title} </h1>
            </Link>
            <p dangerouslySetInnerHTML={{__html:item?.desc.substring(0,80)}} className="text-lg font-light text-soft-text"/>
               
              <Link className="border-b-2 max-w-max" href={`/posts/${item.slug}`}>Read More</Link>
          </div>
    </div>
  )
}

export default Card