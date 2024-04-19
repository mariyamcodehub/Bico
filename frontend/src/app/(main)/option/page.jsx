
import React from 'react'

const option = () => {
  return (
    <div>
        <div className="flex flex-col w-full lg:flex-row " style={{backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/05/37/57/19/1000_F_537571990_B9Tv3Cva6DM5c6zlOPcViz984HxlMxHP.jpg)'}}>
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-36">Are you Influencer?
  <a href='/signup' className="link">SignUp!</a></div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-36">SignUp as a Brand
  <a href='/brandsignup' className="link">SignUp!</a>
  </div>
</div>
    </div>
  )
}

export default option