'use client';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({ children }) => {
    return (
        <div>
            <SnackbarProvider autoHideDuration={5000}>
                {children}
            </SnackbarProvider>
        </div>
    )
}

export default Template