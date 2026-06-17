import React from 'react'
import Image
 from 'next/image'

const page = () => {
  return (
    <div className='flex m-auto'>
      <div className='flex items-center flex-col gap-3'>
        <h1 className='text-center text-3xl font-bold'>Welcome To Contact Manager </h1>
        <h3 className='text-center text-lg'>Manager your contacts easily and effeciently</h3>
        <Image src="/phone.jpg" alt='phone jpg' width={300} height={300} className='rounded-lg shadow-lg items-center'/>
        <p>Start Managing Your Contacts</p>
      </div>
    </div>
  )
}

export default page