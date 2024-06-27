'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Influencers = () => {
    const [influencer, setInfluencer] = useState([]);

    const getInfluencer = async () => {
        const res = await fetch("http://localhost:5000/user/getall");
        const data = await res.json();
        setInfluencer(data);
    };

    useEffect(() => {
        getInfluencer();
    }, []);

    return (
        <>
            <div>
                <div className="hero w-full bg-base-200 flex flex-col p-8">
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold'>Find Influencers</h1>
                        <p className='text-sm'>Here Connect to the Influencers According to your Specific Category</p>
                    </div>
                    <div className="divider divider-accent w-3/5 mx-auto "></div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className='py-3'>
                    <div className='grid md:grid-cols-4 grid-cols-2'>
                        {influencer.map((user, index) => (
                            <div className="card card-side w-64 bg-base-100 shadow-xl m-5" key={index}>
                                <div className='w-40 h-32 mask mask-squircle'>
                                    <img className='w-24 h-32 pt-3' src={`http://localhost:5000/${user.image}`} alt="profile" />
                                </div>
                                <div className="card-body w-64">
                                    <h3>{user.name}</h3>
                                    <div className='badge'>Followers</div>
                                    <Link href={`/user/profile`}>
                                        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800">Show Profile</button>
                                    </Link>
                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Message</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Influencers;