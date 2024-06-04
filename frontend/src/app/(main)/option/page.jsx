'use client';
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row bg-slate-100" >
                <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center m-12 md:m-36">
                    <span className='inline-flex'><h1 className='text-xl font-semibold text-red-600'>Register here as an</h1>
                        <h2 className='font-bold text-xl text-cyan-700 mx-2'> Influencer</h2></span>
                    <Link href={'/signup'}><button className='btn btn-outline'> Sign up</button ></Link></div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center m-12 md:m-36">
                    <span className='inline-flex'><h1 className='text-xl font-semibold text-red-600'>Register here for </h1>
                        <h2 className='font-bold text-xl text-cyan-700 mx-2'> Brand Account</h2></span>
                    <Link href={'/brandsignup'}><button className='btn btn-outline'> Sign up</button ></Link>
                </div>
            </div>
        </div >
    )
}

export default page