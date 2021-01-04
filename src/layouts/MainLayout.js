import React from 'react';
import Navbar from '../components/Navbar2/Navbar'
import AdminToolbar from '../components/AdminToolbar'

const MainLayout = (props) => {
    return (
        <div className="fullHeight">
            <AdminToolbar />
            <Navbar {...props} />
            <div className="main">
                {props.children}
            </div>
            
        </div>
    )
}

export default MainLayout
