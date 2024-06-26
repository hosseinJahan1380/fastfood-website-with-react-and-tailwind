import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='max-w-[1640px] border-2 border-black justify-between flex items-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
          <div className='cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>
         
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
              Best<span className='font-bold'>Eats</span>
          </h1>

          <div className='hidden lg:flex bg-gray-200 rounded-full p-1 items-center'>
            <h1 className='bg-black text-white rounded-full p-2'>Delivery</h1>
            <h1 className='p-2'>Pickup</h1>
          </div>

      </div>

      {/* search input */}
      <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input type="text" placeholder='search foods' className='bg-transparent w-full focus:outline-none p-2' />
      </div>

      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>
    </div>
  )
}

export default Navbar