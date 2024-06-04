'use client';
import './page.css'
import React, { useEffect, useState } from 'react'

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
      <div className="hero " >
        <div className="hero-overlay bg-opacity-30 "></div>
        <div className="hero-content text-center mt-7 ">

          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-amber-300"> BICO! </h1>
            <h2 className='text-2xl font-bold text-amber-50 mb-3'>"Brand Influencer Collaboration"</h2>
            <p className="mb-20 text-sm text-amber-50"> BICO is a platform for all the social media influencers and Brands/Companies to collaborate!</p>
            <button className="btn btn-outline text-amber-50 mt-10">Get Started</button>
          </div>
        </div>
      </div>
      <div className='flex lg:justify-center lg:p-2 p-4  shadow-lg'><h1 className="text-3xl font-bold text-teal-800">
        Best Platform for Collaboration!
      </h1></div>
      {/* grid lg:grid-cols-3 grid-cols-1  */}
      <div className='flex flex-col-6 '>
        <div className='text-center bg-cover bg-center  my-3'>
          <h1 className='m-20  text-3xl font-bold'>See Live Campaigns !</h1>

        </div>
        {
          campaign.map((camp) => {

            return (
              <div className='flex flex-col flex-wrap row-span-2 row-start-2 '>
                <div className="card card-side bg-base-100 shadow-xl m-5">
                  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{camp.title}</h2>
                    <h3>{camp.name}</h3>
                    <p>{camp.incentive}</p>
                    <div className="card-actions justify-end">
                      <Link href={'/campaign-details/' + campaign._id} className="btn btn-outline">Join Campaign</Link>
                    </div>
                  </div>
                </div>
              </div>

            )
          })

        }


      </div>



      <div className='py-3'>
        <div className=' text-center shadow-xl p-20' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-3xl  font-bold p-3 text-teal-800 border-b border-yellow-400'>Brands </h1>
          <p className='text-xl py-3'>Meet with the brands direct and check their live campaigns</p>
          <p className='text-xl'>Get the best offer!</p>
        </div>
        <div className='flex flex-row p-3 '>

          {

            brand.map((brands) => {
              return (

                <div className="card  bg-base-100 shadow-xl m-5 w-60">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSKaKJryTlK-4-p2boqnQVWOXDMQpH5E3j5e1gA9bbw&s" alt="Movie" />
                  <div className="card-body overflow-hidden ">

                    <h3 className='card-title'>{brands.name}</h3>
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
        <div className=' text-center p-20 shadow-xl' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-3xl  font-bold p-3 text-teal-800 border-b border-red-500'>Influencers </h1>
          <p className='text-xl py-3'>find the best Influencer to collaborate and reach to the right customers...</p>
          <p className='text-xl'>Grow your business by starting campaign</p>
        </div>
        <div className='flex flex-row '>{

          influencer.map((influ) => {
            return (

              <div className="card w-64 bg-base-100 shadow-xl m-5 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9Cgyzd7IBfyCHwbzaxjpIobt1AmUPmnomxD93tZkWA&s" alt="Movie" />
                <div className="card-body overflow-hidden p-3 w-64">

                  <h3 className='card-title'>{influ.name}</h3>
                  <p className='badge'>{influ.email}</p>
                  <p className='badge'>{influ.social}</p>
                  <Link href={'/'} ><button className='btn float-right'>message</button></Link>
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