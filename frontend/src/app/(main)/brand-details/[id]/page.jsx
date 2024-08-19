'use client';
import { useParams } from 'next/navigation'
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const brandDetails = () => {

    const [brandDetail, setBrandDetail] = useState(null);

    const { id } = useParams();

    const fetchBrands = () => {
        fetch(`http://localhost:5000/brand/getbyid/${id}`)
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log(data);
                setBrandDetail(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchBrands();
    }, [])

    const displayBrands = () => {
        if (brandDetail === null) {
            return <h3>Loading...</h3>
        } else {
            return <div className="card w-4/5 bg-base-100 shadow-xl m-10 p-5">
                <div className='avatar size-44 mx-auto rounded-full'>
                    <figure><img className=' w-full' src={'http://localhost:5000/' + brandDetail.image} alt="brand" /></figure></div>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{brandDetail.name}</h2>
                    <h3 className='font-bold'>About</h3>
                    <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>

                    <div className="card-actions justify-end my-3">

                        <button className="btn btn-link text-orange-800">{brandDetail.email}</button>
                    </div>

                    <div className='flex'>
                        <p>Website Link</p>
                        <a href='https://www.linkedin.com/in/mariyam-khan-4176331b4/' className="link no-underline link-primary">LinkedIn</a></div>
                    <div className='flex '>
                        <p>Country</p><p className='text-right'>India</p>
                    </div>
                    <div className='flex'>
                        <p>username</p><p className='text-right'>brand603</p></div>

                    {/* <p>{brandDetail.description}</p>
              <p>{brandDetail.incentive}</p>
              <p>{brandDetail.requiredFollowers}</p> */}


                </div>
            </div>
        }
    }


    return (
        <div className='w-full my-3 flex flex-row'>
            {displayBrands()}
            <div className='flex flex-col'>
                <h1 className='font-bold text-4xl py-10 text-cyan-800'>Campaign History</h1>


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

export default brandDetails;