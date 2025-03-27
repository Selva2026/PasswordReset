import React, { UseState } from 'react';
import { UseParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePwr = () => {

   const [password, setpassword] = UseState("");
   const [cnfpassword, setcnfpassword] = UseState("");
  

  const { token } = UseParams(); 

  const mailtoken = token;
  console.log(mailtoken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/update",
        {
          "token" : mailtoken,
          "password": password,
          "cnfpassword": cnfpassword
        }
      );
       console.log(res.data);
      alert("Password Updated Successfully");
    } catch (error) {
      alert(`Password or Email is incorrect${error}`);
    }
  };



  return (
    <div className='flex flex-col text-center justify-self-center'>
     
     <div className='border-0 w-xl h-80 my-16 shadow-xl block rounded-xl  '>
     <form onSubmit={handleSubmit}>
      <input  type='password'  onChange={(event) => setpassword(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='password' ></input>
      <input  type='password'  onChange={(event) => setcnfpassword(event.target.value)} className='border-1 my-8 flex w-sm text-2xl text-blue-600 justify-self-center p-2 rounded-xl border-blue-500   text-center' placeholder='confirm password' ></input>
<button className=' shadow-xl justify-self-center text-xl text-blue-800 font-bold justify-center flex cursor-pointer p-4 w-sm rounded-xl bg-green-400 '>Update Password</button>
   </form>
     </div>
    </div>
  )
}

export default UpdatePwr
