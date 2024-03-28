import React from 'react'

const AdminProfile = () => {
  return (
    <div className='p-3 flex flex-col lg:flex-row'>
      <div className='flex flex-row my-3'>
        <div className="avatar ">
          <div className="w-14 rounded">
            <img src="https://m.media-amazon.com/images/I/611Buwawk6L._AC_UL320_.jpg" />
          </div>
        </div>
        <ul className="menu menu-xs bg-base-200 w-36 mx-4 rounded-box">
          <li><a>Brand details</a></li>
          <li><a>Live Campaign</a></li>
        </ul>
      </div>
      <div className='flex flex-row '>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src="https://m.media-amazon.com/images/I/71JNdvfxj5L._AC_SY200_.jpg" />
          </div>
        </div>
        <ul className="menu menu-xs bg-base-200 w-36 mx-4 rounded-box">
          <li><a>Brand details</a></li>
          <li><a>Live campaign</a></li>
        </ul>
      </div>
      <div className='flex flex-row '>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src="https://m.media-amazon.com/images/I/71JNdvfxj5L._AC_SY200_.jpg" />
          </div>
        </div>
        <ul className="menu menu-xs bg-base-200 w-36 mx-4 rounded-box">
          <li><a>Brand details</a></li>
          <li><a>Live campaign</a></li>
        </ul>
      </div>
      <div className='flex flex-row '>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src="https://m.media-amazon.com/images/I/71JNdvfxj5L._AC_SY200_.jpg" />
          </div>
        </div>
        <ul className="menu menu-xs bg-base-200 w-36 mx-4 rounded-box">
          <li><a>Brand details</a></li>
          <li><a>Live campaign</a></li>
        </ul>
      </div>
    </div>
  )
}

export default AdminProfile;