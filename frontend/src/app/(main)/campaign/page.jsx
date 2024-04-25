'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const campaign = () => {

  const [campaignList, setCampaignList] = useState([]);

  const fetchCampaigns = () => {
    fetch('http://localhost:5000/campaign/getall')
      .then((response) => {
        return response.json();
      }).then(data => {
        console.log(data);
        setCampaignList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCampaigns();
  }, [])

  const displayCampaigns = () => {
    return campaignList.map(campaign => (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{campaign.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href={'/campaign-details/'+campaign._id} className="btn btn-primary">Join Campaign</Link>
          </div>
        </div>
      </div>
    ))
  }


  return (
    <div>
      <div className="hero w-full bg-base-200 flex flex-col p-8">
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Live Campaigns</h1>
          <p className='text-sm'>Here Connect to the Brands Collaboration and Earn With Your Creativity</p>
        </div>
        <div className="divider divider-accent w-3/5 mx-auto "></div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
      </div>
      <div className='grid grid-cols-4 gap-20'>
        {displayCampaigns()}
      </div>
    </div>
  )
}

export default campaign