import React from 'react'
import { bloodReqdLogo } from '../store/config';

const BloodRequestCard = (props) => {
  const { bloodGroup, location, preferredAge } = props;
  return (
    <div className='flex justify-evenly items-center rounded-xl h-40 bg-white shadow-xl m-2 p-2'>
      <div className='h-40 w-36 m-2'>
        <img src={bloodReqdLogo} alt='' className='h-40' />
      </div>
      <div className='h-full w-36 m-2'>
        <div className='font-bold text-lg'>{bloodGroup}</div>
        <div className='font-semibold text-sm italic'>Location: {location}</div>
        <div className='font-semibold text-sm italic'>Preferred Age: {preferredAge}</div>
        <button className='font-bold text-md text-white bg-green-500 w-full py-1 my-2 rounded-md'>Confirm</button>
      </div>
    </div>
  )
}

export default BloodRequestCard