import React, { Suspense, useEffect, useState } from 'react'
import BloodRequestCard from './BloodRequestCard'
import Shimmer from './Shimmer'

const BloodRequestCards = () => {
  const [bloodRequests, setBloodRequests] = useState([])

  const handleGetData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/`,
        {
          method: "GET",
        });
      if (response.ok) {
        const bloodRequest = await response.json();
        console.log(bloodRequest)
        setBloodRequests(bloodRequest)
        console.log(bloodRequests)
      } else {
        const responseError = response.json();
        console.log(responseError.message)
      }

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <div className='flex justify-evenly flex-wrap max-h-[calc(100vh-20px)] overflow-y-auto'>
      {
        bloodRequests && bloodRequests.map((bloodReq) => (
          <Suspense fallback={<Shimmer />}>
            <BloodRequestCard {...bloodReq} key={bloodReq.id} />
          </Suspense>
        ))
      }
    </div>
  )
}

export default BloodRequestCards