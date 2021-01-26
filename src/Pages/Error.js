import React from 'react';
import { Button, BtnLink} from './../globalStyles'
import { useHistory } from 'react-router-dom'


const Error = () => {

    const history = useHistory();

    return (
        <div className="error-page" style={ErrorPage}>
            <h1 className="error-title">404 Error</h1>
            <h1 className="error-msg">Page Not Found</h1>

            <Button primary fontBig >
                <BtnLink onClick={() => history.goBack()}>Go Back</BtnLink>
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

    padding: '5rem',

    background: "lightgrey",
    margin: "0 auto",

    height: "100vh",
}

