import React from 'react'
import WebDev from "@/images/icons/web-programming.png"
import Image from 'next/image'
import ClientTiltComponent from './ClientTiltCompunent'

const Card = ({ heading, description,img }) => {
    return (
        <ClientTiltComponent>

            <div className='h-full w-full max-w-[400px] lg:max-w-[350px] bg-white p-10 rounded-md flex flex-col gap-5 card relative shadow-lg'>
                <div>
                    <Image src={img} className='w-24' />
                </div>
                <div>
                    <p className='font-bold text-3xl text-gray-800'>{heading}</p>
                    <p className='text-gray-700 font-medium'>{description}</p>
                </div>
                <div className='bg-overlay'></div>
            </div>
        </ClientTiltComponent>
    )
}

export default Card