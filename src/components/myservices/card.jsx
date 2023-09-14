import React from 'react'
import WebDev from "@/images/icons/web-programming.png"
import Image from 'next/image'
import ClientTiltComponent from './ClientTiltCompunent'

const Card = () => {
    return (
        <ClientTiltComponent>

            <div className='w-full lg:max-w-[350px] bg-white p-10 rounded-md flex flex-col gap-5 card relative shadow-lg'>
                <div>
                    <Image src={WebDev} className='w-24' />
                </div>
                <div>
                    <p className='font-bold text-3xl text-gray-800'>Web Flow Developer</p>
                    <p className='text-gray-700 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates et numquam excepturi totam sunt enim non consequatur obcaecati maxime.</p>
                </div>
                <div className='bg-overlay'></div>
            </div>
        </ClientTiltComponent>
    )
}

export default Card