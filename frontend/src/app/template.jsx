'use client';
import { BrandProvider } from '@/context/BrandContext';
import { InfluencerProvider } from '@/context/InfluencerContext';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({ children }) => {
    return (
        <div>
            <SnackbarProvider autoHideDuration={5000}>
                <InfluencerProvider>
                    <BrandProvider>
                        {children}
                    </BrandProvider>
                </InfluencerProvider>
            </SnackbarProvider>
        </div>
    )
}

export default Template