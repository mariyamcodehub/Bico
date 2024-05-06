import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row " style={{ backgroundImage: 'url(https://wallpaper-house.com/data/out/8/wallpaper2you_262369.jpg)' }}>
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

export default page