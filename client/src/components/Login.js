import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    {
      "email": "",
      "password": ""
    }
  );

  const handleGetData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }
  const handleLogin = async () => {
    // e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        const accessToken = jsonResponse.accessToken;
        localStorage.setItem("Token", accessToken);
        navigate("/dashboard")
      }
    } catch (error) {
      console.log("error occured: ", error)
    }

  }

  return (

    <div className='flex justify-center items-center h-[100vh]'>
      <div className='w-96 h-56 border-2 border-black'>
        <input type="email" name="email" id="email" placeholder='email' onChange={handleGetData} className='m-3 p-3 border-black border-3 text-xl ' value={user.email} />
        <input type="password" name="password" id="password" placeholder='password' onChange={handleGetData} className='m-3 p-3 border-black border-3 text-xl ' value={user.password} />
        <button type='submit' className='m-3 p-3 border-black border-3 text-xl bg-green-400 text-white ' onClick={() => handleLogin()}>Submit</button>
      </div>
    </div>
  )
}

export default Login