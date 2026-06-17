import React from 'react'
import { ContactType } from '../types/contact'
import Link from 'next/link'
import DeleteButton from "../components/DeleteButton"
import { FaEdit } from 'react-icons/fa'
import { deleteContactAction } from '../actions/contact'


const ContactList = async ({contacts}:{contacts :ContactType[]}) => {
  return (
    <div>
        {
            contacts.map((contacts)=>(
        <div className='flex justify-between mt-10 border-2 px-4 py-2 rounded-2xl' key={contacts.id}>
            <div>
            <h2>{contacts.name}</h2>
            <p>{contacts.email}</p>
            </div>
            <div className='flex gap-5 '>
            <Link href={`/contact/edit/${contacts.id}`} className='bg-blue-500 px-4 py-2 text-xl self-center rounded'><FaEdit className='inline'/> Edit </Link>
            <DeleteButton actions={deleteContactAction} contact={contacts}/>
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default ContactList