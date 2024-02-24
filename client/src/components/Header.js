import React from 'react'

const Header = () => {
    return (
        <div className="flex fixed w-[100%] bg-white top-0 justify-between h-20 shadow-2xl items-center">
            <div className='font-semibold text-3xl m-2 p-2'>Logo</div>
            <div className='font-bold text-lg m-2 p-2'>Menu</div>
        </div>
    )
}

export default Header