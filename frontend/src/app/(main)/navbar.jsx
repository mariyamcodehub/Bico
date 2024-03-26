import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between h-20 bg-teal-600 items-center'>
      <h1 className='text-cyan-200 text-3xl font-semibold pl-10'>BICO</h1>
      <ul className='flex flex-row text-cyan-200 decoration-4 gap-10 mr-20'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;