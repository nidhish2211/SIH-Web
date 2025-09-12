import React from 'react'
import { Droplet ,ShieldCheck,Activity,House,Droplets,TriangleAlert,ChartColumnIncreasing,Settings,User} from 'lucide-react'
import RiverDetail from '../utils/RiverDetail'
import { NavLink } from 'react-router-dom'


const Analytics = () => {
  return (
    <div className='h-screen w-full flex '>
        <div className='navbar w-[15%] h-full border-r-2 border-gray-200 absolute '>
                                   <div className='flex items-center  gap-2 mt-5 mb-10 px-4  border-b-2 border-gray-200 py-3'>
                                       <Activity size={30} className='bg-green-200 rounded-lg'/>
                                       <h1 className='font-bold'>DHARA</h1>
                                   </div>
                                   <NavLink to="/dashboard" className={({ isActive }) =>
                                               `flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`}>
                                       <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                                           <House />
                                           <h1>Dashboard</h1>
                                       </div>
                                   </NavLink>    
                                   
                                   <NavLink to="/WaterQuality" end className={({ isActive }) =>`flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`}>
                                       <div className='flex items-center gap-2 p-3 px-5  rounded-lg mx-5 '>
                                         <Droplets />
                                          <h1>Water Quality</h1>
                                       </div>
                                   </NavLink>
                                   <NavLink to="/Alerts" end className={({ isActive }) =>`flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`}> 
                                       <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                                           <TriangleAlert />
                                           <h1>Alerts</h1>
                                       </div>
                                   </NavLink>
                                   <NavLink to="/Analytics" end className={({ isActive }) =>`flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`} >
                                       <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                                           <ChartColumnIncreasing />
                                           <h1>Analytics</h1>
                                       </div>
                                   </NavLink>
                                   <NavLink to="/Community" end className={({ isActive }) =>`flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`} >
                                       <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                                           <House />
                                           <h1>Community</h1>
                                       </div>
                                   </NavLink>
                                   <NavLink to="/Settings" end className={({ isActive }) =>`flex  rounded-lg  transition ${isActive ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"}`} >
                                       <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                                           <Settings />
                                           <h1>Settings</h1>
                                       </div>
                                   </NavLink>
                       
                               </div>
        <div className='w-[15%] h-full'></div>        
        <div className='w-[85%] h-full p-5 mt-10 bg-gray-50'>
            
            
           
            
        </div>
    </div>
  )
}

export default Analytics