import React from 'react'
import Navbar from './(main)/navbar'
import Stats from './(main)/stats/page'
import AdminProfile from './admin/profile/page'
import UserProfile from './user/profile/page'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='flex lg:justify-center lg:p-2 p-4 bg-slate-900 shadow-lg'><h1 className="text-3xl font-bold text-white">
        Best Platform for Collaboration!
      </h1></div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className="card card-side bg-base-300 shadow-xl m-5">
          <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New Campaign is released!</h2>
            <p>Click the button to participate in the competition.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
        <div className='p-5 min-h-52 bg-slate-200 my-3'>
          <h1 className='text-3xl font-semibold my-3'>Dashboard</h1>
          <Stats />
        </div>
      </div>
      <div className='py-3'>
        <h1 className='text-2xl bg-slate-900 text-slate-300 p-3'>Brands Category</h1>

        <AdminProfile />
      </div>
      <div className='py-3'>
        <h2 className='text-2xl bg-slate-900 text-slate-300 p-3'>Influencers Category</h2>
        <UserProfile />
      </div>

    </>
  )
}

export default Home