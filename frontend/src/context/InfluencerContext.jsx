'use client'
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const InfluencerContext = createContext();

export const useInfluencerContext = () => {
    return useContext(InfluencerContext);
};

export const InfluencerProvider = ({ children }) => {
    const [currentInfluencer, setCurrentInfluencer] = useState(null);

    const fetchInfluencer = async (id) => {
        try {
            const response = await axios.get(`/api/influencers/${id}`);
            setCurrentInfluencer(response.data);
        } catch (error) {
            console.error('Error fetching influencer:', error);
        }
    };

    const updateInfluencer = async (id, data) => {
        try {
            await axios.put(`/api/influencers/${id}`, data);
            setCurrentInfluencer(data); // Update the state with new data
        } catch (error) {
            console.error('Error updating influencer:', error);
        }
    };

    return (
        <InfluencerContext.Provider value={{ currentInfluencer, fetchInfluencer, updateInfluencer }}>
            {children}
        </InfluencerContext.Provider>
    );
};