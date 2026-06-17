'use server'
import axios from "axios";
import { redirect } from "next/navigation"; 
import { UserType } from "../types/user";
import { deleteSession, setSession } from "../lib/session";

const API_URL = "http://localhost:3001"

export const loginAction = async(formData: FormData)=>{
        const email = String(formData.get("email")).trim();
        const password = String(formData.get("password")).trim();
        const response = await axios.get(`${API_URL}/user`)

        const user= response.data.find(
            (u: UserType)=>
        u.email=== email && 
        u.password === password
        )
        if(!user){
            throw new Error("Invalid credentials")
        }
        await setSession({email:user.email, id:user.id,name:user.name})
    redirect("/contact")
}

export const logoutAction= async ()=>{
    await deleteSession()
    redirect("/")
}


  