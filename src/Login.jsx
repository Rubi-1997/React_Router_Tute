import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
        <div className=' w-80 flex-col flex p-10 bg-white shadow border-0'>
            <h1 className='text-2xl font-semibold py-4 text-center'>Login</h1>
           <label className='block'>Email</label>
           <input className='shadow px-4 py-1 mb-4' type='email' placeholder='enter email '></input>
           <label className='block'>Password</label>
           <input className='shadow px-4 py-1  mb-4' type='password' placeholder='enter password'></input>
           <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer'>Login</button>
        </div>
       
    </div>
  )
}

export default Login