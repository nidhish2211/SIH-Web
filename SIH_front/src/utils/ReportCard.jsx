import React from 'react'
import { Activity,MapPin,User } from 'lucide-react'

const ReportCard = ({CommunityActions}) => {
  return (
    <div className='flex bg-gray-100 shadow-xl rounded-lg p-3'>
        <div className='mr-5 ml-5 flex items-center justify-center'>
            {CommunityActions.logo}
        </div>
        <div>
            <h1 className='text-sm rounded-sm'>{CommunityActions.id}</h1>
            <p className='text-m text-gray-600'>{CommunityActions.desc}</p>
            <div className='flex gap-5'>
                <div className='flex items-center'>
                    <MapPin size={15} className='text-gray-400'/>
                    <h4 className='text-sm text-gray-400'>{CommunityActions.location}</h4>
                </div>
                <div className='flex items-center'>
                    <User size={15} className='text-gray-400' />
                    <h4 className='text-sm text-gray-400'>{CommunityActions.ASHA}</h4>


                </div>
                
            </div>
        </div>

    </div>
  )
}

export default ReportCard