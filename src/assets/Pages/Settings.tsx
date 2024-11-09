import React from 'react'
import TextArea from '../UI/TextArea'
import Button from '../UI/Button'
import { useLocation } from 'react-router-dom';

const Settings = () => {
  const {state}=useLocation();

  return (
    <>
    <div className="flex flex-col gap-4 w-[490px] mx-auto my-12 bg-slate-300 px-4 py-5 rounded-xl">
        <h1 className='text-center font-semibold text-2xl'>email: {state.email}</h1>
        <h1 className='text-4xl font-semibold text-center text-indigo-700 ml-5'>Bug Report</h1>
        <TextArea/>
        <Button className='w-80 mx-16 text-xl font-semibold hover:bg-[#3e99b7]' width='w-fit' children="Submit" />
    </div>
    </>
  )
}
 
export default Settings