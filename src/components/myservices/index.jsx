import React from 'react'
import Card from './card'
import SwiftImage from "@/images/icons/swift.png"
import AzureImage from "@/images/icons/azure.png"
import DevOpsImage from "@/images/icons/devops.png"

const MyServices = () => {
    return (
        <div className='w-full bg-zinc-100 pb-10 rounded-md'>

            <section className='relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col'>
                <div className='max-w-lg text-center'>
                    <p className='text-gray-700 text-2xl lg:text-3xl font-bold bottom-line relative'>My Services</p>
                    <p className='text-gray-800 text-4xl lg:text-6xl font-bold px-5'>What I do for My Customers?</p>
                </div>
                <div className='flex flex-wrap gap-10 justify-center mt-5'>
                    {[
                        {
                            heading: "Swift Code Expertise",
                            description: "I used my 10 years of experience in Swift coding to create innovative solutions for my clients. My precise coding skills helped them stay competitive in the fast-changing tech world."
                            , img: SwiftImage
                        },
                        {
                            heading: "Azure Cloud Solutions",
                            description: "I made cloud computing easy for my clients with my deep knowledge of Azure. I provided customized solutions that saved them time and money while setting them up for future success."
                            , img: AzureImage
                        },
                        {
                            heading: "Streamlined Development",
                            description: "I improved my clients' development processes by introducing efficient practices called DevOps. This made their software development smoother and more reliable, ensuring high-quality results for their customers."
                            , img: DevOpsImage
                        }
                    ].map((data) => (

                        <Card {...data} />
                    ))}

                </div>
            </section>
        </div>
    )
}

export default MyServices