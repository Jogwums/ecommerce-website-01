import React, { Component } from 'react';
import './styles.css';

import FormInput from '../Forms/FormInput';
import { Button } from './../../globalStyles';

import { auth, handleUserProfile } from '../../firebase/firebaseUtils'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
}


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange = (e) => {
        const {name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            const err = ['Passwords don\'t match'];
            this.setState({
                errors: err
            });
            return;
        }

        try{
            const { user} = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName});
        } catch(err){
            //console.log(err)
        }
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state


        return (
            <div className="sign-up">
                <div className="wrap">
                    <h2>
                        Signup
                    </h2>
                    <div className="formWrapper">
                        <form>
                            <FormInput  
                                type="text"
                                name="displayName"
                                onChange={this.handleChange}
                                value={displayName}
                                placeholder="Full Name"
                                />
                                <FormInput  
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                placeholder="Email"
                                
                                />
                                <FormInput  
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={password}
                                placeholder="Password"
                                
                                />
                                <FormInput  
                                type="password"
                                name="confirmPassword"
                                onChange={this.handleChange}
                                value={confirmPassword}
                                placeholder="Password Check"
                                
                                />
                                <Button className="button">
                                    Register
                                </Button>
                        </form>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;