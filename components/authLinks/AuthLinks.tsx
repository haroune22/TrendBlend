"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

import { useState } from "react"

const AuthLinks = () => {

    const [open,setOpen]=useState(false)
    const { status} = useSession()
    
  return (
    <>
            {status === 'unauthenticated' as string ? 
            ( 
                <Link href="/login" className="max-sm:hidden flex"> Login</Link>
            ) :
            (
                <>
                <Link href="/write" className="max-sm:hidden flex">Write</Link>
                <span className="max-sm:hidden flex cursor-pointer" onClick={()=>signOut()}>Logout</span>
                </>
            )
        }
        <div className="w-5 h-4 sm:hidden flex flex-col justify-between cursor-pointer" onClick={()=>setOpen(!open)}>
            <div className="w-full h-[2px] dark:bg-white bg-black"></div>
            <div className="w-full h-[2px] dark:bg-white bg-black"></div>
            <div className="w-full h-[2px] dark:bg-white bg-black"></div>
        </div>
        {open && (
            <div className="absolute top-[100px] bg-gray-300 dark:bg-gray-500 left-0 w-full flex flex-col items-center justify-center gap-20 text-3xl" style={{ height: 'calc(100vh - 100px)', zIndex:"999" }}>
                <Link className='' href="/"> Home </Link>
                <Link className='' href="/contact"> Contact </Link>
                <Link className='' href="/about"> About </Link>
                {status === 'unauthenticated' as string ? 
                    ( 
                        <Link href="/login"> Login</Link>
                    ) :
                    (
                        <>
                        <Link href="/write"></Link>
                        <span>Logout</span>
                        </>
                    )
                }
            </div>
        )}
    </>
      )
}

export default AuthLinks