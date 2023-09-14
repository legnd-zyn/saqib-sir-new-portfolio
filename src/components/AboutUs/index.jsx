import React from 'react'
import Saqib from "@/images/saqib.jpg"
import Image from 'next/image'
import Quote from '../quote'

const AboutUs = () => {
    return (
        <div id='about-us' className='w-full bg-zinc-100 pb-10 rounded-md mt-16'>
            <section className='relative w-full max-w-screen-xl mx-auto px-5 lg:px-10 pt-5 mt-10 flex items-center flex-col'>
                <div className='max-w-lg text-center'>
                    <p className='text-gray-700 text-2xl lg:text-3xl font-bold bottom-line relative'>About Us</p>
                    <p className='text-gray-800 text-4xl lg:text-6xl font-bold px-5'>Who I am</p>
                </div>

                <div className='flex flex-col lg:flex-row w-full px-5 lg:px-10 mt-5 lg:mt-0 items-center'>
                    <div className='flex flex-col justify-evenly gap-5 max-w-sm'>
                        <div className='rounded-full overflow-hidden shadow-lg bg-slate-100 p-5'>
                            <Image src={Saqib} className='rounded-full' alt='profile-pic' />
                        </div>

                        <div className='text-gray-800 px-5 mt-3 flex flex-col gap-4 text-xl lg:text-2xl'>
                            <div>
                                <span className='font-bold'>Name :</span>
                                <span className=''> Saqib Chaudhary</span>
                            </div>
                            <div>
                                <span className='font-bold '>Age :</span>
                                <span className=''> 28-Years</span>
                            </div>
                            <div>
                                <span className='font-bold '>Email :</span>
                                <span className=''> saqibtts786@gmail.com</span>
                            </div>
                            <div>
                                <span className='font-bold '>Address :</span>
                                <span className=''> Kot-momin Punjab Pakistan</span>
                            </div>
                            <div>
                                <span className='font-bold '>Phone :</span>
                                <span className=''> +92-333-4169007</span>
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col mt-5 gap-5 w-full md:max-w-sm lg:max-w-none mx-auto'>
                        <div className='hidden lg:flex'>
                            <Quote sm={true} />
                        </div>
                        <div className='lg:mx-10 flex flex-col gap-3 w-full'>
                            <Skill title="Swift" percent={95} />
                            <Skill title="Cloud Computing" percent={85} />
                            <Skill title="DevOps" percent={90} />

                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center max-w-[200px] mt-10'>
                    <button className='flex-1 w-max px-6 lg:px-7 text-lg font-bold text-gray-700 py-1 pt-2 border-2 border-gray-400 rounded-md active:scale-95 transition-all animated-btn hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0'>Download CV</button>
                </div>
            </section>
        </div>
    )
}

const Skill = ({ title, percent }) => {
    return <div className='bg-zinc-200/50 rounded-md px-5 pt-5 pb-4 relative'>
        <div className='flex justify-between text-2xl font-bold text-gray-700 '>
            <p>{title}</p>
            <p>{percent}%</p>
        </div>

        <div className='w-full relative bg-white rounded-full overflow-hidden mt-2'>

            <div style={{ width: percent + "%" }} className={` h-2 bg-blue-800 rounded-full `}></div>
        </div>

    </div>
}

export default AboutUs