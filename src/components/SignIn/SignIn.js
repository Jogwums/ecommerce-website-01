import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { signInUser } from './../../redux/User/userActions'
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils'
import { useDispatch, useSelector } from 'react-redux'

import AuthWrapper from '../../components/AuthWrapper/index'
import FormInput from '../Forms/FormInput';
import { Button } from '../../globalStyles'

// const mapState = state => ({
//     userData: state.user
// })

const SignIn = (props) => {
    // const dispatch = useDispatch();
    // const { email, password } = useSelector(mapState)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password);
            setEmail(email)
            setPassword(password)
            
            resetForm();

        } catch(err){
            //console.log(err)
        }
    }

    const configAuthWrapper = {
        headline: 'Login'
    };

        return (
            <AuthWrapper {...configAuthWrapper}>
                    <div className="form-wrap">
                        <form onSubmit={handleSubmit} action="">
                            <div className="email-signIn">
                                
                            <FormInput  
                                type="email"
                                name="email"
                                handleChange={e => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                                
                                />
                                <FormInput  
                                type="password"
                                name="password"
                                handleChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                                
                                />
                                
                                <Button
                                    onClick={signInUser} 
                                    className="button">
                                    LOGIN
                                </Button>
                            </div>
                                {/* sign-in with google */}
                            <div className="social-signIn">
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
                                </Button>
                            </div>
                            {/* forgot password  */}
                            <div className="links">
                                <Link to="/recovery">
                                    FORGOT PASSWORD ?
                                </Link>
                            </div>
                        </form>
                    </div>
            </AuthWrapper>
        )
    }

export default SignIn;
