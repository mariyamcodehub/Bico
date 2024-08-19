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

    function formatFollowers(followers) {
        if (followers >= 1000000) {
            return `${(followers / 1000000).toFixed(1)}M`;
        } else if (followers >= 100000) {
            return `${Math.floor(followers / 1000)}k`;
        } else if (followers >= 10000) {
            return `${(followers / 1000).toFixed(1)}k`;
        } else if (followers >= 1000) {
            return `${(followers / 1000).toFixed(1)}k`;
        }
        return followers;
    }


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
                <div className='p-3'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
                        {influencer.map((user, index) => (
                            <div className="card card-side w-full bg-base-100 shadow-xl p-3" key={index}>
                                <figure>
                                    <img className='w-32 h-32 pt-3 rounded-full' src={`http://localhost:5000/${user.image}`} alt="profile" />
                                </figure>
                                <div className="card-body w-64">
                                    <h3 className='card-title capitalize border-b-4'>{user.name}</h3>
                                    <p className='text-md font-semibold font-sans text-cyan-60'>Followers <span className='float-right text-xl '>{formatFollowers(user.followers)}</span></p>
                                    <h4 className='font-semibold font-sans'>Category <span className='badge badge-accent badge-outline float-right'>Digital Creator</span></h4>
                                    <div className=''>
                                        <Link href={`https://x.com/kawaii_mariie`} target='_blank'><p className='link link-success'>Social Profile</p></Link>
                                        <Link href={`/user/profile`}>
                                            <button type="button" className="p-3 rounded-full text-xs font-medium text-center text-white bg-teal-700  hover:bg-teal-800 ">Show more</button>
                                        </Link>
                                        <Link href={`/user/profile`}>
                                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-full text-xs p-3 ml-2">Message</button>
                                        </Link>
                                    </div>


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