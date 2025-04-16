import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' relative z-[2] w-full h-[30%]'>
   <div className=' w-full z-1 py-7 flex px-3  text-zinc-500  text-xl font-semibold border border-zinc-950 '>
    <Link to={'/'} >
    <h3>Product Store</h3>
    </Link>
    <Link to={'/create'}>
    <button className=' absolute right-16 border border-zinc-500 rounded-xl px-6 py-2 '  >Create</button>
    </Link>
    
   </div>

   </div>
  )
}

export default Navbar