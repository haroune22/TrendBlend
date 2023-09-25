import Image from "next/image"
import Link from "next/link"

const footer = () => {
  return (
    <div className=" mt-8 py-5 lg:flex items-center justify-between text-softTextColor">
  <div className="flex flex-1 flex-col gap-4">
    <div className=" flex items-center gap-4">
      <Image src="/harouneblog-logo-removebg-preview.png" alt="lama blog" width={40} height={40} className="object-cover" />
      <h1 className=" text-2xl">HaronBlog</h1>
    </div>
    <p className="desc font-light">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
      necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
      porro sequi, totam minima consequuntur, aspernatur deleniti vero
      repellendus dorales.
    </p>
    <div className="my-3 flex gap-4">
      <Image src="/facebook.png" alt="" width={24} height={24} className="object-cover"  />
      <Image src="/instagram.png" alt="" width={24} height={24} className="object-cover" />
      <Image src="/tiktok.png" alt="" width={24} height={24} className="object-cover"  />
      <Image src="/youtube.png" alt="" width={24} height={24} className="object-cover"  />
    </div>
  </div>
  <div className="flex flex-1 flex-row lg:justify-end gap-10">
    <div className="flex flex-col">
      <span className="mb-2 font-bold">Links</span>
      <Link href="/">Homepage</Link> 
      <Link href="/">Blog</Link> 
      <Link href="/">About</Link> 
      <Link href="/">Contact</Link> 
    </div>
    <div className="flex flex-col">
      <span className="mb-2 font-bold">Tags</span>
      <Link href="/">Style</Link> 
      <Link href="/">Fashion</Link> 
      <Link href="/">Coding</Link> 
      <Link href="/">Travel</Link> 
    </div>
    <div className="flex flex-col">
      <span className="mb-2 font-bold">Social</span>
      <Link href="/">Facebook</Link> 
      <Link href="/">Instagram</Link> 
      <Link href="/">Tiktok</Link> 
      <Link href="/">Youtube</Link> 
    </div>
  </div>
</div>

  )
}

export default footer