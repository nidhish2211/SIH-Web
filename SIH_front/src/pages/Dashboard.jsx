import React from 'react'
import { Droplet ,ShieldCheck,Activity,House,Droplets,TriangleAlert,ChartColumnIncreasing,Settings,User} from 'lucide-react'
import RiverDetail from '../utils/RiverDetail'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='h-screen w-full flex'>
        <div className='navbar w-[15%] h-full border-r-2 border-gray-200'>
            <div className='flex items-center  gap-2 mt-5 mb-10 px-4  border-b-2 border-gray-200 py-3'>
                <Activity size={30} className='bg-green-200 rounded-lg'/>
                <h1 className='font-bold'>DHARA</h1>
            </div>
            <Link to="/">
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <House />
                    <h1>Dashboard</h1>
                </div>
            </Link>    
            
             <Link to="/WaterQuality">
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <Droplets />
                    <h1>Water Quality</h1>
                </div>
            </Link>
            <Link to="/Alerts">
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <TriangleAlert />
                    <h1>Alerts</h1>
                </div>
            </Link>
            <Link to="/Analytics" >
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <ChartColumnIncreasing />
                    <h1>Analytics</h1>
                </div>
            </Link>
            <Link to="/Community">
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <House />
                    <h1>Community</h1>
                </div>
            </Link>
            <Link to="/Settings">
                <div className='flex items-center gap-2 p-3 px-5 hover:bg-cyan-700 hover:text-white rounded-lg mx-5 '>
                    <Settings />
                    <h1>Settings</h1>
                </div>
            </Link>

        </div>
        <div className='w-[85%] h-full p-5 rounded-lg bg-gray-70'>
            <div className='heading h-[20%] w-full bg-gradient-to-r from-blue-300 via-green-300 to-green-400 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden'>
                <h1 className='text-3xl font-bold text-white mb-1 drop-shadow-lg'>
                    Smart Community Health Monitoring
                </h1>
                <p className='text-lg text-white mb-4 drop-shadow'>
                    Protecting Northeast India communities through AI-powered water quality monitoring and early disease detection
                </p>
                <div className='flex gap-4'>
                    <button className='flex items-center bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition'>
                        <ShieldCheck size={20} className='mr-2 text-blue-700' />
                        View Health Status
                    </button>
                    
                </div>
            </div>
            <div className='info h-[10%] w-full  mt-4 flex justify-evenly'>
                <div className='flex  rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg'> 
                    <div className='h-full w-10 flex items-center mr-2'>
                        <Droplet size={30} className='text-green-600 bg-gradient-to-r from-green-100 to-green-200 rounded-sm ' />

                    </div> 
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>2</h1>
                        <p className='text-sm'>safe sources</p>

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
                    <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg  '>
                        <div className='h-full w-10 flex items-center'>
                            <ChartColumnIncreasing size={30} className='text-blue-300 bg-blue-100 rounded-sm'/>

                        </div>
                        <div className='flex flex-col  justify-center'>
                            <h1 className='font-bold'>38%</h1>
                            <p className='text-sm'>Risk Level</p>

                        </div>
                    </div>
                <div className='flex rounded-lg p-2 w-60 bg-gradient-to-b from-gray-10 to-gray-200 shadow-lg  '>
                    <div className='h-full w-10 flex items-center'>
                        <User size={30} className='text-emerald-500 bg-emerald-100 rounded-sm' />

                    </div>
                    <div className='flex flex-col  justify-center'>
                        <h1 className='font-bold'>365</h1>
                        <p className='text-sm'>ASHA Workers</p>

                    </div>
                </div>

            </div>
            <div className='sources h-[60%] w-full  flex'>
                <div className='h-full w-[70%] mt-5'>
                    <h1 className='text-xl'>Water Sources</h1>
                    <div className='cards flex flex-wrap gap-2 justify-evenly mt-4'>
                        <RiverDetail />
                        

                    </div>
                    

                </div>
                <div className='h-135 w-[30%]  rounded-xl mt-2 p-4 shadow-lg'>
                    <div>
                        <h1>Active Alerts</h1>
                    </div>
                    <div className='alert h-55 w-[100%]  mt-5 rounded-lg flex flex-col items-start p-4 shadow-lg'>
                        <div className='flex '>
                            <h1 className='text-[15px] font-bold mb-2 mr-5'>High Cholera Risk Detected</h1>
                            <h1 className='text-sm font-bold bg-red-100 px-[5px] rounded-lg text-red-800 '>HIGH</h1>

                        </div>
                        
                        <h2 className='text-[11px] text-gray-400 mb-1'> Kamrup Metro</h2>
                        <p className='text-[11px] text-gray-400  mb-2'>Risk <span>78%</span></p>
                        <p className='text-xs mb-4'>
                            Recent water quality analysis indicates a significant increase in cholera risk due to contaminated sources. 
                        </p>
                        <button className='bg-cyan-600 text-white px-2 py-1  rounded hover:bg-cyan-800 transition-all text-sm'>Take Action</button>
                    </div>
                    <div className='alert h-55 w-[100%]  mt-5 rounded-lg flex flex-col items-start p-4 shadow-lg'>
                        <div className='flex '>
                            <h1 className='text-[15px] font-bold mb-2 mr-5'>High Cholera Risk Detected</h1>
                            <h1 className='text-sm font-bold bg-red-100 px-[5px] rounded-lg text-red-800 '>HIGH</h1>

                        </div>
                        
                        <h2 className='text-[11px] text-gray-400 mb-1'> Kamrup Metro</h2>
                        <p className='text-[11px] text-gray-400  mb-2'>Risk <span>78%</span></p>
                        <p className='text-xs mb-4'>
                            Recent water quality analysis indicates a significant increase in cholera risk due to contaminated sources. 
                        </p>
                        <button className='bg-cyan-600 text-white px-2 py-1  rounded hover:bg-cyan-800 transition-all text-sm'>Take Action</button>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Dashboard