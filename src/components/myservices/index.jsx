import React from 'react'
import Card from './card'

const MyServices = () => {
    return (
        <div className='w-full bg-zinc-100 pb-10 rounded-md'>

            <section className='relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col'>
                <div className='max-w-lg text-center'>
                    <p className='text-gray-700 text-2xl lg:text-3xl font-bold bottom-line relative'>My Services</p>
                    <p className='text-gray-800 text-4xl lg:text-6xl font-bold px-5'>What I do for My Customers</p>
                </div>
                <div className='flex flex-wrap gap-10 justify-center mt-5'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </div>
    )
}

export default MyServices