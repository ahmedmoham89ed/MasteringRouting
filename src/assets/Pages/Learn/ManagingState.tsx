import React from 'react'

const ManagingState = () => {
  return (  
    <>
       <div className="container text-xl font-medium  ">
        <div className="bg-[#0369a1] py-4 px-10 rounded-xl relative -top-[485px] drop-shadow-2xl border-4 border-[#77bbdb] ">
            <div className='text-[#e0e7ff] font-bold  text-3xl pb-4'>Managing State</div>
            <p className='text-[#dbeafe] text-xl font-medium leading-relaxed'>Well, that's not much better. Maybe somebody forgot to ask the designer to make an error page. Maybe everybody forgets to ask the designer to make an error page and then blames the designer for not thinking of it 😆
              Note that useRouteError provides the error that was thrown. When the user navigates to routes that don't exist you'll get an error response with a "Not Found" statusText. We'll see some other errors later in the tutorial and discuss them more.
              For now, it's enough to know that pretty much all of your errors will now be handled by this page instead of infinite spinners, unresponsive pages, or blank screens 🙌</p>
        </div>
      </div>
    </>
  )
}

export default ManagingState