import React from 'react'
import Brandnavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Brandnavbar />
            {children}
        </>
    )
}

export default Layout