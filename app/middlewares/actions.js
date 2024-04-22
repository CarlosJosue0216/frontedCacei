
import axios from "axios"
import { redirect } from "next/navigation"

export async function login(rawFormData){
    
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}api/usuarios/login`, rawFormData)
        
        const result = {
            msg: response.data.msg,
            typeAlert: true
        }
        return result
    } catch (error) {
        const result = {
            msg: error.response.data.msg,
            typeAlert: false
        }
        return result
    }
    
}
export async function userLoged(nombre){
    
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_Backend_URL}api/usuarios/userLoged`, {nombre}       )
        return response.data.msg
    } catch (error) {
        
        return error
    }
    
}