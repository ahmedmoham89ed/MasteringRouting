import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useLocation } from 'react-router-dom'
const Login = () => {
  const location=useLocation();
  console.log(location);
  
  return (
    <>
    <div className='flex flex-col gap-4 items-center justify-center bg-slate-300 w-96 mx-auto my-20 py-5 px-4 rounded-2xl  '>
      <h1 className='text-5xl font-bold text-indigo-700 py-2'>Sign In</h1>
      <Input title='Email Address' type="email" />
      <Input title='Enter The Password' type="password" />
      <Button children={"Login"} className='Login w-80 text-xl font-semibold hover:bg-[#3e99b7] ' width='w-fit' />
    </div>
    </>

  )
}

export default Login