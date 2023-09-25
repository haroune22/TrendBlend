
import Pagination from "../pagination/Pagination"
import Card from "../Card/Card"
import { PostType } from "@/libs/types";

const getData = async (page:number,cat?:string | '') => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts?page=${page}&cat=${cat || ""}`,{
    cache:"no-store"
  });
  if(!res.ok) {
    throw new Error("Failes")
  }
  return res.json()
}

const CardList = async({page,cat}:{page:number,cat?: string |""}) => {

  const POST_PER_PAGE = 3
  const {posts,count} = await getData(page,cat)

  const hasNext = POST_PER_PAGE * (page - 1 ) + POST_PER_PAGE > count ? false : true ; 
  const hasPrev = POST_PER_PAGE * (page - 1 ) + POST_PER_PAGE < count ? false : true ;

  return (
    <div className="flex flex-col" style={{flex:"5"}}>
      <h1 className="my-12 font-semibold font-sans">Recent Posts:</h1>
      <div className="flex flex-col">
       {posts?.map((item:PostType)=>(
         <Card key={item.id} item={item}/>
       ))}      
      </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList