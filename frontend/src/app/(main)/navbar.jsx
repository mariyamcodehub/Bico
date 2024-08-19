// Navbar.js
'use client'
import './nav.css'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { BrandAuthContext } from '@/context/BrandAuthContext';

const Navbar = () => {
  const { user, logout: userLogout } = useContext(AuthContext);
  const { brand, logout: brandLogout } = useContext(BrandAuthContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogout = () => {
    if (user) {
      userLogout();
    }
    if (brand) {
      brandLogout();
    }
  };


  return (
    <>
      <div className="navbar text-white" style={{ backgroundColor: '#273746' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" >
              <label className="btn btn-sm btn-circle swap swap-rotate lg:hidden">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>

            </div>
            {isChecked && (< ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-teal-500 rounded-box w-52">
              <li><a href='/'>Home</a></li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li><a href='/influencers'>Influencer</a></li>
                  <li><a>Creator</a></li>
                </ul>
              </li>
              <li><a href='/brandprofile'>Brands</a></li>
            </ul>)}



          </div>
          <div className='bico ml-4 md:ml-10'></div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="flex flex-row gap-10">
            <Link href={'/'}>Home</Link>
            <Link href={'/howitwork'}>How It Works?</Link>
            <Link href={'/brands'}>Brands</Link>
            <Link href={'/contact'}>Contact Us</Link>

          </ul>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="p-3 gap-2   ml-5">Influencers Category</div>
            <ul tabIndex={0} className="dropdown-content menu bg-teal-700 rounded-box z-[1] w-52 p-2 shadow ml-6">
              <li><a href='/'>Digital Creator</a></li>
              <li><a href='/'>Fashion artist</a></li>
              <li><a href='/'>Memers</a></li>
              <li><a href='/'>Entertainment & recreators</a></li>
              <li><a href='/'>Travellers</a></li>
              <li><a href='/'>Food bloggers</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          {user || brand ? (
            <button className="btn btn-xs md:btn-sm btn-outline rounded-2xl text-white focus:ring focus:ring-violet-300" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <div className='flex flex-col md:flex-row gap-1'>
                <Link className="btn btn-xs md:btn-sm btn-outline md:mx-3 rounded-2xl text-white focus:ring focus:ring-violet-300" href='/option'>Sign Up</Link>
                <Link className="btn btn-xs md:btn-sm btn-outline rounded-2xl text-white focus:ring focus:ring-violet-300" href='/loginoption'>Login</Link>
              </div>

            </>
          )}
        </div>
      </div >
    </>
  );
};

export default Navbar;
