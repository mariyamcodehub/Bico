'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './(main)/navbar'
import Stats from './(main)/stats/page'
import AdminProfile from './admin/profile/page'
import UserProfile from './user/profile/page'
import Footer from './(main)/footer'
import Link from 'next/link';

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
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold "> BICO! </h1>
            <h2 className='text-2xl font-bold'>"Brand Influencer Collaboration"</h2>
            <p className="mb-5 text-xl"> BICO is a platform for all the social media influencers and Brands/Companies to collaborate!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className='flex lg:justify-center lg:p-2 p-4 bg-slate-300 shadow-lg'><h1 className="text-3xl font-bold">
        Best Platform for Collaboration!
      </h1></div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
      <div className='text-center bg-cover bg-center bg-slate-200 my-3'> 
        <h1 className='m-20  text-5xl font-bold'>See Live Campaigns !</h1>
        <Link href={'/campaign-details/' + campaign._id} className="btn btn-primary">Join Campaign</Link>

      </div>
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
          <h1 className='text-3xl font-semibold my-3 text-center'>Dashboard</h1>
          <Stats />
        </div>
      </div>
      
      <div className='py-3'>
        <h1 className='text-2xl bg-slate-300 font-bold p-3'>Brands </h1>

        <AdminProfile />
      </div>
      <div className='py-3'>
        <h2 className='text-2xl bg-slate-300 font-bold p-3'>Influencers</h2>
        <UserProfile />
      </div>
      <Footer />

    </>
  )
}

export default Home