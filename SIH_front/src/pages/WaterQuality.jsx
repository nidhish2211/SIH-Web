import React from 'react'
import { Droplet ,ShieldCheck,Activity,House,Droplets,TriangleAlert,ChartColumnIncreasing,Settings} from 'lucide-react'
import RiverDetail from '../utils/RiverDetail'
import { Link } from 'react-router-dom'
import Card from '../utils/Card'
import RiverData from '../utils/RiverData'



const WaterQuality = () => {
  return (
     <div className='h-screen w-full flex '>
        <div className='navbar w-[15%] h-full border-r-2 border-gray-200 fixed'>
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
        <div className='w-[85%] h-full p-5 ml-70 mt-10'>
            <RiverDetail />
            
           
            
        </div>
    </div>
  )
}

export default WaterQuality