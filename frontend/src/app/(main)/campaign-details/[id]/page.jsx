'use client';
import { useParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const CampaignDetails = () => {

  const [campaignDetail, setCampaignDetail] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { id } = useParams();

  const fetchCampaigns = () => {
    fetch('http://localhost:5000/campaign/getbyid/' + id)
      .then((response) => {
        return response.json();
      }).then(data => {
        console.log(data);
        setCampaignDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCampaigns();
  }, [])

  const displayCampaign = () => {
    if (campaignDetail === null) {
      return <h3>Loading...</h3>
    } else {
      return <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={enrollCampaign}>Enroll</button>
          </div>
        </div>
      </div>
    }
  }


  const enrollCampaign = () => {
    // check if user is already enrolled
    fetch('http://localhost:5000/enroll/getbyuser/' + currentUser._id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data !== null) {
          enqueueSnackbar('User Already enrolled', { variant: 'warning' })
        } else {

          fetch('http://localhost:5000/enroll/add', {
            method: 'POST',
            body: JSON.stringify({
              user: currentUser._id,
              campaign: id
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((response) => {
              if (response.status === 200) {
                enqueueSnackbar('User enrolled', { variant: 'success' })
              }
            }).catch((err) => {
              console.log(err);
              enqueueSnackbar('Something went wrong', { variant: 'error' })
            });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar('Something went wrong', { variant: 'error' })
      });
  }

  return (
    <div className='lg:w-4/5 mx-auto my-20'>
      {displayCampaign()}
    </div>
  )
}

export default CampaignDetails