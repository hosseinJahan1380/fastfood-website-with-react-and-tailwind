import React from 'react'

export const Hero = () => {
  return (
    <div className='p-4 mx-auto max-w-[1640px]'>
        <div className='max-h-[500px]'>
            {/* overlay */}
            <div>
                <h1> The <span>Best</span> </h1>
                <h1> Foods <span>Delivered</span> </h1>
               
            </div>
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" />
        </div>
    </div>
  )
}
