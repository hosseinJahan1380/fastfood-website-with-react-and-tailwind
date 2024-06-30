import React from 'react'

export const Hero = () => {
  return (
    <div className='p-4 mx-auto max-w-[1640px]'>
        <div className='max-h-[500px] relative' >
            {/* overlay */}
            <div className='absolute flex flex-col justify-center w-full h-full text-gray-200 max-h-[500px] bg-black/40'>
                <h1 className='px-4 text-4xl sm:text-5xl ms:text-6xl lg:text-7xl font-bold'> The <span className='text-orange-300'>Best</span> </h1>
                <h1 className='px-4 text-4xl sm:text-5xl ms:text-6xl lg:text-7xl font-bold'> Foods <span className='text-orange-300'>Delivered</span> </h1>
               
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/" />
        </div>
    </div>
  )
}
