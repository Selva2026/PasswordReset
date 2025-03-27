import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {


  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/register",
        {
          "name": name,
          "email": email,
          "password": password,
        }
      );
      alert("User saved Successfully. Please login to continue");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };



  return (
    <div className='flex flex-col text-center  my- justify-self-center'>
     
     <div className='border-0 w-xl h-96 my-16 shadow-xl block rounded-xl  '>
     <form onSubmit={handleSubmit}>
     <input type='text'  onChange={(event) => setname(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='your name ...' ></input>
      
      <input type='email'  onChange={(event) => setemail(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='yourmail@mail.com...' ></input>
      <input type='password'  onChange={(event) => setpassword(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='password@12345' ></input>
<button  type="submit" className=' shadow-xl justify-self-center text-xl text-blue-800 font-bold justify-center flex cursor-pointer p-4 w-sm rounded-xl bg-green-400 '>SIGN UP</button>
</form>
<div className='text-green-700 font-bold underline flex m-2 my-4 justify-between'>
      <Link to="/" >Already a User? Login</Link>
      <Link to="/sendlink" >Forget Password? </Link>
    </div>
     </div>
    </div>
  )
}

export default SignUp
