import { CategoryType } from "@/libs/types";
import Image from "next/image"
import Link from "next/link"

const getData = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`,{
    cache:"no-store"
  });
  if(!res.ok) {
    throw new Error("Failes")
  }
  return res.json()
}
const CategoryList = async() => {

  const data = await getData()

  return (
    <div className="">
        <h1 className="my-12 text-3xl font-semibold"> Popular Categories </h1>
        <div className="flex flex-wrap justify-between gap-4">
          {data?.map((item : CategoryType)=>(
            <Link key={item.id} href={`/blog?cat=${item.title}`} className={`flex items-center gap-2.5 capitalize bg-[${item.color}] sm:w-[100%] md:w-[30%] xl:w-[15%] h-[80px] justify-center rounded-[10px]`}>
              <Image src={item.img}  alt="category" className="rounded-full object-cover" width={32} height={32} />
              {item.slug}
            </Link>
          ))}
        </div>
    </div>
  )
}

export default CategoryList