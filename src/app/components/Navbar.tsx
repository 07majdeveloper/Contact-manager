import Link from 'next/link'
import React from 'react'
import Logoutbutton from './Logoutbutton'
import { getSession } from '../lib/session'

export const Navbar = async()=>{
    const session = await getSession()
  return (
    <nav className='bg-gray-50 border-b shadow-2xl h-15 w-full px-4 py-2 flex justify-between items-center'>
        {/* Logo */}
    <div className='flex gap-2'>
        <div className='items-center flex'>
     <h2 className='text-3xl font-bold text-blue-700'>CM</h2>
        </div>
    <div className='items-center flex'>
        <h2 className='text-xl font-semibold text-blue-400'>Contact Manager</h2>
    </div>
    </div>
    {/* Links */}
    <div className='flex gap-2 text-blue-800 '>
    <Link href={"/register"} className='hover:text-blue-600 p-2 rounded-xl'>Register</Link>
    <Link href={"/contact"} className='hover:text-blue-600 p-2 rounded-xl'>Contact</Link>
    {session?(<Logoutbutton/>):(<Link href={"/login"} className=' text-blue-800 hover:text-blue-600 bg-gray-300 p-2 rounded-xl'>Login</Link>)}
    </div>
    </nav>
  )
}

