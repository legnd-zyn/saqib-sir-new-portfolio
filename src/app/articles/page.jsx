import BlogCard from '@/components/blogposts/BlogCard'
import Image from 'next/image'
import React from 'react'
import Search from "@/images/icons/search.png"

const Articles = () => {
    return (
        <main className='relative w-full max-w-screen-lg mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col py-10'>
            <header>

                <h1 className='text-4xl font-bold text-gray-700 text-center uppercase'>Experience Excellence with us</h1>
                <p className='text-2xl  text-gray-600 text-center'>With our skillful services</p>
            </header>
            <div className='w-full mt-5'>
                <div className='max-w-md mx-auto border-2 flex gap-2 relative'>
                    <input type='search' placeholder='Fond a article' className='p-2 outline-none w-full max-w-md  flex-grow ' />
                    <button className='active:scale-95 px-2' >

                        <Image src={Search} alt='search button' className=' w-max pl-2' />
                    </button>
                </div>
            </div>
            <section className='flex flex-wrap gap-5 w-full mx-auto justify-center max-w-4xl mt-10'>
                <BlogCard url={"https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"} />
                <BlogCard url={"https://images.unsplash.com/photo-1595835018349-198460e1d309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80s"} />
                <BlogCard url={"https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1542&q=80"} />
                <BlogCard url={"https://images.unsplash.com/photo-1595835018349-198460e1d309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80s"} />
            </section>
        </main>
    )
}

export default Articles