import Image from 'next/image'
import React from 'react'
import SaqibPic from "@/images/saqib.jpg"
import dotElement from "@/images/elements/dots.png"
import Link from 'next/link'


const Header = () => {
    return (
        <header className='relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 py-10 grid lg:grid-cols-2'>
            <div className='flex-1 flex flex-col items-center justify-center  text-center lg:items-start lg:text-left max-w-md gap-3 mx-auto lg:mx-0'>
                <p className='text-4xl lg:text-5xl stroke-text'>HELLOW</p>
                <p className='text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-800'>I AM SAQIB</p>
                <p className='text-2xl lg:text-3xl font-bold text-gray-600'>Cloud Architect</p>
                <p className='text-base lg:text-lg text-gray-600'>From Swift to Azure Skies, a Journey Through a Decade of Software Engineering Mastery.</p>
                <div className='flex flex-wrap gap-5 w-full lg:max-w-[600px]'>
                    <Link href={"#contact-us"}>
                        <button className='flex-1 w-max px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0'>Hire Me</button>
                    </Link>
                    <Link href={"#about-us"}>
                        <button className='flex-1 w-max px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0'>Know More</button>
                    </Link>
                </div>
            </div>
            <div className='relative mt-10 lg:mt-0'>
                <div className='z-10 flex-1 max-w-md rounded-full overflow-hidden p-8 bg-slate-100 shadow-2xl mx-auto relative'>
                    <div className='max-w-2xl rounded-full overflow-hidden shadow-xl border-2 bg-gray-200/50' >
                        <Image src={SaqibPic} alt='profile pic' />
                    </div>
                </div>
                <Image src={dotElement} className='absolute left-1/3 opacity-50 -top-10 lg:-top-28 scale-[0.5]' />
                <Image src={dotElement} className='absolute -left-1/2 lg:-left-[40%] opacity-50 bottom-0 scale-[0.5] rotate-90' />
            </div>
        </header>
    )
}

export default Header