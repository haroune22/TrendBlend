'use client'

import { useRouter } from "next/navigation"


const Pagination = ({page,hasPrev,hasNext}:{page:number,hasNext:boolean,hasPrev:boolean}) => {

  const router = useRouter()

  return (
    <div className="flex items-center justify-between">
      <button type="button" disabled={!hasPrev} onClick={()=>router.push(`?page=${page - 1}`)} className="p-4 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed ">
        Previous
      </button>
      <button type="button" disabled={!hasNext}  onClick={()=>router.push(`?page=${page + 1}`)} className="p-4 rounded-md bg-red-500  hover:bg-red-600 text-white font-semibold cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed ">
        Next
      </button>
    </div>
  )
}

export default Pagination