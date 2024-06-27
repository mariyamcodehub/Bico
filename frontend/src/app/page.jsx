'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import Footer from './(main)/footer';
import Link from 'next/link';
import Navbar from './(main)/navbar';

let currentIndex = 0;
const itemsPerPage = 4;

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

  return (
    <>
      <Navbar />
      <div className="hero bg">
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
          <h1 className='m-10 text-5xl font-bold italic text-green-700 border-b-4'>See Live Campaigns!</h1>
        </div>
        <div className='carousel-container '>
          <div className='carousel w-full '>
            {campaign.map((camp) => (
              <div className=' w-full' key={camp._id}>
                <div className="card card-bordered w-72 bg-base-100 shadow-xl">
                  <figure className='w-74 h-32'>
                    <img src="https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg" alt="Campaign" />
                  </figure>
                  <div className="card-body w-60">
                    <h2 className="card-title">{camp.title}</h2>
                    <h3>{camp.name}</h3>
                    <p>{camp.incentive}</p>
                    <div className="card-actions justify-end ">
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
      <div className='py-3'>
        <div className='text-center shadow-xl p-20' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-3xl font-bold p-3 text-teal-800 border-b border-yellow-400'>Brands</h1>
          <p className='text-xl py-3'>Meet with the brands directly and check their live campaigns</p>
          <p className='text-xl'>Get the best offer!</p>
        </div>
        <div className='flex flex-row p-3'>
          {brand.map((brands) => (
            <div className="card bg-base-100 shadow-xl m-5 w-60" key={brands._id}>
              <figure><img src={'http://localhost:5000/' + brands.image} alt="Brand" /></figure>
              <div className="card-body overflow-hidden w-60 p-3">
                <h3 className='card-title'>{brands.name}</h3>
                <p className='badge'>{brands.email}</p>
                <p>{brands.website}</p>
                <Link href={'/'}>
                  <button className='btn float-right'>Message</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-3'>
        <div className='text-center p-20 shadow-xl' style={{ backgroundColor: '#DCEDC8' }}>
          <h1 className='text-3xl font-bold p-3 text-teal-800 border-b border-red-500'>Influencers</h1>
          <p className='text-xl py-3'>Find the best Influencer to collaborate and reach the right customers...</p>
          <p className='text-xl'>Grow your business by starting a campaign</p>
        </div>
        <div className='carousel-container'>
          <div className='carousel w-full'>
            {influencer.map((influ, index) => (
              <div className="carousel-item relative" key={index}>
                <div className="card w-64 bg-base-100 shadow-xl m-5 flex">
                  <figure className='h-44 w-64 avatar'><img src={'http://localhost:5000/' + influ.image} alt="Influencer" /></figure>
                  <div className="card-body overflow-hidden p-3 w-64">
                    <h3 className='card-title'>{influ.name}</h3>
                    <p className='badge'>{influ.email}</p>
                    <p className='badge'>{influ.social}</p>
                    <Link href={'/influencers'}>
                      <button className='btn float-right'>Message</button>
                    </Link>
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
      <Footer />
    </>
  );
};

export default Home;