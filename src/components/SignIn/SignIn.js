import React, { useState } from 'react'
import { Button } from '../../globalStyles'
import './styles.css'

import { signInUser } from './../../redux/User/userActions'
import { signInWithGoogle } from '../../firebase/firebaseUtils'
import { useDispatch, useSelector } from 'react-redux'

import FormInput from '../Forms/FormInput';


const SignIn = (props) => {
    const dispatch = useDispatch
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const resetForm = () => {
        setEmail('')
        setPassword('')

    }

    const handleSubmit = async (e) => {
        e.preventDefault();


    }

    const handleChange = (e) => {
        setEmail(e.target.value)

    }

        return (
            <div className="sign-in">
                <div className="wrap">
                    <h2>LOGIN</h2>
    
                    <div className="form-wrap">
                        <form onSubmit={handleSubmit} action="">
                            <div className="email-signIn">
                                
                            <FormInput  
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={email}
                                placeholder="Email"
                                
                                />
                                <FormInput  
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={password}
                                placeholder="Password"
                                
                                />
                                <FormInput  
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                value={confirmPassword}
                                placeholder="Password Check"
                                
                                />
                                <Button className="button">
                                    Register
                                </Button>
                            </div>
                            <div className="social-signIn">
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

export default SignIn;
