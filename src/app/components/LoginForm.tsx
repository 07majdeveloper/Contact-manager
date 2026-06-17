import React from 'react'
import { loginAction } from '../actions/auth'

export default function LoginForm() {
  return (
    <div className='px-4 py-2'>
        <form action={loginAction}>
            <div className='mt-6'>
                <label htmlFor="email" className='px-4 py-2 text-gray-800 block'>Email</label>
                <input type="email" name="email" id="" required placeholder='Enter your email'className='px-4 py-2 text-gray-800 block border-blue-600 w-full outline-none focus:border-2 rounded'/>
            </div>
            <div className='mt-6'> 
                <label htmlFor="password" className='px-4 py-2 text-gray-800 block'>Password</label>
                <input type="password" name="password" id="" required placeholder='Enter your password'className='px-4 py-2 
                focus:border-blue-600 focus:border-2 w-full text-gray-800 block  outline-none rounded'/>
            </div>
            <button type='submit' className='w-full bg-blue-800 px-4 py-2 rounded cursor-pointer font-semibold hover:bg-blue-600 mt-6'>login</button>
        </form>
    </div>
  )
}
