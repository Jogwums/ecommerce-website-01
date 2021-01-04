import React from 'react'
import './sitebackground.css'

import Background from './../Assets/images/profile.jpg' 

const SiteBackground = (props) => {
    return (
        <div className="background">
            <div className="background-wrap">
                <div className="background-item"
                style={{
                    backgroundImage: `url(${Background})`
                }}>
                    
                    {props.children}
                </div>
                
            </div>
            
        </div>
    )
}

export default SiteBackground;
