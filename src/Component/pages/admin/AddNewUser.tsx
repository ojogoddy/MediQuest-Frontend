import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import ShowToast from '../../common/ShowToast'
// import { Axios } from 'axios'

interface UserData{
    userName: string,
    role: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    dateOfBirth: string,
    gender: string,
    test: string,
    date: string,
    id: string,
}
const AddNewUser:React.FC = () => {
    const Navigate = useNavigate();
    const [imageSelect, setImageSelect] = useState("")
    const [data, setData] = useState<Array<UserData>>([])
    const [addNewForm, setAddnewForm] = useState({
        userName: "",
        role: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        gender: "",
        test: "",
        date: Date(),
        id: `${Math.random() * 139575638745}`
    })
   

    const onChangeValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setAddnewForm((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const onChangeSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const {name, value} = e.target
       setAddnewForm((prevs)=>({
        ...prevs,
        [name]: value
       }))
    }
   

    const handleSubmit =()=>{
        console.log("before submit", addNewForm)
        Navigate("/admin-dashboard")
        // Navigate("/admin-dashboard/page2")
        localStorage.setItem("userData", JSON.stringify(addNewForm));
        ShowToast(true, "New user successful")
       

    }

    // const uploadImage =()=>{
        // const formData = new FormData()
        // formData.append("file", imageSelect)
        // console.log(" here files", imageSelect)

        // formData.append("upload-preset", "presetFromCloudinary")

        // Axios.post("https://api.cloudinary.com/v1-1/mycloudinaryname/image/upload", formData).then((response:any)=>{
        //     console.log(response)
        // })
    // }
  return (
    <div className='bg-white p-7 rounded-lg mr-5'>
        <div className="">
            <div className=" flex justify-between items-start mb-6">
                <h2 className='text-[20px] font-bold'>Add New User</h2>
                <div className="text-[25px]">
                <MdClose/>
                </div>
            </div>
            <div className="">
            <form onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit()
                }} className='flex items-start' >
            <div className=" border-r-2 pr-7 border-slate-400 w-[100%] space-y-8 ">
                    <h2 className='font-semibold'>User Details</h2>
                    <div className="flex justify-between items-center text-[13px]">
                        <div className=" flex flex-col">
                            <label>Username <span className='text-red-600'>*</span></label>
                            <input name="userName" 
                            onChange={onChangeValue}
                            className=' bg-slate-200 shadow-md outline-none border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md' type="text" placeholder='Enter Username' />
                        </div>
                       
                        <div className=" flex flex-col">
                        <label>Role <span className='text-red-600'>*</span></label>
                            <select onChange={onChangeSelect} value={addNewForm.role} name="role" className='bg-slate-200 shadow-md outline-none  border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md'>
                                <option  value="" disabled>Select</option>
                                <option value="Patient" >Patient</option>
                                <option  value="User" >User</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className=" flex flex-col text-[13px]">
                    <label>Email<span className='text-red-600'>*</span></label>
                        <input name="email" 
                        onChange={onChangeValue}className='bg-slate-200 shadow-md outline-none border-gray-900 text-sm h-[40px] pl-2 rounded-md' type="email" placeholder='email@address.com' />
                    </div>
                    
                    <div className=" flex justify-between items-center text-[13px]">
                        <div className=" flex flex-col">
                        <label>First Name</label>
                            <input name="firstName" 
                            onChange={onChangeValue}className='bg-slate-200 shadow-md outline-none border-gray-900 text-sm h-[40px] w-[270px]  pl-2 rounded-md' type="text" placeholder='John' />
                        </div>

                        <div className=" flex flex-col">
                        <label>Last Name</label>
                            <input name="lastName" 
                            onChange={onChangeValue}className='bg-slate-200 shadow-md border-gray-900 outline-none text-sm h-[40px] w-[270px] pl-2 rounded-md' type="text" placeholder='Doe' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2 text-[13px]'>
                        <input onChange={onChangeValue} type="checkbox"/>
                        Send email confirmation
                    </div>
                    
                    <div className="flex items-center">
                        <button type='submit' className='bg-[#0D3859] text-white px-4 py-2 rounded-md mr-4'>Add User</button>
                        <button className='bg-white border border-[#0D3859] text-[#0D3859] px-4 py-2 rounded-md'>Cancel</button>
                    </div>
                </div>

                <div className=" flex items-start justify-between w-[100%]">
               <div className="space-y-8">
               <div className=" flex flex-col w-[100%] px-7 text-[13px]">
                            <label>PhoneNumber <span className='text-red-600'>*</span></label>
                            <input name="phoneNumber"
                            onChange={onChangeValue} className='bg-slate-200 shadow-md border-gray-900 text-sm h-[40px] w-[270px] pl-2 outline-none rounded-md' type="tel" placeholder='PhoneNumber' />
                        </div>
                <div className=" flex flex-col w-[100%] px-7 text-[13px]">
                            <label>Address <span className='text-red-600'>*</span></label>
                            <input name="address" 
                            onChange={onChangeValue}className='bg-slate-200 shadow-md border-gray-900 outline-none text-sm h-[40px] w-[270px]  pl-2 rounded-md' type="tel" placeholder='address' />
                        </div>
                <div className=" flex flex-col w-[100%] px-7 text-[13px]">
                            <label>Date of Birth <span className='text-red-600'>*</span></label>
                            <input name="dateOfBirth" 
                            onChange={onChangeValue}className='bg-slate-200 shadow-md border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md outline-none' type="date" placeholder='address' />
                        </div>
               
                <div className=" flex flex-col w-[100%] px-7 text-[13px]">
                            <label>Gender <span className='text-red-600'>*</span></label>
                            <select  onChange={onChangeSelect} value={addNewForm.gender}   name="gender" className='bg-slate-200 shadow-md border-gray-900 border-none text-sm h-[40px] w-[270px] outline-none pl-2 rounded-md'> 
                            <option value="" disabled>gender</option>
                                <option value="Male" >Male</option>
                                <option value="Female" >Female</option></select>
                        </div>
                        <div className=" flex flex-col px-7 text-[13px]">
                        <label>Test <span className='text-red-600'>*</span></label>
                            <select onChange={onChangeSelect} value={addNewForm.test} name="test" className='bg-slate-200 shadow-md outline-none  border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md'>
                                <option  value="" disabled>Select</option>
                                <option value="Malaria" >Malaria</option>
                                <option  value="Full Blood count" >Full Blood count</option>
                                <option  value="pregnancy" >Pregnancy</option>
                            </select>
                        </div>
                        
               </div>
                   <div className="">
                   <h2 className="font-semibold text-center">Profile Picture</h2>
                   
                    <div className="w-[200px] h-[200px] rounded-full  ">
                        <input type="file" 
                        onChange={(e:any) =>{
                            setImageSelect(e.target.files[0])
                        }} />
                    </div>
                    <div className='bg-[#0D3859] text-white w-[200px] flex justify-center items-center py-2  rounded-md'>
                        Select Image</div>
                   </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default AddNewUser