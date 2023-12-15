import React, { useState } from 'react'

interface UserData{
    userName: string;
    email:string;
    firstName: string;
    lastName: string;
    // role: string
    id: string
}

const Page2 = () => {
    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [role, setRole] = useState<string>("")

    const [data, setData] = useState<Array<UserData>>([]);

    const AddUser = ()=>{
        setData((prev)=>[
            ...prev,
            {
				id: `${Math.random() * 139575638745}`,
				userName,
				email,
				firstName,
                lastName,
                role,
			},
        ])
    }
    console.log("here", data)
  return (
    <div>
        <form 
            onSubmit={(e)=>{
                e.preventDefault()
                AddUser()
            }}
        >
        <div className=" border-r-2 pr-7 border-slate-400 w-[100%] space-y-8 ">
                    <h2 className='font-semibold'>User Details</h2>
                    <div className="flex justify-between items-center text-[13px]">
                        <div className=" flex flex-col">
                            <label>Username <span className='text-red-600'>*</span></label>
                            <input onChange={(e)=>{
                                setUserName(e.target.value)
                            }}
                            className='bg-gray-100 outline-none border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md' type="text" placeholder='Enter Username' />
                        </div>
                       
                        <div className=" flex flex-col">
                        <label>Role <span className='text-red-600'>*</span></label>
                            <select onChange={(e)=>{
                            setRole(e.target.value)
                        }}  className='bg-gray-100 outline-none  border-gray-900 text-sm h-[40px] w-[270px] pl-2 rounded-md'>
                                <option  value="" disabled>Select</option>
                                <option value="Patient" >Patient</option>
                                <option  value="User" >User</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className=" flex flex-col text-[13px]">
                    <label>Email<span className='text-red-600'>*</span></label>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} className='bg-gray-100 outline-none border-gray-900 text-sm h-[40px] pl-2 rounded-md' type="email" placeholder='email@address.com' />
                    </div>
                    
                    <div className=" flex justify-between items-center text-[13px]">
                        <div className=" flex flex-col">
                        <label>First Name</label>
                            <input onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}  className='bg-gray-100 outline-none border-gray-900 text-sm h-[40px] w-[270px]  pl-2 rounded-md' type="text" placeholder='John' />
                        </div>

                        <div className=" flex flex-col">
                        <label>Last Name</label>
                            <input onChange={(e)=>{
                            setLastName(e.target.value)
                        }}  className='bg-gray-100 border-gray-900 outline-none text-sm h-[40px] w-[270px] pl-2 rounded-md' type="text" placeholder='Doe' />
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <button type='submit' className='bg-[#0D3859] text-white px-4 py-2 rounded-md mr-4'>Add User</button>
                        <button className='bg-white border border-[#0D3859] text-[#0D3859] px-4 py-2 rounded-md'>Cancel</button>
                    </div>
                </div>
        </form>
        <div>
            {data.map((props)=>(
                <div key={props.id}>
                    <div>{props.userName}</div>
                    <div>{props.firstName}</div>
                    <div>{props.lastName}</div>
                    <div>{props.email}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Page2