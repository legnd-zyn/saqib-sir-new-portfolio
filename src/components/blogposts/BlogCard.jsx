import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ url }) => {

    return (
        <article className='relative flex flex-col max-w-[320px] lg:flex-row lg:max-w-none w-full gap-5 bg-zinc-200 hover:shadow-lg group overflow-hidden rounded-sm'>
            <div className='relative w-full lg:w-2/5 aspect-video overflow-hidden'>
                <Image src={url} fill className='h-full w-full relative object-cover group-hover:scale-105 transition-all' />
            </div>
            <div className='w-full flex-grow flex flex-col gap-4 p-5 lg:px-2 lg:py-5 lg:pr-5'>
                <header>
                    <Link href={"/article/getting-Started-with-solid-js"}>
                        <h1 className='text-2xl font-bold text-gray-800 line-clamp-1'>Getting Started with solid js</h1>
                    </Link>
                    <div className='mt-1'>
                        <span className='p-2 bg-zinc-300 font-bold'>November 1, 2023</span>
                    </div>
                </header>
                <div>
                    <p className='text-gray-700 line-clamp-4'>SolidJS made "Signals" one of the most important frontend JS framework trends you can find right now! Time to learn how to build web apps with SolidJS from the ground up!</p>
                </div>
            </div>
        </article >
    )
}

export default BlogCard