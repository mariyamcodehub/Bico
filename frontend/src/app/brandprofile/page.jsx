'use client'
import React from 'react'


const brandprofile = () => {


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
            <h2 className="card-title mx-auto">Reebok</h2>


            <h3 className='font-bold'>About</h3>
            <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>
            <div className="card-actions justify-end my-3">
              <button className="btn btn-neutral">Email</button>
            </div>

            <div className='flex'>
              <p>Website-Media Link</p>
              <a href='https://www.linkedin.com/in/mariyam-khan-4176331b4/' className="link no-underline link-primary">LinkedIn</a></div>
            <div className='flex '>
              <p>Country</p><p className='text-right'>India</p>
            </div>
            <div className='flex'>
              <p>username</p><p className='text-right'>brand603</p></div>

          </div>

        </div >

        <div className='flex flex-col w-full '>
          <h1 className='font-bold text-2xl py-10'>Campaign History</h1>
          <div className='grid grid-cols-2 gap-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Reebok</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">show details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default brandprofile;