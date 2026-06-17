import { newContactAction } from '@/app/actions/contact'
import Newcontactform from '@/app/components/Newcontactform'
import React from 'react'

function page() {
  return (
    <div className='max-w-sm px-4 py-2  rounded shadow-2xl m-auto bg-gray-50'>
      <h1 className='text-center text-3xl px-4 py-2'>Create New Contact</h1>
      <Newcontactform action={newContactAction}/>
    </div>
  )
}

export default page