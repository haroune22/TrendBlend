'use client'
import React, { useEffect } from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineGoogle} from 'react-icons/ai'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
   
   const router = useRouter()
   const { status} = useSession()


   useEffect(()=>{
      const NavgateHome =()=>{
           if(status === "authenticated" as string){
            router.push("/")
           }
      }
      NavgateHome()
   },[status,router])
  return (
    <div className='flex flex-col my-16 items-center justify-center'>
        <div className="bg-gray-100 flex flex-col items-center justify-between shadow-xl py-20 px-6 md:px-16 lg:py-36 lg:px-48 gap-12 rounded-lg">
            <div onClick={()=>signIn("google")} className="p-5 text-xl rounded-md flex items-center gap-2 bg-[#ff5555] text-white font-bold cursor-pointer">
               <AiOutlineGoogle/> Sign In With Google
            </div>
            <div className="p-5  text-xl rounded-md flex items-center gap-2 bg-[#111] text-white font-bold cursor-pointer">
               <BsGithub /> Sign In With Github
            </div>
            <div className="p-5 text-xl rounded-md flex items-center gap-2 bg-[#087bea] text-white font-bold cursor-pointer">
               <BsFacebook/> Sign In With Facbook
            </div>
        </div>
    </div>
  )
}

export default LoginPage