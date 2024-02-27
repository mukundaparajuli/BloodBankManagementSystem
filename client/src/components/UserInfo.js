import React, { useEffect, useState } from 'react'
import BloodRequestCard from './BloodRequestCard';
import UserDetails from './UserDetails';

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
    const getUserInfo = async (token) => {
        const response = await fetch("http://localhost:5000/api/getUserInfo", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const userInfo = await response.json();
            console.log(userInfo);
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("Token");
        token && handleGetUserRequests(token);
        token && getUserInfo(token);
    }, []);

    return (
        <div className='w-[35vw] max-h-[calc(100vh-20px)] overflow-y-auto bg-white rounded-lg border-2 shadow-xl'>
            <div className='flex justify-center items-center p-4 '>
                <UserDetails/>
            </div>
            <div className='usersRequests flex justify-evenly w-full flex-wrap'>
                {userRequests.map((item) => (
                    <BloodRequestCard {...item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default UserInfo;