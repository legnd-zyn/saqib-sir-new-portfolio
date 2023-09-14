import Image from 'next/image'
import React from 'react'

const Banner = ({ url }) => {
    return (
        <div className='relative w-full aspect-video overflow-hidden mt-5'>
            <Image src={url} fill className='object-cover' />
        </div>
    )
}

export default Banner