import Image from "next/image"
import Link from "next/link"
import MenuPosts from "../MenuPosts/MenuPosts"
import MenuCategories from "../menuCategories/MenuCategories"

const Menu = () => {
  return (
    <div className="flex flex-col mt-12" style={{flex:"2"}}>
      <h2 className="text-gray-500 text-base">{"What's hot"}</h2>
      <h1 className="font-bold text-xl"> Most Popular </h1>
      <MenuPosts withImage={false}/>
      <h2 className="text-gray-500 text-base ">Discover by topic</h2>
      <h1 className="font-bold text-xl mb-6"> Categories</h1>
      <MenuCategories/>
      <h2 className="text-gray-500 text-base">Chosen By The Editor</h2>
      <h1 className="font-bold text-xl"> Editors Pick</h1>
   <MenuPosts withImage={true} />
    </div> 
  )
}

export default Menu