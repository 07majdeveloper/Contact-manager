"use client"
import React, { useActionState, useEffect } from 'react'
import { ContactType } from "../types/contact";
import { useRouter } from 'next/navigation';

type ContactFormProps = {
    action : (prevState:any,formData:FormData)=>Promise<any>,
    contact?: ContactType
}
const Newcontactform = ({action,contact}:ContactFormProps) => {
    const router = useRouter() 
    const [state,formAction] = useActionState(action,null)

    useEffect(()=>{
        if(state?.success){
            router.push("/contact")
        }
    },[state,router])
  return (
    <div className='w-full'>
        <form action={formAction}>
            <div className='mt-6'> 
                  <input type="hidden" name='id' value={contact?.id} />
                        <label htmlFor="name" className='px-4 py-2 text-gray-800 block'>Name</label>
                        <input defaultValue={contact?.name|| ""} type="name" name="name" id="name" required placeholder='Enter your name'className='px-4 py-2 
                        focus:border-blue-600 focus:border-2 w-full text-gray-800 block  outline-none rounded'/>
                    </div>
                    <div className='mt-6'>
                        <label htmlFor="email" className='px-4 py-2 text-gray-800 block'>Email</label>
                        <input defaultValue={contact?.email|| ""} type="email" name="email" id="" required placeholder='Enter your email'className='px-4 py-2 text-gray-800 block border-blue-600 w-full outline-none focus:border-2 rounded'/>
                    </div>
                    <button type='submit' className='w-full bg-blue-800 px-4 py-2 rounded cursor-pointer font-semibold hover:bg-blue-600 mt-6'>Save Contact</button>
                </form>
    </div>
  )
}

export default Newcontactform