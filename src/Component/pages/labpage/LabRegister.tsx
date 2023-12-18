import React, {useState, } from 'react'
import {Link, useNavigate} from "react-router-dom"
import ShowToast from '../../common/ShowToast';
import { RegisterMediLab } from '../../utils/ApiCalls';

const LabRegister:React.FC = () => {
  const Navigate = useNavigate();
	const [formData, setFormData] = useState({
		labName: "",
		email: "",
		password: ""
	});

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
    
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
 
  const RegisterUserSubmit = async () => {
		try {
      console.log("before api call");
			const res = await RegisterMediLab(formData);
      console.log("after api call", res);

      if(res!.status === 201){
        ShowToast(true, `${formData.labName} Registration Successfull`);
        Navigate("/lab-login");
        console.log("response", res)
      } else{
        ShowToast(false, "Registration failed. Please try again.");
        console.log(res)
      }
			
		} catch (error:any) {
      ShowToast(false, "An error occurred during registration.");
			return error;
		}
	};
  return (
    <div className='bg-slate-200 h-screen w-screen flex justify-center items-center sm:bg-white md:bg-white'>
       <div className="bg-white flex rounded-[10px] sm:bg-transparent sm:w-screen md:bg-transparent md:w-screen">
        <div className='flex flex-col gap-4 mx-10 justify-center sm:mt-0 md:mt-0 sm:w-screen sm:mx-4 md:w-screen md:mx-6'>
            <h1 className=' text-center text-[50px] text-[#003189] font-extrabold  sm:text-[45px]'>MediQuest</h1>
            <h2 className='text-[#003189] text-center text-[35px] sm:text-[20px]'>Sign Up</h2>
           <form 
           
            onSubmit={(e)=>{
              e.preventDefault()
              RegisterUserSubmit()
            }}>
           <div className="mx-6 mb-2">
            <input type="text"
            onChange={onChangeValue}
            name="labName"
            required 
            className="bg-white text-black placeholder:text-slate-400 outline-none p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='LabName'/>
            </div>
            
            <div className="mx-6 mb-2">
            <input type="email"
            onChange={onChangeValue}
            name="email"
            required  
            className="bg-white text-black placeholder:text-slate-400 outline-none p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-full" 
            placeholder='Email'/>
            </div>

           
            <div className="mx-6 mb-2">
            <input type="password"
            onChange={onChangeValue}
            name="password"
            required  
            className="bg-white text-black placeholder:text-slate-400 outline-none p-4 h-[55px] w-[400px] border-slate-400 border-[1px] rounded-[30px] sm:h-[45px] sm:w-full md:h-[45px] md:w-full" 
            placeholder='Password' />
            </div> 
            <div className="mx-6 mt-8">
                <button type='submit' className='bg-[#003189] text-white text-[18px] outline-none rounded-[30px] h-[55px] w-[400px]  sm:h-[45px] sm:w-full md:h-[45px] md:w-full'>Register</button>
            </div>
            <div className="">
             <p className=' text-black text-center mt-2'>Already have an account? 
                 <Link 
                    to={`/lab-login`}
                    style={{
                        textDecoration:"none",
                        color: "#177eb1",
                        outline: "none"
                    }} ><span className='ml-2'>Login</span>
                 </Link> </p>
            </div>
           </form>
                
        </div>
        <div className='bg-[#003189] h-[650px] w-[500px] m-auto rounded-[10px] sm:hidden md:hidden'>
        </div>
       </div>
    </div>
  )
}

export default LabRegister