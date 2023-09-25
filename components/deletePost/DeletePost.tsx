"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdDelete } from 'react-icons/md'

const deletePost = async ({email,slug}:{slug:any,email:any}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`
    ,{
      method:"DELETE",
      body:JSON.stringify({
        email:email,

      })
    });
    if(!res.ok) {
      throw new Error("Failes to delete")
    } 
  }

const DeletePost = ({email,slug}:{slug:any,email:any}) => {

    const {data} =useSession()
    const router = useRouter()

    const handleDelete = async () => {

        try {
          await deletePost({ email, slug });
          router.push('/');

        } catch (error) {
          console.error(error);
        }
      };
  return (
    <>
    {email === data?.user?.email && 
    <div onClick={handleDelete} className='w-[50px] h-[50px] text-red-600 text-4xl pt-1 cursor-pointer'>
    <MdDelete />
    </div>}
    </>
  )
}

export default DeletePost