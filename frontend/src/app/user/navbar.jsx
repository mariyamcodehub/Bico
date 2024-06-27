'use client'
import './nav.css'
import React, { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext'; // Adjust the import path accordingly
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="navbar text-white bg-clr">
            <div className="flex-1">
                <div className='icon mx-5'></div>
            </div>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave" />
                {/* sun icon */}
                <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
            </label>
            <div className="flex-none">
                {user ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="message">
                                        <g fill="white" transform="translate(2 3)">
                                            <path d="M19.9995923,5.05278334 L19.9995923,12.9472011 C20.0043147,14.2841091 19.4766326,15.5680066 18.5328791,16.5158446 C17.5891256,17.4636826 16.3067925,17.997634 14.9685837,18 L5.05767467,18 C3.71711397,18.0023415 2.43065079,17.4719729 1.48189642,16.525802 C0.53314205,15.5796312 0,14.2953473 0,12.9560812 L0,5.05278334 C0.000730045959,4.46465864 0.106069271,3.88134314 0.311104769,3.33004201 C1.03357227,1.33225686 2.9314488,0.000767553715 5.05767467,5.32907052e-15 L14.9419176,5.32907052e-15 C17.0940711,-0.00120130637 19.0103994,1.3606783 19.7151537,3.39220278 C19.9107015,3.92372534 20.0071062,4.48654586 19.9995923,5.05278334 Z" opacity=".4"></path>
                                            <path d="M19.7151537,3.40108289 L19.6173779,3.48100388 C17.7774154,4.91070158 11.8219812,9.69708083 11.8219812,9.69708083 C10.7864111,10.5383811 9.30206825,10.5383811 8.26649815,9.69708083 C8.26649815,9.69708083 2.34661883,4.91958169 0.506656338,3.48988399 L0.311104769,3.33892212 C1.03060224,1.33763595 2.92915926,0.00211731296 5.05767467,7.95159307e-07 L14.9419176,7.95159307e-07 C17.0963982,0.000106643322 19.0134302,1.36605277 19.7151537,3.40108289 Z"></path>
                                        </g>
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src="https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content">
                                <li>
                                    <button className="btn btn-outline" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href="/signup" className="btn btn-outline">
                            Sign Up
                        </Link>
                        <Link href="/login" className="btn btn-outline ml-2">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserNavbar;
