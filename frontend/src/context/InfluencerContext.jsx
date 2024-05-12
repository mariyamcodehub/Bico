'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const { createContext, useState, useContext } = require("react");

const InfluencerContext = createContext();


export const InfluencerProvider = ({ children }) => {

    const [currentInfluencer, setCurrentInfluencer] = useState(
        JSON.parse(localStorage.getItem('influencer'))
    );

    const router = useRouter();

    useEffect(() => {
        // Retrieve data from local storage and parse it
        const storedInfluencer = localStorage.getItem('influencer');
        if (storedInfluencer) {
            try {
                const parsedInfluencer = JSON.parse(storedInfluencer);
                setCurrentInfluencer(parsedInfluencer);
            } catch (error) {
                console.error("Error parsing influencer data:", error);
                // Handle parsing error (e.g., clear invalid data)
                localStorage.removeItem('influencer');
            }
        }
    }, []);

    const [influencerLoggedIn, setInfluencerLoggedIn] = useState(currentInfluencer !== null)

    const influencerLogout = () => {
        localStorage.removeItem('influencer');
        setInfluencerLoggedIn(false);
        router.push('/');
    }

    return <InfluencerContext.Provider value={{
        influencerLoggedIn,
        setInfluencerLoggedIn,
        currentInfluencer,
        setCurrentInfluencer,
        influencerLogout
    }}>
        {children}
    </InfluencerContext.Provider>
};


const useInfluencerContext = () => useContext(InfluencerContext);

export default useInfluencerContext;
