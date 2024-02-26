import React from 'react'
import Categories from './Categories'
import BloodRequestCards from './BloodRequestCards'
import UserInfo from './UserInfo'

const MainDisplay = ({ showDetail }) => {
    return (
        <div className='flex justify-between mt-24 z-20 w-full' >
            <div className='h-full'>
                <Categories />
            </div>
            <div className='h-full fixed'>
                <BloodRequestCards />
            </div>
            {showDetail && <div className='fixed'><UserInfo /></div>
            }
        </div>
    )
}

export default MainDisplay