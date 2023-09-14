import React from 'react'

const Header = ({ title, description }) => {
    return (
        <header className='text-center'>
            <h1 className='font-black text-5xl lg:text-6xl text-gray-800'>{title}</h1>
            <p className='text-2xl text-gray-600 px-5 mt-3'>{description}</p>
        </header>
    )
}

export default Header