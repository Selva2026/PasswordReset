import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/login",
        {
          "email": email,
          "password": password,
        }
      );
      alert("User Logged In Successfully");
    } catch (error) {
      alert("Password or Email is incorrect");
    }
  };

  return (
    <div className='flex flex-col text-center my-12 justify-self-center'>
      <div className='border-0 w-xl h-80 my-16 shadow-xl block rounded-xl'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            onChange={(event) => setemail(event.target.value)}
            className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500 text-center'
            placeholder='yourmail@mail.com...'
            required
          />
          <input
            type='password'
            onChange={(event) => setpassword(event.target.value)}
            className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500 text-center'
            placeholder='password@12345'
            required
          />
          <button
            className='shadow-xl justify-self-center text-xl text-blue-800 font-bold justify-center flex cursor-pointer p-4 w-sm rounded-xl bg-green-400'
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <div className='text-green-700 font-bold underline flex m-2 my-4 justify-between'>
          <Link to="/signup">New User? SIGN UP</Link>
          <Link to="/sendlink">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
