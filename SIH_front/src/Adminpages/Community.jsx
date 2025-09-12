import React from 'react'
import { Droplet ,ShieldCheck,Activity,House,Droplets,TriangleAlert,ChartColumnIncreasing,Settings,User,Heart} from 'lucide-react'
import RiverDetail from '../utils/RiverDetail'
import { NavLink } from 'react-router-dom'
import ReportCard from '../utils/ReportCard'


const CommunityActions=[
    {
        id:"report",
        desc:"Diarrhea causes report in 5 households",
        location:"Barmata Village",
        ASHA:"Priya Devi",
        logo:<Activity className='text-blue-400 bg-white rounded-lg' />
    },
    {
        id:"Education",
        desc:"Water safety Workshop conducted",
        location:"Nagaon Community Center",
        ASHA:"Sunita Sharma",
        logo:<Heart  className='text-red-400 bg-white rounded-lg'/>
    }

]
const Community = () => {
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
        <div className='w-[85%] h-full p-5  bg-gray-50'>
            <div>
                <h1>Community Health</h1>
            </div>
            <div className='flex justify-evenly items-center mt-5'>
                <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg '>
                    <div className='h-full w-10 flex items-center'>
                         <TriangleAlert size={30} className='text-amber-300 bg-amber-100 rounded-sm' />
            
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>1</h1>
                        <p className='text-sm'>Active Alerts </p>
            
                     </div>
            </div>
            <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg '>
                    <div className='h-full w-10 flex items-center'>
                         <TriangleAlert size={30} className='text-amber-300 bg-amber-100 rounded-sm' />
            
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>1</h1>
                        <p className='text-sm'>Active Alerts </p>
            
                     </div>
            </div>
            <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg '>
                    <div className='h-full w-10 flex items-center'>
                         <TriangleAlert size={30} className='text-amber-300 bg-amber-100 rounded-sm' />
            
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>1</h1>
                        <p className='text-sm'>Active Alerts </p>
            
                     </div>
            </div>
            <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg '>
                    <div className='h-full w-10 flex items-center'>
                         <TriangleAlert size={30} className='text-amber-300 bg-amber-100 rounded-sm' />
            
                    </div>
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>1</h1>
                        <p className='text-sm'>Active Alerts </p>
            
                     </div>
            </div>

            </div>

            <div className='mt-10 bg-white p-5 border-1 border-gray-100 shadow-lg rounded-lg'>
                <div className='flex'>
                    <ShieldCheck />
                    <h1>Community Health Status</h1>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-5">
                 {/* Healthy Households */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-600">12,800</h2>
                        <p className="text-gray-500 text-sm">Healthy Households</p>
                        <div className="w-full h-2 bg-gray-200 rounded mt-2">
                        <div className="h-2 bg-green-600 rounded" style={{ width: "65%" }}></div>
                    </div>
                </div>

                 {/* At-Risk Households */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-yellow-600">3,200</h2>
                    <p className="text-gray-500 text-sm">At-Risk Households</p>
                    <div className="w-full h-2 bg-gray-200 rounded mt-2">
                        <div className="h-2 bg-yellow-500 rounded" style={{ width: "35%" }}></div>
                    </div>
                </div>

                {/* Vaccination Rate */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-600">84%</h2>
                    <p className="text-gray-500 text-sm">Vaccination Rate</p>
                    <div className="w-full h-2 bg-gray-200 rounded mt-2">
                     <div className="h-2 bg-blue-600 rounded" style={{ width: "83%" }}></div>
                    </div>
                </div>
            </div>

           
            </div>
             <div className='bg-white mt-5 rounded-lg shadow-lg p-2 px-5 py-3'>
                <div className='flex gap-3 mb-5'>
                    <Activity />
                    <h1 className='text-xl font-semibold'>Recent Community Activities</h1>    
                </div>
                
                <div className='flex gap-4 flex-col'>
                    {CommunityActions.map(CommunityActions=>{
                        return(
                            <ReportCard key={CommunityActions.id} CommunityActions={CommunityActions} />
                        )
                    })}
                </div>


            </div>
            

            
            
           
            
        </div>
    </div>
  )
}

export default Community