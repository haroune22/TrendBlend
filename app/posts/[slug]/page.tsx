import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/Comments'
import DeletePost from '@/components/deletePost/DeletePost'
import Image from 'next/image'

import React from 'react'


const getData = async (slug:string) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`,{
      cache:"no-store"
    });
    if(!res.ok) {
      throw new Error("Failes")
    }
    return res.json()
  }


const SinglePage = async ({params}:{params: any}) => {

    const { slug }  = params 
    const data = await getData(slug)

  return (

    <div className=''>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex md:flex-1 flex-col items-start gap-16 justify-between">
                <h1 className='md:text-4xl lg:text-5xl text-3xl font-semibold'> {data?.title} </h1>
                <div className="flex gap-2">
                   {data?.user?.image &&
                        <div className="w-12 h-12 relative">
                            <Image src={data?.user?.image} alt='user' fill className='rounded-full'/>
                        </div>
                    }
                <div className="flex flex-col gap-2">
                    <span>{data?.user?.name} </span>
                    <span className='font-light text-gray-400'> {data?.createdAt?.substring(0,10)}</span>
                </div>
                <DeletePost slug={data?.slug} email={data?.user?.email}/>
             </div>
            </div>
            {data?.img && 
            <div className="flex md:flex-1 h-[350px] min-w-[320px] relative">
                <Image src={data?.img} alt='' fill className='object-cover'/>
            </div>
            }
        </div>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex flex-col  mt-12" style={{flex:"5"}}>
                    <div className=""dangerouslySetInnerHTML={{__html:data?.desc}}/>

                    <div className="mt-12">
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage