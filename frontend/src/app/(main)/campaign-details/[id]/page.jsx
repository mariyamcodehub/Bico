'use client';
import { useParams } from 'next/navigation'
import React from 'react'

const CampaignDetails = () => {

    const {id} = useParams();

  return (
    <div>CampaignDetails</div>
  )
}

export default CampaignDetails