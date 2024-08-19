'use client'
import React from 'react'
import useBrandContext from '@/context/BrandAuthContext'
import Link from 'next/link';
import '../(main)/nav.css'

const navbar = () => {
    return (
        <div>
            <div className="navbar bg-clr justify-between">
                <div className=" bico ml-16">

                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-circle avatar mx-3">
                            <div className="w-10 rounded-full ">
                                <img alt="profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar