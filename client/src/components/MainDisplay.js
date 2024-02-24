import React from 'react'
import Categories from './Categories'
import BloodRequestCards from './BloodRequestCards'

const MainDisplay = () => {
    return (
        <div className='static flex justify-between mt-24' >
            <div className='h-full'>
                <Categories />
            </div>
            <div className='h-full'>
                <BloodRequestCards />
            </div>
        </div>
    )
}

export default MainDisplay