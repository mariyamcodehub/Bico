'use client'
<<<<<<< HEAD
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
=======

import React from 'react'
import { useEffect, useState } from 'react'

const brandprofileDetails = () => {

    const [detailsList, setDetailsList] = useState([]);
    const fetchDetails = () => {
        fetch('http://localhost:5000/user/getall')
            .then((response) => {
                return response.json();
            }).then(data => {
                console.log(data);
                setDetailsList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
import React from 'react'


const brandProfile = () => {


    useEffect(() => {
        fetchDetails();
    }, [])

    const details = () => {
        return detailsList.map((detail) => (
            < div className="card w-96 bg-base-100 shadow-xl m-10" >
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmlcrEfYZdBUHVwXggzrQiS9gyYH_FTOogg&s" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Anaya Joe</h2>
                    <h2 className="text-md">{detail.username}</h2>
                    <h3>Bio</h3>
                    <p>Hey! I am Anaya Lorem ipsum dolor sit amet cliquam ea est necessitatibus quam, corporis maxime donsectetur adipisicing elit. Et excepturi blanditiis aolor officiis unde ratione ducimus?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contact</button>
                    </div>
                    <div>website link</div>
                    <div>Country</div>
                    <div>{detail.username}</div>
                </div>

            </div >
        )

        );

    }


    return (
        <>
            <div className="navbar bg-slate-200">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BICO</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="message"><g fill="#200E32" transform="translate(2 3)"><path d="M19.9995923,5.05278334 L19.9995923,12.9472011 C20.0043147,14.2841091 19.4766326,15.5680066 18.5328791,16.5158446 C17.5891256,17.4636826 16.3067925,17.997634 14.9685837,18 L5.05767467,18 C3.71711397,18.0023415 2.43065079,17.4719729 1.48189642,16.525802 C0.53314205,15.5796312 0,14.2953473 0,12.9560812 L0,5.05278334 C0.000730045959,4.46465864 0.106069271,3.88134314 0.311104769,3.33004201 C1.03357227,1.33225686 2.9314488,0.000767553715 5.05767467,5.32907052e-15 L14.9419176,5.32907052e-15 C17.0940711,-0.00120130637 19.0103994,1.3606783 19.7151537,3.39220278 C19.9107015,3.92372534 20.0071062,4.48654586 19.9995923,5.05278334 Z" opacity=".4"></path><path d="M19.7151537,3.40108289 L19.6173779,3.48100388 C17.7774154,4.91070158 11.8219812,9.69708083 11.8219812,9.69708083 C10.7864111,10.5383811 9.30206825,10.5383811 8.26649815,9.69708083 C8.26649815,9.69708083 2.34661883,4.91958169 0.506656338,3.48988399 L0.311104769,3.33892212 C1.03060224,1.33763595 2.92915926,0.00211731296 5.05767467,7.95159307e-07 L14.9419176,7.95159307e-07 C17.0963982,0.000106643322 19.0134302,1.36605277 19.7151537,3.40108289 Z"></path></g></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    brandprofile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    {details()}
                </div>
                <div >
                    <h2 className='font-bold text-2xl '>Campaign History</h2>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default brandprofileDetails;


  return (

    <div className="card w-96 bg-base-100 shadow-xl m-10 ">
      <div className="avatar ">
        <div className="">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Reebok!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Show more</button>
        </div>
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
      </div>
    </div>
  )
}

export default brandProfile;

>>>>>>> 2e54456940c7e3dd1e887726282b88c043f3d03c
