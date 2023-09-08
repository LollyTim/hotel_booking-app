import React from 'react'

const Nav = () => {
    return (
        <div>
            <div className=' select-none flex justify-between items-center h-24 max-w-5xl mx-auto px-4 first-letter font-outfit text-black'>
                <h1 className='w-full text-2xl pl-6 '>Plethora</h1>
                <ul className='flex'>
                    <li className='p-4'>Apartment</li>
                    <li className='p-4'>Location</li>
                    <li className='p-4 w-28 max-w-[112px] min-w-[112px]'>About Us</li>

                </ul>
            </div>
        </div>
    )
}

export default Nav
