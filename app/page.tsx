import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import { searchParams } from "@/libs/types";



export default async function Home({searchParams}: searchParams) {
  const Page = parseInt(searchParams.page ) || 1 

  return (
    <div className="">
         <Featured/>
         <CategoryList/>
         <div className="lg:flex flex-wrap gap-12">
           <CardList page={Page} />
           <Menu/>
         </div>
    </div>
  )
}
