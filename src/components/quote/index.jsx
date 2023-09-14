import Image from 'next/image'
import React from 'react'
import QuoteImage from "@/images/icons/quotes.png"

const Quote = ({ sm = false }) => {
    return (
        <section data-scroll data-scroll-speed="0.1" className='relative w-full max-w-screen-lg mx-auto px-5 lg:px-10 pt-5 mt-10 flex flex-col'>
            <div className='w-24'>
                <Image src={QuoteImage} />
            </div>
            <div className='w-full h-full'>
                <p className={`font-bold text-3xl lg:text-${sm ? 4 : 6}xl text-gray-700`}>Passion is the oxygen of the soul, the fuel that drives creativity and purpose. It's the fire within that turns dreams into reality.</p>
                <p className='pl-3 py-2 border-l-2 font-bold text-gray-600 mt-5'>Wolfgang Amadeus Mozart</p>


            </div>

        </section>
    )
}

export default Quote