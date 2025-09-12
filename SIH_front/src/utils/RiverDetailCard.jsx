import React from 'react'
import { Droplet ,ShieldCheck,Activity,House,Droplets,TriangleAlert,ChartColumnIncreasing,Settings} from 'lucide-react'

const RiverDetailCard = ({RiverData}) => {
  return (
    <div>
        <div className='card h-45 w-100 shadow-xl rounded-lg overflow-hidden'>
            <div className='h-1 w-full bg-green-200'>

            </div>
                            <div className='flex justify-between pt-2'>
                                <h1 className='ml-2 text-m pl-3 tracking-wide'>{RiverData.title}</h1>
                                <div className='flex items-center justify-center mr-6 px-2 bg-green-200 rounded-xl'>
                                    <ShieldCheck size={15} className='text-green-700' />
                                    <h3 className='text-sm text-green-700'>Safe</h3>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-4 mt-3 px-4'>
                                <div className='h-20 rounded-lg bg-gray-200 flex flex-col items-center justify-center'>
                                    <h1 className='text-[11px]'>pH Level</h1>
                                    <h1 className='text-[20px] mt-2 font-bold text-green-700'>{RiverData.ph}</h1>
                                </div>
                                <div className='h-20 rounded-lg bg-gray-200 flex flex-col items-center justify-center'>
                                    <h1 className='text-[11px]'>Turbidity</h1>
                                    <h1 className='text-[20px] mt-2 font-bold text-green-700'>{RiverData.turbidity}</h1>
                                </div>
                                <div className='h-20 rounded-lg bg-gray-200 flex flex-col items-center justify-center'>
                                    <h1 className='text-[11px]'>e coli</h1>
                                    <h1 className='text-[20px] mt-2 font-bold text-green-700'>{RiverData.ecoli}</h1>
                                </div>
                            </div>
                            <hr className="border-t border-gray-300 mx-4 mt-4" />
                            <div className='flex justify-between px-4 mt-2'>
                                <h3 className='text-sm text-gray-500'>Last Updated</h3>
                                <h3 className='text-sm text-gray-500'>2 minutes ago</h3>
                            </div>
                            

                        </div>
                    </div>
  )
}

export default RiverDetailCard