import React from 'react'
import Card from './utils/Card'
import { FaPersonCircleCheck } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";


const Login = () => {

    const userTypes = [
    {
      id: "asha",
      title: "ASHA Worker",
      description: "Accredited Social Health Activist",
      icon: <FaPersonCircleCheck />,
      route: "/login/asha",
      
    },
    {
      id: "govt",
      title: "Government Official", 
      description: "Administrative & Healthcare Officials",
      icon: <BsBuildingsFill />,
      route: "/login/govt",
      
    },
    {
      id: "resident",
      title: "Resident",
      description: "Community Members & Citizens",
      icon: <FaHome />,
      route: "/login/resident", 
      
    },
    
    
  ];
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-[#F2F7F2] '>
        <div className='mb-20'>
            <h1 className='font-semibold text-5xl'>Health Management System</h1>
            <p className='text-lg m-5 ml-50'>Select your role to continue</p>
        </div>
        <div className='cards flex gap-20'>
            {userTypes.map(userTypes =>{
                return(
                <Card key={userTypes.id} userTypes={userTypes} />
                )
            })}

        </div>
        
    </div>
  )
}

export default Login