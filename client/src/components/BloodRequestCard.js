import React from 'react'

const BloodRequestCard = (props) => {
  const { bloodGroup, location, preferredAge } = props;
  return (
    <div>
      <div className='h-52 w-56 bg-slate-200 m-2 p-2'>
        <div>{bloodGroup}</div>
        <div>{location}</div>
        <div>{preferredAge}</div>
      </div>
    </div>
  )
}

export default BloodRequestCard