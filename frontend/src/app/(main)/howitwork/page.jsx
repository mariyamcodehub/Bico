import React from 'react'
import './howitwork.css'

const Howitwork = () => {
    return (
        <>
            <div className='m-12 '>
                <h1 className='text-5xl font-thin capitalize text-center font-sans'>how bico works?</h1>
                <h1 className='uppercase font-bold text-center text-3xl mt-4 tracking-widest font-mono text-teal-600'>
                    Collaborate with Creators
                </h1>
                <h2 className='uppercase font-bold text-center text-3xl tracking-widest font-mono text-teal-600'>Fast easy and fun</h2>
                <p className='text-sm text-center my-5'>Build and reach your audience with creator generated content that's more relatable to your customers.</p>

                <div className="hero bg-clr">
                    <div className=" hero-content md:flex-row flex-col-reverse">
                        <div className=' w-2/4 md:h-96 h-56 flex justify-center md:m-10'>
                            <div className='joinImg'></div>
                        </div>
                        <div className='text-center'>
                            <h1 className="text-2xl font-bold">All You Need Is Here!!!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='w-full md:mt-20 flex md:flex-row flex-col-reverse justify-around'>
                    <iframe className='w-3/5 md:w-2/5' src="https://www.youtube.com/embed/71ulJ9j4jhY?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1" title="YouTube video player"
                        autoplay="1" loop="1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>

                    <div className='w-96 mt-10 md:mt-20 pr-10 mr-10'>
                        <h1 className="text-2xl font-bold">Create Brand Account!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
                <div className='w-full  md:mt-20 flex md:flex-row-reverse justify-around flex-col-reverse'>

                    <iframe className='w-3/5 md:w-2/5' src="https://www.youtube.com/embed/qly9gaZ5Ct4?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1" title="YouTube video player" autoplay="1" loop="1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div className='w-96 mt-10 md:mt-16 '>
                        <h1 className="text-2xl font-bold">Find Influencers with Specification</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
                <div className="hero bg-clr flex flex-col-reverse md:flex-row justify-evenly mt-10 md:mt-20 ">

                    <div className=' flex flex-col m-3 md:m-10 text-center'>

                        <h1 className='text-cyan-700 font-bold text-2xl'>Hire Influencer!</h1>

                        <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus reiciendis id, impedit soluta, illo velit placeat esse rem quaerat expedita architecto ipsam aliquid?</p>
                    </div>
                    <div className='text-xl md:text-5xl font-extrabold mx-10'>Or</div>

                    <div className='flex flex-col m-2 md:m-10 text-center'>
                        <h1 className="text-2xl font-bold text-teal-700">Add Campaign</h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nobis eos ipsa, necessitatibus voluptatem dolorem laboriosam iste assumenda quos sit illo iure non dignissimos.
                        </p>
                        <iframe className='w-4/5 md:w-96 md:h-56' src="https://www.youtube.com/embed/7pyyWoBNyag?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1" title="YouTube video player" autoplay="1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Howitwork