'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import Footer from './(main)/footer';
import Link from 'next/link';
import Navbar from './(main)/navbar';
import Howitwork from './(main)/howitwork/page';
import Feedbackform from './(main)/feedbackform/page';

let currentIndex = 0;
const itemsPerPage = 5;

function updateCarousel() {
  const items = document.querySelector('.carousel');
  items.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const Home = () => {
  const [campaign, setCampaign] = useState([]);
  const [brand, setBrand] = useState([]);
  const [influencer, setInfluencer] = useState([]);

  const getCampaign = async () => {
    const res = await fetch("http://localhost:5000/campaign/getall");
    const data = await res.json();
    setCampaign(data.slice(0, itemsPerPage)); // Limit items per page
  }

  const getBrand = async () => {
    const res = await fetch("http://localhost:5000/brand/getall");
    const data = await res.json();
    console.log(data);
    setBrand(data.slice(0, itemsPerPage)); // Limit items per page
  }

  const getInfluencer = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    const data = await res.json();
    console.log(data)
    setInfluencer(data.slice(0, itemsPerPage)); // Limit items per page
  }

  useEffect(() => {
    getCampaign();
    getBrand();
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
      <Navbar />

      <div className="hero bg ">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center mt-7">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-amber-300"> BICO! </h1>
            <h1 className="text-3xl font-bold text-teal-800">Best Platform for Collaboration!</h1>
            <p className="mb-20 text-sm text-amber-50"> BICO is a platform for all the social media influencers and Brands/Companies to collaborate!</p>
            <button className="btn btn-outline text-amber-50 mt-10">Get Started</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='text-center bg-cover bg-center my-3 '>
          <h1 className='m-8 text-xl md:text-5xl font-bold italic text-green-700 border-b-4'>See Live Campaigns!</h1>
        </div>
        <div className='carousel-container'>
          <div className='carousel'>
            {campaign.map((camp) => (
              <div className='mx-2' key={camp._id}>
                <div className="card card-bordered w-44 h-56 md:w-72 md:h-64 bg-base-100 shadow-xl">
                  <figure className='object-fill'>
                    <img src={'http://localhost:5000/' + camp.image} alt="Campaign" />
                  </figure>
                  <div className="card-body p-3 w-44 md:w-72 gap-2">

                    <div className='w-full justify-between flex md:flex-row flex-col'>
                      <h2 className="md:card-title text-md font-semibold text-orange-500">{camp.title}</h2>


                      <span className='badge bg-slate-200'>
                        <svg width="20" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <text x="10" y="60" font-size="70" font-family="Arial, sans-serif">₹</text>
                        </svg>{camp.incentive}</span></div>


                    <div className="card-actions justify-center">
                      <Link href={'/campaign-details/' + camp._id}>
                        <button className="btn btn-outline btn-sm">Join Campaign</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className=" absolute flex justify-end left-5 right-5 top-1/2 ">
            <Link href="/campaign">
              <button className="btn btn-circle btn-lg  show-all">Show more</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Howitwork />
      </div>
      <div className='py-3'>
        <div className='text-center shadow-xl p-3 md:p-20' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-xl md:text-5xl font-bold p-3 text-stone-600 border-b border-yellow-400 italic'>Brands</h1>
          <p className='text-sm md:text-xl py-3'>Meet with the brands directly and check their live campaigns</p>
          <p className='text-sm md:text-xl'>Get the best offer!</p>
        </div>
        <div className='carousel-container my-3'>
          <div className='carousel '>
            {brand.map((brands) => (
              <div className='mx-2' key={brands._id}>
                <div className="card card-bordered w-44 h-56 md:w-72 md:h-64 bg-base-100 shadow-xl">
                  <figure className='object-fill'>
                    <img src={'http://localhost:5000/' + brands.image} alt="Brands logo" />
                  </figure>
                  <div className="card-body p-3 w-44 md:w-72">

                    <div className='w-full justify-between flex md:flex-row flex-col gap-2'>
                      <h2 className="card-title ">{brands.name}</h2>


                      <span className='badge bg-sky-200 p-2 md:p-4 md:gap-2 gap-16 '>
                        activity
                        <button className='bg-sky-700 text-white btn-ghost btn-circle size-5 md:size-7'>34</button></span></div>


                    <div className="card-actions justify-center md:justify-end">
                      <Link href={'/brand-details/' + brands._id}>
                        <button className="btn btn-outline btn-sm">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className=" absolute flex justify-end left-5 right-5 top-1/2 ">
            <Link href="/brands">
              <button className="btn btn-circle btn-lg  show-all">Show more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='py-3'>
        <div className='text-center p-2 md:p-20 shadow-xl' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-xl md:text-5xl font-bold p-3 text-stone-600 border-b border-red-500 italic'>Influencers</h1>
          <p className='text-sm md:text-xl py-3'>Find the best Influencer to collaborate and reach the right customers...</p>
          <p className='text-sm md:text-xl text-yellow-700'>Grow your business by starting a campaign</p>
        </div>
        <div className='carousel-container'>
          <div className='carousel gap-3 p-5 w-full'>
            {influencer.map((influ, index) => (
              <div className="carousel-item relative" key={index}>
                <div className="card h-60 w-52 md:h-64 md:w-60 bg-base-100 shadow-xl flex">
                  <figure className=' w-52 md:w-60'><img src={'http://localhost:5000/' + influ.image} alt="Influencer" /></figure>
                  <div className="card-body p-3 w-52 md:w-60">
                    <h3 className='card-title'>{influ.name}</h3>
                    <p className='badge p-3 gap-2 bg-sky-200'><span className='font-semibold bg-sky-100 '>Followers</span>{formatFollowers(influ.followers)}</p>
                    <div>
                      <Link href={'/influencer-detail/' + influ._id}>
                        <button className="btn btn-outline btn-sm">Details</button>
                      </Link>
                      <Link href={'/influencers'}>
                        <button className='btn float-right btn-sm'>Message</button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute flex justify-end left-5 right-5 top-1/2">
            <Link href="/influencers">
              <button className="btn btn-circle show-all">Show All</button>
            </Link>
          </div>
        </div>
      </div>
      <Feedbackform />
      <Footer />
    </>
  );
};

export default Home;