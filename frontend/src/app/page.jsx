'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './(main)/navbar'
import Stats from './(main)/stats/page'
import AdminProfile from './admin/profile/page'
import UserProfile from './user/profile/page'
import Signup from './(main)/signup/page'

const Home = () => {

  const [campaign, setCampaign] = useState([]);

  const getcampaign = async () => {
    const res = await fetch("http://localhost:3000/campaign/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setCampaign(data);
  }

  useEffect(() => {
    getcampaign()
  }, [])


  return (


    <>
      <Navbar />
      <Signup />
      <div className='flex lg:justify-center lg:p-2 p-4 bg-slate-900 shadow-lg'><h1 className="text-3xl font-bold text-white">
        Best Platform for Collaboration!
      </h1></div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        {
          campaign.map((camp) => {
            return (
              <div>
                <div className="card card-side bg-base-300 shadow-xl m-5">
                  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{camp.title}</h2>
                    <h3>{camp.name}</h3>
                    <p>{camp.description}</p>
                    <p>{camp.incentive}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

        <div className='p-5 min-h-52 bg-slate-200 my-3'>
          <h1 className='text-3xl font-semibold my-3'>Dashboard</h1>
          <Stats />
        </div>
      </div>
      <div className='py-3'>
        <h1 className='text-2xl bg-slate-900 text-slate-300 p-3'>Brands Category</h1>

        <AdminProfile />
      </div>
      <div className='py-3'>
        <h2 className='text-2xl bg-slate-900 text-slate-300 p-3'>Influencers Category</h2>
        <UserProfile />
      </div>

    </>
  )
}

export default Home