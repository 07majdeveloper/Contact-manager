import React from 'react'
import { logoutAction } from '../actions/auth'

export default function Logoutbutton() {
  return (
    <button className=' text-red-800 hover:text-red-600 bg-gray-300 p-2 rounded-xl' onClick={logoutAction}>Logout</button>
  )
}

