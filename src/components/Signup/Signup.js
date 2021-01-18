import React, { useState } from 'react';
import './styles.css';

import AuthWrapper from '../../components/AuthWrapper/index'
import FormInput from '../Forms/FormInput';
import { Button } from './../../globalStyles';

import { auth, handleUserProfile } from '../../firebase/firebaseUtils'

const Signup = props => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    
    
    const resetForm = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors('')
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            const err = ['Passwords don\'t match'];
            setErrors(err);
            return;
        }

        if( displayName === '' || password === ''){
            const err = ['No empty fields allowed'];
            setErrors(err)
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            console.log(displayName);
            
            resetForm();

        } catch(err){
            console.log(err)
        }
    }

    const configAuthWrapper = {
        headline: 'Registration'
    }

        return (
            <AuthWrapper {...configAuthWrapper}>
            
                    <div className="formWrapper">
                    {
                        errors.length > 0 &&(
                            <ul className="errormsg">
                                {
                                    errors.map((err, index) => {
                                        return (
                                            <li key={index}>
                                                {err}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }

                        <form onSubmit={handleFormSubmit} >
                            <FormInput  
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Full Name"
                                handleChange={e => setDisplayName(e.target.value)}
                                />
                                <FormInput  
                                type="email"
                                name="email"
                                
                                value={email}
                                placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                                />
                                <FormInput  
                                type="password"
                                name="password"
                                handleChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                                
                                />
                                <FormInput  
                                type="password"
                                name="confirmPassword"
                                handleChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                placeholder="Password Check"
                                
                                />
                                <Button 
                                    // onClick={() => handleFormSubmit()}
                                    type="submit"
                                    className="button">
                                    Register
                                </Button>
                        </form>  
                    </div>
          </AuthWrapper>
        )
    }

export default Signup;