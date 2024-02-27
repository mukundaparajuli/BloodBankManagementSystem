import React from 'react'
import { accountIcon } from '../store/config'

const UserDetails = () => {
    return (
        <div className='border shadow-xl p-4 px-16 rounded-xl'>
            <div >
                <img src={accountIcon} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Mukunda Parajuli</h1>
                <h1 className='font-bold text-md italic'>mukundaparajuli@gmail.com</h1>
                <h1 className='font-bold text-md italic'>Age: 19</h1>
                <h1 className='font-bold text-md italic'>Location: Syangja</h1>
            </div>
        </div>
    )
}

export default UserDetails;