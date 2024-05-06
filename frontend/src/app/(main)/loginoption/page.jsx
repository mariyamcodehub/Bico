import React from 'react'

const page = () => {
    return (
        <>
            <div>
                <div className="flex flex-col w-full lg:flex-row " style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg)' }}>
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-36">Are you Influencer?
                        <a href='/login' className="link">Login!</a></div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-36">Login! as a Brand
                        <a href='/brandlogin' className="link">Login!</a>
                    </div>
                </div>
            </div>
            <footer />
        </>
    )
}

export default page