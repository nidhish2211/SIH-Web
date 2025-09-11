import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPersonCircleCheck } from "react-icons/fa6";

const Card = ({ userTypes }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='h-90 w-70 rounded-xl border-2 border-emerald-400 overflow-hidden hover:scale-115 transition-all duration-300 bg-white flex flex-col items-center justify-between shadow-2xl'>
        <div className='h-70 w-70 flex flex-col items-center '>
          <h1 className='text-5xl mt-15 bg-emerald-100 p-3 rounded-full'>{userTypes.icon}</h1>
          <h1 className='text-2xl mt-5 font-bold'>{userTypes.title}</h1>
          <p className='text-lg mt-5 p-1 text-center'>{userTypes.description}</p>
        </div>
        <div className='h-20 w-70 bg-emerald-100 flex items-center justify-center '>
          <button
            onClick={() => navigate(userTypes.route)}
            className='p-2 bg-white rounded-lg hover:bg-black hover:text-white transition-all duration-300'
          >
            <h3 className='font-bold'>Login as {userTypes.title}</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card