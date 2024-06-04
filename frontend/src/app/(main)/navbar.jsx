'use client'
import './nav.css'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {


  return (
    <>
      <div className="navbar text-white " >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-50  rounded-box w-52">
              <li><a href='/'>Home</a></li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li><a href='/influencers'>Influencer</a></li>
                  <li><a>Creator</a></li>
                </ul>
              </li>
              <li><a href='/brandprofile'>Brands</a></li>
            </ul>
          </div>
          <div className='bico' ></div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/' >Home</a></li>
            <li>
              <a href='/brandprofile'>Brands</a>
            </li>
            <li>
              <details>
                <summary className='absolute'>Category</summary>
                <ul className="p-2 bg-teal-700 top-5 ">
                  <li><a href='/user/profile'>Influencer</a></li>
                  <li><a>Creator</a></li>
                </ul>
              </details></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link className="btn btn-outline mx-3 rounded-2xl text-white " href='option'>Sign Up</Link>
          <Link className="btn btn-outline rounded-2xl text-white" href='/loginoption'>Login</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;