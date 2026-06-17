import React from 'react'
import { getSession } from '../lib/session'
import toast from 'react-hot-toast'
import { getContacts } from '../api/contact'
import ContactList from '../components/ContactList'

const page = async() => {
  const user = await getSession()
  if(!user){
   return(
    <div className='text-center text-3xl'>
      please Login to access
      <a href="/login" className='text-blue underline'>Click Here to login</a>
    </div>
   )
  }
 
  const contacts = await getContacts(user.id!) 
  if(!contacts || contacts.length === 0){
   return(
     <div className='text-center text-3xl'>
      please Add contacts  <a href="/contact/new" className='text-blue underline'>Click Here to Add</a>
    </div>
   )
  }
  return (
    <div className='px-4 py-2 gap-5'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold'>Your Contacts</h2>
        <a href="/contact/new" className='bg-blue-400 rounded px-4 py-2'>Add Contact</a>
      </div>
        <ContactList contacts = {contacts}/>
    </div>
  )
}

export default page