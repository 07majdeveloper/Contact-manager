import React from 'react'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'

export default function page() {
  return (
    <div className='max-w-md mx-auto my-auto bg-gray-50 shadow-xl px-4 py-2 rounded-xl'>
        <h2 className='text-center text-3xl font-bold'>Login</h2>
        <LoginForm/>
        <p className='p-8'>Don't Have An Account <Link href={"/register"} className='text-blue-800 hover:underline'>Register</Link></p>
    </div>
  )
}

