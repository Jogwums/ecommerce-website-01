import React from 'react';
import Navbar from '../components/Navbar2/Navbar'
import AdminToolbar from '../components/AdminToolbar'

const HomePageLayout = (props) => {
    return (
        <div className="fullHeight">
            <AdminToolbar />
            <Navbar {...props} />
                {props.children}
        </div>
    )
}

export default HomePageLayout;
