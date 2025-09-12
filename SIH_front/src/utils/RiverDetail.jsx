import React from 'react'
import RiverDetailCard from './RiverDetailCard'

const RiverData=[
        {
            id:"Bhramaputra",
            title:"Bhramaputra River-Guhwati",
            ph:"7.2",
            turbidity:"3.1 NTU",
            ecoli:"0",
        },
        {
            id:"Community",
            title:"Community Well Shillong",
            ph:"6.1",
            turbidity:"2.3 NTU",
            ecoli:"0",
        },
        

    ];
    

const RiverDetail = () => {
  return (
    <div className='flex gap-2 grid grid-cols-2 '>
        {RiverData.map(RiverData=>{
            return(
                <RiverDetailCard key={RiverData.id} RiverData={RiverData} />
            )
        })}
    </div>
  )
}

export default RiverDetail
