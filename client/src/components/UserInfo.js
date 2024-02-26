import React, { useEffect, useState } from 'react'

const UserInfo = (token) => {
    const [userInfo, setUserInfo] = useState([])
    const handleGetUserInfo = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/getRequests", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const userInfo = await response.json();
                console.log(userInfo);
                setUserInfo(userInfo)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("Token");
        handleGetUserInfo(token);
    }, []);

    return (
        <div>
            <div>{userInfo.fullName}</div>
            <div></div>
        </div>
    )
}

export default UserInfo