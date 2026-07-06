import React from 'react'
import { Link,NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between  px-4 items-center'>
        <Link to='/Dashboard'><img src='./images.jpg' className='w-15'></img></Link>
       <Link className='text-xl cursor-pointer'>Home</Link>
        <div className='flex justify-between px-4 w-50'>
          <NavLink to='/login' className='bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer'>Login</NavLink>  
            <NavLink to='/SignUp' className='bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer'>Singn up</NavLink>
        </div>
    </div>
  )
}

export default Navbar

