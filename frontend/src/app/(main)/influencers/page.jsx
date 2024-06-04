'use client'
import React from 'react'
import { useEffect, useState } from 'react'


const influencers = () => {

    const [influencer, setinfluencer] = useState([]);

    const getinfluencer = async () => {
        const res = await fetch("http://localhost:5000/user/getall")
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setinfluencer(data);
    }

    useEffect(() => {
        getinfluencer()
    }, [])

    return (
        <>
            <div>
                <div className='py-3'>
                    <h1 className='text-2xl bg-slate-300 font-bold p-3 text-center'>Influencers </h1> <div className='flex flex-row'>{

                        influencer.map((influencers) => {
                            return (

                                <div className="card card-side bg-base-300 shadow-xl m-5">
                                    <img src={'http://localhost:5000/' + influencers.image} alt="profile" />
                                    <div className="card-body">

                                        <h3>{influencers.name}</h3>
                                        <p>{influencers.email}</p>
                                        <p>{influencers.website}</p>

                                    </div>
                                </div>


                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default influencers