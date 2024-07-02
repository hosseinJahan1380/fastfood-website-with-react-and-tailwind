import React ,{useState} from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Navbar = () => {
  const [nav ,setNav] = useState(false)

  return (
    <div className='max-w-[1640px] border-2 justify-between flex items-center p-4'>
      {/* left side */}
      <div className='flex items-center'>
          <div className='cursor-pointer' onClick={() => setNav(!nav) }>
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
      <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[500px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input type="text" placeholder='search foods' className='bg-transparent w-full focus:outline-none p-2' />
      </div>

      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>

      {/* mobile menu */}
      <div className={nav ? 'top-0 left-0 bg-black/60 h-screen w-full fixed z-10 duration-100' 
        : 'hidden'}>

      </div>

      {/* side drawer menu */}
      <div className={nav ?'h-screen w-[300px] top-0 left-0 fixed bg-white z-20 duratoin-100' 
        : 'h-screen w-[300px] top-0 left-[-100%] fixed bg-white z-20 duratoin-100'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='p-4 flex flex-col  text-gray-800'>
            <li className='flex text-md py-4  items-center'> <TbTruckDelivery  size={20} className='mr-2'/> Orders</li>
            <li className='flex text-md py-4 items-center'> <MdFavorite size={20} className='mr-2'/> Favorites</li>
            <li className='flex text-md py-4 items-center'> <FaWallet size={20} className='mr-2'/> Wallet</li>
            <li className='flex text-md py-4 items-center'> <MdHelp size={20} className='mr-2'/>Help</li>
            <li className='flex text-md py-4 items-center'> <AiFillTag size={20} className='mr-2'/>Promotions</li>
            <li className='flex text-md py-4 items-center'> <BsFillSaveFill size={20} className='mr-2'/>Best One</li>
            <li className='flex text-md py-4 items-center'> <FaUserFriends size={20} className='mr-2'/>Invite Friends</li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar