import React from 'react'

function Store() {
  return (
    <div className='w-full'>
    <div className='w-[60%] h-[30vw]  ml-[20%] mt-10'>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold'>CONNENCT WITH US</h1>
      </div>
      <div className='mt-20 ml-[30%] '>
        <h1 className='mt-5 text-2xl font-semibold cursor-pointer text-gray-600'>EMAIL <span className='text-blue-400 hover:underline ml-5'>: himanshukumar13333@gmail.com</span></h1> 
        <h1 className='mt-5 text-2xl font-semibold cursor-pointer text-gray-600'>WHATSAPP NO <span className='text-blue-400 hover:underline ml-5'> : 8382831487</span></h1>
        <h1 className='mt-5 text-2xl font-semibold cursor-pointer text-gray-600'>LINKEDIN <a className='text-blue-400 hover:underline ml-5' href="
        www.linkedin.com/in/himanshu-himanshuthecoder"> : Click here</a></h1>
        <h1 className='mt-5 text-2xl font-semibold cursor-pointer text-gray-600'>TWITER <a className='text-blue-400 hover:underline ml-5' href="
       https://x.com/HKthecoder"> : Click here</a> </h1>
      </div>
    </div>
    </div>
  )
}

export default Store