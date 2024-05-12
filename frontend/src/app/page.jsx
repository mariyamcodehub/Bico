'use client';
import './page.css'
import React, { useEffect, useState } from 'react'
import Stats from './(main)/stats/page'
import Footer from './(main)/footer'
import Link from 'next/link';
import Navbar from './(main)/navbar';

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

  const [brand, setbrand] = useState([]);

  const getbrand = async () => {
    const res = await fetch("http://localhost:5000/brand/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setbrand(data);
  }

  useEffect(() => {
    getbrand()
  }, [])

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
      <Navbar />
      <div className="hero min-h-screen bg" >
        <div className="hero-overlay bg-opacity-60 "></div>
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
<<<<<<< HEAD
          <Link href={'/campaign-details/' + campaign._id} className="btn btn-primary">Join Campaign</Link>
=======
          <a href="/campaign"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Click Here!</button></a>

>>>>>>> 80b6ad517eaf4399e885629b6d9a2c69921cc2ea
        </div>
        {
          campaign.map((camp) => {

            return (
              <div className='flex flex-col'>
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
<<<<<<< HEAD



      <div className='py-3'>
        <h1 className='text-2xl bg-slate-300 font-bold p-3 text-center'>Brands </h1> <div className='flex flex-row'>{
=======
>>>>>>> 80b6ad517eaf4399e885629b6d9a2c69921cc2ea

          brand.map((brands) => {
            return (

              <div className="card card-side bg-base-300 shadow-xl m-5">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">

                  <h3>{brands.name}</h3>
                  <p>{brands.email}</p>
                  <p>{brands.website}</p>

                </div>
              </div>


            )
          })
        }
        </div>
      </div>
      <div className='py-3'>
        <h1 className='text-2xl bg-slate-300 font-bold p-3 text-center'>Influencers </h1> <div className='flex flex-row'>{

          influencer.map((influencers) => {
            return (

              <div className="card card-side bg-base-300 shadow-xl m-5">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
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
      <Footer />
    </>
  )
}


export default Home