import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../globalStyles'


const Error = () => {
    return (
        <div className="error-page" style={ErrorPage}>
            <h1 className="error-title">404 Error</h1>
            <h1 className="error-msg">Page Not Found</h1>

            <Button primary fontBig >
                <Link to="/">Go Back</Link>
            </Button>
        </div>
    )
}

export default Error

const ErrorPage = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    background: "grey",
    margin: "0 auto",

    height: "100vh",
}

