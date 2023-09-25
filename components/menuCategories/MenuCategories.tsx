import Link from "next/link"

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-blue-300 max-w-max">
      Style
    </Link>
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-red-300 max-w-max">
      Fashion
    </Link>
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-green-300 max-w-max">
      Food
    </Link>
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-orange-300 max-w-max">
      Culture
    </Link>
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-pink-300 max-w-max">
      Travel
    </Link>
    <Link href="/blog?cat=" className="text-[14px] py-2 px-4 rounded-xl text-white bg-red-300 max-w-max">
      Coding
    </Link>
  </div>
  )
}

export default MenuCategories