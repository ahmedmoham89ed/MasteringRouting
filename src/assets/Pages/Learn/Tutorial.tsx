import React from 'react'

const Tutorial = () => {
  return (
    <>
    <div className="container text-xl font-medium  ">
     <div className="bg-[#0369a1] py-4 px-10 rounded-xl relative -top-[485px] drop-shadow-2xl border-4 border-[#77bbdb] ">
         <div className='text-[#e0e7ff] font-bold  text-3xl pb-4'>Tutorial</div>
         <p className='text-[#dbeafe] text-xl font-medium leading-relaxed'>You may or may not have noticed, but when we click the links in the sidebar, the browser is doing a full document request for the next URL instead of using React Router.
             Client side routing allows our app to update the URL without requesting another document from the server. Instead, the app can immediately render new UI. Let's make it happen with </p>
     </div>
   </div>
 </>
  )
}

export default Tutorial