import React from 'react'
import Categories from './Categories'
import BloodRequestCards from './BloodRequestCards'
import UserInfo from './UserInfo'

const MainDisplay = ({ showDetail }) => {
    return (
        <div className='flex justify-between mt-24 z-20 w-full' >
          {FontFaceSetLoadEvent &&  <div className='h-full'>
                <Categories />
            </div>}
            <div className='h-full'>
                <BloodRequestCards />
            </div>
            {showDetail &&
                <div className='absolute right-0 max-h-[calc(100vh-20px)]'>
                    <UserInfo />
                </div>
            }
        </div>
    )
}

export default MainDisplay