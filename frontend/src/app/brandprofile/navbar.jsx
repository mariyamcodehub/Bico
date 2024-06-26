'use client'
import React from 'react'
import useBrandContext from '@/context/BrandContext'
import Link from 'next/link';

const navbar = () => {

    const { brandLoggedIn, brandLogout } = useBrandContext();


    const displayLoginOptions = () => {

        // console.log(influencerLoggedIn);
        if (!brandLoggedIn) {
            return <>
                <Link className="btn mx-3" href='option'>Sign Up</Link>
                <Link className="btn" href='/loginoption'>Login</Link>
            </>
        } else {

            return <button onClick={brandLogout}>Logout</button>
        }
    }
    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BICO</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li>{displayLoginOptions()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar