import React, { useState } from 'react'
import './styles.css'

import AuthWrapper from '../AuthWrapper'
import FormInput from '../Forms/FormInput'
import { Button } from '../../globalStyles'


const EmailPassword = props => {
    const [email, setEmail] = useState('')
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }
        const configAuthWrapper = {
            headline: 'Email Password'
        }

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrapper">
                        <form >
                        
                                <FormInput  
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                                />
                                
                                <Button 
                                    type="submit"
                                    onClick={handleFormSubmit} className="button">
                                    EMAIL PASSWORD
                                </Button>
                        </form>  
                    </div>
            </AuthWrapper>
        )
    }


export default EmailPassword;