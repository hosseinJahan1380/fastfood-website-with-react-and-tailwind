import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='py-12 px-4 max-w-[1640px] mx-auto grid md:grid-cols-3 border-2 gap-6'>
        {/* Card */}
        <div className='border-2 rounded-xl relative'>
            {/* overlay */}
            <div className='absolute rounded-xl bg-black/50 h-full w-full text-white'>
                <p className='text-2xl font-bold pt-4 px-2'>Sun's Out Bogo</p>
                <p className='px-2  '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' 
            src="https://images.pexels.com/photos/233305/pexels-photo-233305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/" />
        </div>

        {/* Card */}
        <div className='border-2 rounded-xl relative'>
            {/* overlay */}
            <div className='absolute rounded-xl bg-black/50 h-full w-full text-white'>
                <p className='text-2xl font-bold pt-4 px-2'>New Restaurants</p>
                <p className='px-2 '>Added Daily </p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' 
            src="https://images.pexels.com/photos/3504872/pexels-photo-3504872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/" />
        </div>

        {/* Card */}
        <div className='border-2 rounded-xl relative'>
            {/* overlay */}
            <div className='absolute rounded-xl bg-black/50 h-full w-full text-white'>
                <p className='text-2xl font-bold pt-4 px-2'>We Deliver Desserts Too</p>
                <p className='px-2 '>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' 
            src="https://images.pexels.com/photos/724294/pexels-photo-724294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/" />
        </div>
    </div>
  )
}

export default HeadLineCards