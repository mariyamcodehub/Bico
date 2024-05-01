'use client'
import React from 'react'


const profileDetails = () => {


    return (
        <>
            <div className='flex flex-row '>
                < div className="card w-3/5 bg-base-100 shadow-xl m-10 p-5" >
                    <div className="avatar">
                        <div className="w-24 mx-auto rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Anaya Joe</h2>
                        <div className="stats shadow ">

                            <div className="stat ">
                                <div className="stat-title ">Total Followers</div>
                                <div className="stat-value text-sm">89,400</div>
                            </div>
                        </div>

                        <h3 className='font-bold'>Bio</h3>
                        <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>
                        <div className="card-actions justify-end my-3">
                            <button className="btn btn-neutral">Contact</button>
                        </div>

                        <div className='flex'>
                            <p>Social-Media Link</p>
                            <a href='https://www.linkedin.com/in/mariyam-khan-4176331b4/' className="link no-underline link-primary">LinkedIn</a></div>
                        <div className='flex '>
                            <p>Country</p><p className='text-right'>India</p>
                        </div>
                        <div className='flex'>
                            <p>username</p><p className='text-right'>mariyamkha603</p></div>

                    </div>

                </div >

                <div className='flex flex-col w-full '>
                    <h1 className='font-bold text-2xl py-10'>Campaign History</h1>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profileDetails;