import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import { searchParams } from '@/libs/types'
import React from 'react'

const BlogPage = ({searchParams}: searchParams) => {

  const Page = parseInt(searchParams.page ) || 1 
  const { cat } = searchParams
  return (
    <div className=''>
        <h1 className='text-3xl bg-orange-600 py-1.5 font-semibold px-3 rounded-lg text-center uppercase'> {cat} Blog </h1>
        <div className="lg:flex flex-wrap gap-12">
           <CardList page={Page} cat={cat} />
           <Menu/>
         </div>
    </div>
  )
}

export default BlogPage