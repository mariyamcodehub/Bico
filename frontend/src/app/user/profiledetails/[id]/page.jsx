'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useInfluencerContext } from '@/context/InfluencerContext';
import Stats from '@/app/user/stats/page';

const ProfileDetails = () => {
    const { id } = useParams();
    const { currentInfluencer, fetchInfluencer } = useInfluencerContext();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    await fetchInfluencer(id);
                }
            } catch (error) {
                console.error('Error fetching influencer:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, fetchInfluencer]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!currentInfluencer) {
        return <p>No influencer data available.</p>;
    }

    return (
        <div className='flex flex-row'>
            <div className="card bg-base-100 shadow-xl m-10">
                <div className="avatar">
                    {/* <div className="w-24 mx-auto rounded-full">
                    <img src={`http://localhost:5000/${currentInfluencer.image}`} alt="profile" />
                </div> */}
                </div>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{currentInfluencer.name}</h2>
                    <div className='flex justify-between'>
                        <span className='font-bold'>Category</span>
                        <div className="badge bg-amber-50 p-3">{currentInfluencer.category}</div>
                    </div>
                    <div className='flex'>
                        <p>Social-Media Link</p>
                        <a href={currentInfluencer.socialLink} className="link no-underline link-neutral">{currentInfluencer.socialLinkLabel}</a>
                    </div>
                    <div className='flex'>
                        <p>Country</p><p className='text-right'>{currentInfluencer.country}</p>
                    </div>
                    <div className='flex'>
                        <p>Username</p><p className='text-right'>{currentInfluencer.username}</p>
                    </div>
                    <div className="card-actions justify-end my-3">
                        <button className="btn btn-success">Contact</button>
                    </div>
                    <h3 className='font-bold'>Description</h3>
                    <p>{currentInfluencer.description}</p>
                    <button className="btn btn-primary" onClick={() => router.push(`/user/editprofile/${id}`)}>Edit Profile</button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='p-5 min-h-52 my-3'>
                    <h1 className='text-3xl font-semibold my-3 text-center'>Analytics</h1>
                    <Stats />
                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='font-bold text-2xl py-10'>Campaign History</h1>
                    <div className='grid grid-cols-2'>
                        {currentInfluencer.campaignHistory?.map((campaign, index) => (
                            <div key={index} className="card card-compact w-72 bg-base-100 shadow-xl">
                                <figure><img src={`http://localhost:5000/${campaign.image}`} alt="Campaign" /></figure>
                                <div className="card-body p-3">
                                    <h2 className="card-title">{campaign.title}</h2>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-success">Show details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
