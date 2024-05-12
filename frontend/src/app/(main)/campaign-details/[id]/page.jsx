'use client';
import { useParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const CampaignDetails = () => {

  const [campaignDetail, setCampaignDetail] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('influencer')));
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
  };
  //function to fetch enrolled members

  const [enrolledMembers, setEnrolledMembers] = useState([]);

  const getEnrolledMembers = async () => {
    const res = await fetch("http://localhost:5000/enroll/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setEnrolledMembers(data);
    setCurrentUser(JSON.parse(localStorage.getItem('influencer')));
  }
  

  useEffect(() => {
    getEnrolledMembers()
  }, [])



  useEffect(() => {
    fetchCampaigns();
  }, [])

  //function to display enrolled members

  const displayCampaign = () => {
    if (campaignDetail === null) {
      return <h3>Loading...</h3>
    } else {
      return <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{displayCampaign.title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={enrollCampaign}>Enroll</button>
          </div>
        </div>
      </div>
    }
  }


  const enrollCampaign = () => {
    if (!currentUser) {
      enqueueSnackbar('Login to participate in Campaign', { variant: 'warning' });
      return;
    }
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
                //update enrolledmember state
                setEnrolledMembers([...enrolledMembers, currentUser]);
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
    <div className='lg:w-4/5 mx-auto my-20 '>
      {displayCampaign()}
      <div className='py-3'>
        <h1 className='text-2xl bg-slate-300 font-bold p-3 text-center'>Enrolled </h1> <div className='flex flex-row'>{

          enrolledMembers.map((member) => {
            return (

              <div className="card card-side bg-base-300 shadow-xl m-5">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">

                  <h3>{member.user}</h3>
                  <h2>{member.image}</h2>
                  <h2>{member.username}</h2>


                </div>
              </div>


            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails;