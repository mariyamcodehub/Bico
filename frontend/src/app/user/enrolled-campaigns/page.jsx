'use client';
import React, { useEffect, useState } from 'react'

const EnrolledCampaigns = () => {

    const [enrollList, setEnrollList] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('influencer')));

    const fetchEnrolled = () => {
        fetch('http://localhost:5000/enroll/getbyuser/' + currentUser._id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setEnrollList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchEnrolled();
    }, [])



    return (
        <div>EnrolledCampaigns</div>
    )
}

export default EnrolledCampaigns;