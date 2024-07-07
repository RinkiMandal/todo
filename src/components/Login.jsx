import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center'>
    <h1 className='text-5xl mt-32'>Login</h1>
    <div className='flex flex-col'>
        <input type='text' placeholder='Name' className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md' /> 
        <input type='email' placeholder='email' className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md' />  <input type='password' placeholder='Password' className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md' /> 
        <div className=' flex justify-center items-center mt-12 w-72 text-xl bg-red-700 text-white font-bold h-14 border-2 border-red-700'>
        <button>Login</button>
        </div>
    </div>
    <NavLink to="/register" className='m-8 text-xl font-medium cursor-pointer'>u don't have account? <span className='text-red-600'> Register</span> </NavLink>

    </div>
  )
}

export default Login