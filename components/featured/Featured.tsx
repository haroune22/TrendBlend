import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-8'>
        <h1 className='lg:text-6xl sm:text-5xl max-sm:text-3xl'>
        <b className=''>Hey, Haroune Dev here!</b> Dsicover my stories & creative ideas.
        </h1>
        <div  className='flex mt-14 flex-wrap items-center gap-12'>
          <div className='flex flex-1 h-[500px] min-w-[300px] relative max-lg:mb-4'>
            <Image src="/p1.jpeg" alt='' className='object-cover' fill/>
          </div>
          <div className='flex flex-col gap-10 flex-1'>
            <h1 className='text-3xl'>
              Lorem ipsum dolor, sit amet consecteturora uam sequi nemo praesentium .
            </h1>
            <p className='text-soft-text font-light'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nam numquam deleniti suscipit pariatur unde labore, adipisci id. Commodi quis voluptates in deserunt expedita perferendis autem fuga laboriosam consectetur unde.
              Nisi fugiat, voluptata ratione.
            </p>
            <button className='py-4 bg-gray-500 text-white px-5 rounded-2xl border-none max-w-max'>Read More!</button>
          </div>
        </div>
    </div>
  )
}

export default Featured