import React, { useEffect, useState } from 'react'
import BloodRequestCard from './BloodRequestCard';

const UserInfo = () => {
    const [userRequests, setUserRequests] = useState([])
    const handleGetUserRequests = async (token) => {
        try {
            const response = await fetch("http://localhost:5000/api/user/getRequests", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const userRequests = await response.json();
                console.log(userRequests);
                setUserRequests(userRequests)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("Token");
        console.log(token);
        token && handleGetUserRequests(token);
    }, []);

    return (
        <div className='w-[50vw] overflow-y-auto'>
            <div className='userInfo'></div>
            <div className='usersRequests flex justify-evenly w-full flex-wrap'>
                {userRequests.map((item) => (
                    <BloodRequestCard {...item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default UserInfo;