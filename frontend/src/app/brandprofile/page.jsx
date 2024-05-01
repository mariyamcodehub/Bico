'use client'
<<<<<<< HEAD
import React from 'react'


const brandProfile = () => {
=======
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const brandprofile = () => {


  const [brandprofileList, setbrandprofileList] = useState([]);

  const fetchprofile = () => {
    fetch('http://localhost:5000/brand/getall')
      .then((response) => {
        return response.json();
      }).then(data => {
        console.log(data);
        setbrandprofileList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchprofile();
  }, [])

  const displayprofile = () => {
    return brandprofileList.map(profile => (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{profile.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href={'/brandprofile-details/' + profile._id} className="btn btn-primary">Join Campaign</Link>
          </div>
        </div>
      </div>
    ))
  }
>>>>>>> 20186c301147eb3bf7abdde88579d78b96d8c44d


  return (

    <div className="card w-96 bg-base-100 shadow-xl m-10 ">
      <div className="avatar ">
        <div className="">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " />
        </div>
      </div>
<<<<<<< HEAD
      <div className="card-body items-center text-center">
        <h2 className="card-title">Reebok!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Show more</button>
        </div>
=======
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl m-10 ">
<div className="avatar ">
  <div className="">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    <div className='grid grid-cols-4 gap-20'>
        {displayprofile()}
>>>>>>> 20186c301147eb3bf7abdde88579d78b96d8c44d
      </div>
    </div>
  )
}

export default brandProfile