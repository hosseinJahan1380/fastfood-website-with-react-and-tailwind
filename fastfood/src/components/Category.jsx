import React, { useState } from 'react'
import { categories } from './data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12 mx-auto'>
        <h1 className='font-bold text-orange-600 text-4xl text-center'>Top Rated Menu Items</h1>

        {/* Categories */}
        <div className='grid overflow-hidden sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4'> 
            {categories.map( (item ,index) =>(
                <div key={index} className='flex justify-between items-center p-4 bg-gray-100 rounded-lg'>
                    <h2 className='font-semibold sm:text-[15px]'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Category