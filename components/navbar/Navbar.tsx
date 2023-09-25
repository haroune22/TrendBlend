import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-[100px]'>
        <div className='lg:flex hidden flex-1 gap-2.5'>
            <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
            <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
            <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
            <Image src="/youtube.png" alt='youtube' width={24} height={24}/>
        </div>
        <div className='flex flex-1 text-left lg:justify-center text-xl xl:text-2xl font-bold'>
            HaronBlog
        </div>
        <div className='flex flex-1 gap-2 xl:gap-3 text-base xl:text-lg justify-end sm:items-center'>
                <ThemeToggle/>
                <Link className='sm:flex hidden' href="/"> Home </Link>
                <Link className='sm:flex hidden'  href="/contact"> Contact </Link>
                <Link className='sm:flex hidden'  href="/about"> About </Link>
                <AuthLinks/>
            </div>
    </div>
  )
}

export default Navbar