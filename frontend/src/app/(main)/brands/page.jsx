'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const brands = () => {

    const [brandList, setBrandList] = useState([]);

    const fetchBrands = () => {
        fetch('http://localhost:5000/brand/getall')
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log(data);
                setBrandList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchBrands();
    }, [])

    const displayBrands = () => {
        return brandList.map(brand => (
            <div className="card card-compact min-w-64 bg-base-100 shadow-xl gap-0 m-0 p-0">
                <figure><img className='w-full h-40' src={'http://localhost:5000/' + brand.image} alt="img" /></figure>

                <div className="card-body gap-0 m-0 p-0">
                    <h1 className='text-emerald-700 gap-0 m-0 p-0 font-semibold uppercase text-xl'>{brand.name}</h1>
                    <h2 className='text-sm font-medium gap-0 m-0 p-0'>{brand.email}</h2>
                    <p>Activities <span>455</span></p>
                    <h2 className="card-title gap-0 m-0 p-0">{brand.website}</h2>

                    {/* <p>{brand.about}</p> */}

                    <div className="card-actions justify-end">
                        <Link href={'/brand-details/' + brand._id} className="btn btn-outline btn-md">Learn more</Link>
                    </div>
                </div>
            </div>
        ))
    }


    return (
        <div>
            <div className="hero w-full bg-base-200 flex flex-col p-8">
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>All Brands</h1>
                    <p className='text-sm'>Here Connect to the Brands directly and showcase Your Work</p>
                </div>
                <div className="divider divider-accent w-3/5 mx-auto "></div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3  my-3 px-3 gap-3'>
                {displayBrands()}
            </div>
        </div>
    )
}

export default brands;