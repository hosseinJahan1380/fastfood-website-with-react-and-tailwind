import React from 'react'
import {data} from "../components/data/data.js"
const Food = () => {
  console.log(data)
  return (
    <div className='py-12 px-4 max-w-[1640px] '>
        <h1 className='text-4xl text-orange-600 text-center font-bold'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>


          {/* filter Type */}
          <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex flex-wrap justify-between'>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>All</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Burgers</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Pizza</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Salad</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Chicken</button>
            </div>

          </div>

          {/* filter Price */}
          <div>

            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex max-w-[390px] justify-between w-full'>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$$</button>
              <button className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$$$</button>
            </div>

          </div>
        </div>

        {/* Display foods */}
    </div>
  )
}

export default Food