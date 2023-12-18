import ShowToast from "../common/ShowToast";
import Instance from "./AxiosConfig";

interface IUser {
	fullName: string;
	email: string;
	password: string;
}
interface ILoginUser {
	email: string;
	password: string;
}
interface ILab{
    labName: string;
	email: string;
	password: string;   
}
interface ILoginLab {
	email: string;
	password: string;
}

export const RegisterMediUser = async(data:IUser) =>{
    try{
        const response = await Instance.post("/register-user", data)
        return response 
    }catch(error:any)
    {
        console.error("Error in RegisterMediUser", error);
        return error
    }
}
export const RegisterMediLab = async (data: ILab)=>{
    try{
        const response = await Instance.post("/register-lab", data)
        return response
    }catch(error:any)
    {
        console.error("Error in RegisterMediLab", error);
        return error
    }
}

export const LoginMediUser = async(data: ILoginUser)=>{
    try{
        const response = await Instance.post("/login-user", data)
        console.log("LoginMediUser response", response);
        return response
    }catch(error:any)
    {
        ShowToast(false, `${error.response.data.message}`);
    }
}
export const LoginMediLab = async (data: ILoginLab)=>{
    try{
        const response = await Instance.post("/login-lab", data)
        console.log("LoginMediLab response", response);
        return response
    }catch(error:any)
    {
        ShowToast(false, `${error.response.data.message}`);
        console.error("Error in LoginMediLab", error);
        return error
    }
}
export const LogoutMediUser = async() =>{
    try{
        const response = await Instance.post("/logout-user")
        console.log("response", response)
    }catch(error:any)
    {
        return error
    }
}
export const LogoutMediLab = async() =>{
    try{
        const response = await Instance.post("/MediLogout-lab")
        console.log("response", response)
    }catch(error:any)
    {
        return error
    }
}

export const SingleMediUser = async(Id: string)=>{
    try{
        const response = await Instance.post(`/SingleMedi-user/${Id}`)
        return response
    }catch(error:any)
    {
        return error
    }
}

