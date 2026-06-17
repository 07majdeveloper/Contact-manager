"use client"
import React, { useActionState } from 'react'
import { FaTrash } from "react-icons/fa6"
import { ContactType } from '../types/contact'

type DeleteButtonProps ={
    actions:(prevState:any, formData:FormData)=>Promise<any>;
    contact? : ContactType;
}
const DeleteButton = ({actions, contact}:DeleteButtonProps) => {
    const [state,formAction] = useActionState(actions,null)
  return (
    <div>
        <form action={formAction}>
            <input type="hidden" name='id' value={contact?.id} />
            <button type='submit' 
            onClick={(e)=>{
                if(!confirm("Are you Sure You Want to delete this contact")){
                    e.preventDefault()
                }
            }}
            className='bg-red-500 px-4 py-2 text-xl self-center rounded'>Delete <FaTrash className='inline'/></button>
        </form>
        </div>
  )
}

export default DeleteButton