import React from 'react'
import Newcontactform from '@/app/components/Newcontactform'
import { getContactsById } from '@/app/api/contact';
import { updateContactAction } from '@/app/actions/contact';

async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const contact = await getContactsById(id)
  return (
     <div className='max-w-sm px-4 py-2  rounded shadow-2xl m-auto bg-gray-50'>
      <h1 className='text-center text-3xl px-4 py-2'>Edit Contact</h1>
      <Newcontactform action={updateContactAction} contact={contact}/>
    </div>
  )
}

export default page