import React, { useState } from 'react'
import {data} from "../components/data/data.js"
const Food = () => {



  const [foods , setFoods] = useState(data)

  // Filter type/price/etc

  const fliterType = (category) =>{
    setFoods( 
      data.filter( (item) => item.category === category )
    );
  }

  const filterPrice = (price) =>{
    setFoods(
      data.filter( (item) => item.price === price )
    );
  }

  return (
    <div className='py-12 px-4 max-w-[1640px] '>
      <h1 className='text-4xl text-orange-600 text-center font-bold'>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>


        {/* filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex flex-wrap justify-between'>
            <button  onClick={()=> setFoods(data)}        className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>All</button>
            <button  onClick={()=> fliterType('burger')}  className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Burgers</button>
            <button  onClick={()=> fliterType('pizza')}   className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Pizza</button>
            <button  onClick={()=> fliterType('salad')}   className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Salad</button>
            <button  onClick={()=> fliterType('chicken')} className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>Chicken</button>
          </div>

        </div>

        {/* filter Price */}
        <div>

          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex max-w-[390px] justify-between w-full'>
            <button  onClick={()=> filterPrice('$')}     className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$</button>
            <button  onClick={()=> filterPrice('$$')}    className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$</button>
            <button  onClick={()=> filterPrice('$$$')}   className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$$</button>
            <button  onClick={()=> filterPrice('$$$$')}  className='border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1'>$$$$</button>
          </div>

        </div>
      </div>

      {/* Display foods */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item , index)=> (
              <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                  <p className='font-bold'>{item.name}</p>
                  <p>
                    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                  </p>
                </div>
              </div>

          ))}

      </div>
    </div>
  )
}
  


export default Food