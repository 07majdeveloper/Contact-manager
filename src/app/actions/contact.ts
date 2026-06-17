"use server"
import { revalidatePath } from "next/cache"
import { createContact, deleteContact, updateContact } from "../api/contact"
import { error } from "console"
import { getSession } from "../lib/session"
import { ContactType } from "../types/contact"

export const deleteContactAction=async(prevState:any,formData:FormData)=>{
    const id = formData.get("id") as string
    try {
        await deleteContact(id)
        revalidatePath("/contact")
        return {success:true}
    } catch (error) {
        console.log("Failed To Delete Contact",error)
        return {error :"Failed to delete contact"}
    }
}


export const newContactAction = async(prevState:any,formData:FormData)=>{
if(!formData){
    return error("Required field missing")
}
const user = await getSession();
const contact:ContactType={
name:formData.get("name") as string,
email:formData.get("email") as string,
userId:user?.id as string
};

try {
    await createContact(contact);
    revalidatePath("/contact")
 return {success:true}
    } catch (error) {
        console.log("Failed To Add Contact",error)
        return {error :"Failed to Add contact"}
    }
}


export const updateContactAction = async(prevState:any,formData:FormData)=>{    

const id = formData.get("id") as string;
const user = await getSession();

const updatedContact:ContactType={
name:formData.get("name") as string,
email:formData.get("email") as string,
userId:user?.id as string
};

try {
    await updateContact(id,updatedContact);
    revalidatePath("/contact")
 return {success:true}
    } catch (error) {
        console.log("Failed To updating Contact",error)
        return {error :"Failed to updating contact"}
    }
}