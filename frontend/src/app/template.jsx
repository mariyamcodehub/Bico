'use client';

import { InfluencerProvider } from '@/context/InfluencerContext';
import { AuthProvider } from '@/context/AuthContext';
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { BrandAuthProvider } from '@/context/BrandAuthContext';


const Template = ({ children }) => {
    return (
        <div>
            <SnackbarProvider autoHideDuration={3000}>
                <InfluencerProvider>
                    <BrandAuthProvider>
                        <AuthProvider>
                            {children}
                        </AuthProvider>
                    </BrandAuthProvider>
                </InfluencerProvider>
            </SnackbarProvider>
        </div>
    )
}

export default Template