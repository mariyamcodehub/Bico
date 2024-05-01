import React from 'react'
import UserNavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <UserNavbar />
            {children}
        </>
    )
}

export default Layout