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
      <div className="card card-compact min-w-64 bg-base-100 shadow-xl gap-0 m-0 p-0">
        <figure><img className='w-full h-40' src={'http://localhost:5000/' + campaign.image} alt="img" /></figure>

        <div className="card-body gap-0 m-0 p-0">
          <div className='flex flex-row justify-between'>
            <h1 className='text-emerald-700 font-semibold text-xl gap-0 m-0 p-0 border-b-4 border-yellow-400'>{campaign.name}</h1>
            <div className="card-actions justify-end">
              <Link href={'/campaign-details/' + campaign._id} className="btn btn-outline btn-sm">Join Campaign</Link>
            </div>
          </div>
          <h2 className='card-title gap-0 mt-3 p-0'>{campaign.title}</h2>
          <h2 className="card-title gap-0 m-0 p-0">
            <svg width="30" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <text x="30" y="70" font-size="70" font-family="Arial, sans-serif">₹</text>
            </svg>{campaign.incentive}</h2>

          <p className='gap-0 m-0 p-0'>{campaign.description}</p>


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
      <div className='grid lg:grid-cols-4 md:grid-cols-3 my-3 px-3 gap-3'>
        {displayCampaigns()}
      </div>
    </div>
  )
}

export default campaign;