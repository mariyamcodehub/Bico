'use client';
import { useParams } from 'next/navigation'
import React from 'react'
import campaign from '../../campaign/page';

const CampaignDetails = () => {

    const {id} = useParams();

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{campaign.name}</h2>
          <h2 className="card-title">{campaign.title}</h2>
          
          <div className="card-actions justify-end">
            <Link href={'/campaign-details/'+campaign._id} className="btn btn-primary">Join Campaign</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails