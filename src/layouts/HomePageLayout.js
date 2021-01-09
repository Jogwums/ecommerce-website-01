import React from 'react';
import Navbar from '../components/Navbar2/Navbar'
import Footer from '../components/Footer/Footer'
import AdminToolbar from '../components/AdminToolbar'

const HomePageLayout = (props) => {
    return (
        <div className="fullHeight">
            <AdminToolbar />
            <Navbar {...props} />
                {props.children}
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePageLayout;
