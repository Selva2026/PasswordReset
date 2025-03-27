import React from 'react';
import { Link } from 'react-router-dom';




const NavBar = () => {
  return (
    <div className='flex flex-row justify-between shadow-xl items-center p-4'>
      <Link to="/" className='text-3xl font-bold text-blue-700'>PASSWORD RESET APP</Link>
     
      <div className='flex flex-row justify-between list-none gap-16 text-blue-600 font-bold items-center text-2xl'>
        <li className=''>
       <Link to="/" >LOGIN</Link>
       </li>
       <li><Link to="/signup" >SIGNUP</Link></li>
       <li><Link to="/sendlink" >RESET PASSWORD</Link></li>
      </div>
      
      



    </div>
  )
}

export default NavBar
