'use client';
import { useParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const influencerDetails = () => {

    const [influencerDetails, setinfluencerDetails] = useState(null);

    const { id } = useParams();

    const fetchinfluencers = () => {
        fetch(`http://localhost:5000/user/getbyid/${id}`)
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log(data);
                setinfluencerDetails(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchinfluencers();
    }, [])

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

    const displayinfluencers = () => {
        if (influencerDetails === null) {
            return <h3>Loading...</h3>
        } else {
            return <div className="card w-4/5 bg-base-100 shadow-xl m-10 p-5">
                <div className='avatar size-44 mx-auto rounded-full'>
                    <figure><img className=' w-full' src={'http://localhost:5000/' + influencerDetails.image} alt="influencer" /></figure></div>
                <div className="card-body">
                    <h2 className="card-title capitalize mx-auto">{influencerDetails.name}</h2>
                    <h2 className='card-title justify-center text-cyan-700'><span className=' text-xl '>{formatFollowers(influencerDetails.followers)}</span></h2>
                    <h3 className='font-bold'>About</h3>
                    <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>

                    <div className="card-actions justify-end my-3">

                        <button className="btn btn-link text-orange-800">{influencerDetails.email}</button>
                    </div>

                    <div className='flex'>
                        <p>Social-Media Link</p>
                        <a href='https://www.linkedin.com/in/mariyam-khan-4176331b4/' className="link no-underline link-primary">LinkedIn</a></div>
                    <div className='flex '>
                        <p>Country</p><p className='text-right'>India</p>
                    </div>
                    <div className='flex'>
                        <p>username</p><p className='text-right'>influencer603</p></div>

                    {/* <p>{influencerDetails.description}</p>
              <p>{influencerDetails.incentive}</p>
              <p>{influencerDetails.requiredFollowers}</p> */}


                </div>
            </div>
        }
    }


    return (
        <div className='w-full my-3 flex flex-row'>
            {displayinfluencers()}
            <div className='flex flex-col'>
                <h1 className='font-bold text-4xl py-10 text-cyan-800'>Previous Participation</h1>


                <div className='flex flex-col '>
                    <div className="card card-side bg-base-300 shadow-xl m-2">
                        <figure ><img className='p-2 ' src="https://thumbs.dreamstime.com/b/generated-image-cat-suit-tie-sitting-top-old-car-322104901.jpg" alt="campaign" /></figure>
                        <div className="card-body">

                            <h2 className="card-title">Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam doloremque sequi nihil fugit!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-300 shadow-xl m-2">
                        <figure><img className='p-2 ' src="https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg" alt="campaign" /></figure>
                        <div className="card-body">

                            <h2 className="card-title">Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam doloremque sequi nihil fugit!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default influencerDetails;