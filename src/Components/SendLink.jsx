import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const sendLink = () => {

  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://passwordrstbe.onrender.com/api/reset",
        {
          "email": email
        }
      );
      alert("Reset Link send to the email address");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='flex flex-col text-center  my-12 justify-self-center'>
     
     <div className='border-0 w-xl h-60 my-16 shadow-xl block rounded-xl  '>

        <input type='text' onChange={(event) => setemail(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='yourmail@mail.com...' ></input>
<button onClick={handleSubmit} className=' shadow-xl justify-self-center text-xl text-blue-800 font-bold justify-center flex cursor-pointer p-4 w-sm rounded-xl bg-green-400 '>SEND RESET LINK TO MAIL</button>
<div className='text-green-700 font-bold underline flex m-2 my-4 justify-between'>
      <Link to="/signup" >New User? SIGN UP</Link>
      <Link to="/" >Already a User? Login </Link>
    </div>
     </div>
    </div>
  )
}

export default sendLink
