'use client'
import Stats from '../stats/page'
import React from 'react'


const profileDetails = () => {


    return (
        <>
            <div className='flex flex-row '>
                < div className="card  bg-base-100 shadow-xl m-10" >
                    <div className="avatar">
                        <div className="w-24 mx-auto rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObrSoiAtwwIeyvfW8BseRWrrnqeQtWf5Nw43Rm_ajVSpeab6hdmdVOCzt-pcOIkGDZvo&usqp=CAU" />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Anaya</h2>
                        <div className='flex justify-between' >
                            <span className='font-bold'>Category</span>
                            <div className="badge bg-amber-50 p-3">Creator</div>
                        </div>

                        <div className='flex'>
                            <p>Social-Media Link</p>
                            <a href='https://www.linkedin.com/in/mariyam-khan-4176331b4/' className="link no-underline link-neutral">LinkedIn</a></div>
                        <div className='flex '>
                            <p>Country</p><p className='text-right'>India</p>
                        </div>
                        <div className='flex'>
                            <p>username</p><p className='text-right'>mariyamkha603</p></div>
                        <div className="card-actions justify-end my-3">
                            <button className="btn btn-success">Contact</button>
                        </div>
                        <h3 className='font-bold'>Description</h3>
                        <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>
                    </div>

                </div >
                <div className='flex flex-col'>
                    <div className='p-5 min-h-52  my-3'>
                        <h1 className='text-3xl font-semibold my-3 text-center'>Analytics</h1>
                        <Stats />
                    </div>
                    <div className='flex flex-col w-full '>
                        <h1 className='font-bold text-2xl py-10'>Campaign History</h1>
                        <div className='grid grid-cols-2 '>
                            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5RedeRraxXQaRSzMojfftjikB_rCBqs3Rw&s" alt="Shoes" /></figure>
                                <div className="card-body p-3">
                                    <h2 className="card-title">Shoes!</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-success">Show details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeizyn8SwFNfeJdYexfcqyurpCe47SKVR0Ew&s" alt="Shoes" /></figure>
                                <div className="card-body p-3">
                                    <h2 className="card-title">Shoes!</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-success">Show details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default profileDetails;