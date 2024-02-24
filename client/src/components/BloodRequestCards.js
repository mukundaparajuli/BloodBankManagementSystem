import React, { useEffect, useState } from 'react'
import BloodRequestCard from './BloodRequestCard'

const BloodRequestCards = () => {
  const [bloodRequests, setBloodRequests] = useState([])

  const handleGetData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/getRequests`,
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
    <div className='flex justify-evenly flex-wrap'>
      {
        bloodRequests && bloodRequests.map((bloodReq) => (
          <BloodRequestCard {...bloodReq} key={bloodReq.id} />
        ))
      }
    </div>
  )
}

export default BloodRequestCards