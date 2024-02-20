
import axios from "axios"
import { redirect } from "next/navigation"

export async function login(rawFormData){
    
    try {
        const response = await axios.post("http://localhost:4000/api/usuarios/login", rawFormData)
        
        const result = {
            msg: response.data.msg,
            typeAlert: true
        }
        console.log(result)
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
        const response = await axios.post("http://localhost:4000/api/usuarios/userLoged", {nombre}       )
        return response.data.msg
    } catch (error) {
        
        return error
    }
    
}