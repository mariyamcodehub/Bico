// BrandAuthContext.js
'use client'
import React, { createContext, useState, useEffect } from 'react';

const BrandAuthContext = createContext();

const BrandAuthProvider = ({ children }) => {
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('brandToken');
        if (token) {
            setBrand({ token });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('brandToken', token);
        setBrand({ token });
    };

    const logout = () => {
        localStorage.removeItem('brandToken');
        setBrand(null);
    };

    return (
        <BrandAuthContext.Provider value={{ brand, login, logout }}>
            {children}
        </BrandAuthContext.Provider>
    );
};

export { BrandAuthProvider, BrandAuthContext };
