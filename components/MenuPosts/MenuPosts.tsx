import Image from "next/image";
import Link from "next/link";

type Props = {
  withImage: boolean;
}


const MenuPosts = ({withImage}:Props) => {
  return (
    <div className="flex flex-col gap-8 mt-9 mb-10">
    <Link href="/" className="flex items-center gap-4">
      {withImage &&   <div className="flex flex-1 relative aspect-square ">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-full "/>
        </div>}
        <div className="flex flex-col gap-0.5" style={{flex:"4"}}>
          <span className="text-[14px] py-0.5 px-2 rounded-xl text-white bg-red-300 max-w-max">
            Travel
          </span>
            <h3 className="text-[13px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet cons
            </h3>
            <div className="text-sm">
              <span className="text-xs"> John Doe </span>
              <span className="text-gray-400"> -10.03.12 </span>
            </div>
        </div>
    </Link>
    <Link href="/" className="flex items-center gap-4">
      {withImage &&   <div className="flex flex-1 relative aspect-square ">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-full"/>
        </div>}
        <div className="flex flex-col gap-0.5" style={{flex:"4"}}>
          <span className="text-[14px] py-0.5 px-2 rounded-xl text-white bg-green-300 max-w-max">
            Travel
          </span>
            <h3 className="text-[13px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet cons
            </h3>
            <div className="text-sm">
              <span className="text-xs"> John Doe </span>
              <span className="text-gray-400"> -10.03.12 </span>
            </div>
        </div>
    </Link>
    <Link href="/" className="flex items-center gap-4">
      {withImage &&   <div className="flex flex-1 relative aspect-square ">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-full"/>
        </div>}
        <div className="flex flex-col gap-0.5" style={{flex:"4"}}>
          <span className="text-[14px] py-0.5 px-2 rounded-xl text-white bg-yellow-300 max-w-max">
            Travel
          </span>
            <h3 className="text-[13px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet cons
            </h3>
            <div className="text-sm">
              <span className="text-xs"> John Doe </span>
              <span className="text-gray-400"> -10.03.12 </span>
            </div>
        </div>
    </Link>
    <Link href="/" className="flex items-center gap-4">
      {withImage &&   <div className="flex flex-1 relative aspect-square ">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-full"/>
        </div>}
        <div className="flex flex-col gap-0.5" style={{flex:"4"}}>
          <span className="text-[14px] py-0.5 px-2 rounded-xl text-white bg-blue-300 max-w-max">
            Travel
          </span>
            <h3 className="text-[13px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet cons
            </h3>
            <div className="text-sm">
              <span className="text-xs"> John Doe </span>
              <span className="text-gray-400"> -10.03.12 </span>
            </div>
        </div>
    </Link>
  </div>
    
  )
}

export default MenuPosts