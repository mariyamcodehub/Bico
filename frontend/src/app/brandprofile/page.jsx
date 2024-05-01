'use client'
import React from 'react'


const brandProfile = () => {


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
      </div>
    </div>
  )
}

export default brandProfile