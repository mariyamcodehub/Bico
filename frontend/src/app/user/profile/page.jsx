'use client'
import React, { useEffect, useState } from 'react'

const UserProfile = () => {

  const [profileList, setProfileList] = useState([]);
  const fetchProfiles = () => {
    fetch('http://localhost:5000/user/getall')
      .then((response) => {
        return response.json();
      }).then(data => {
        console.log(data);
        setProfileList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    fetchProfiles();
  }, [])


  const displayProfile = () => {
    return profileList.map((profile) => (
      <div className=' lg:px-4 py-2 grid lg:grid-cols-4 grid-cols-1'>
        <div className="card w-64 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">{profile.username}</h2>
            <p>{profile.email}</p>
            <div className="stats shadow ">

              <div className="stat ">
                <div className="stat-title ">Total Followers</div>
                <div className="stat-value text-sm">89,400</div>
              </div>
            </div>


            <div className="card-actions ">
              <a href="/user/profileDetails"><button className="badge badge-primary">Watch Profile</button></a>

              <div className="badge badge-accent">Message</div>
            </div>
          </div>
        </div>

      </div>
    )

    )
  }
  return (
    <>

      <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-10'>
        {displayProfile()}
      </div>

    </>
  )
}

export default UserProfile;