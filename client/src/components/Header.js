import React from 'react'
import { accountIcon } from '../store/config'

const Header = ({showDetail, setShowDetail }) => {
    return (

        <div className="flex fixed w-[100%] bg-white top-0 justify-between h-20 shadow-2xl items-center">
            <div className='font-semibold text-3xl m-2 p-2'>Logo</div>
            <div className='font-bold text-lg m-2 p-2'>
                <img src={accountIcon} alt="" className='h-14' onClick={() => { setShowDetail(!showDetail) }} />
            </div>
        </div>

    )
}

export default Header