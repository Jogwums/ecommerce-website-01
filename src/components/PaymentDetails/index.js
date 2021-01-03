import React, { useState } from 'react'
import FormInput from '../Forms/FormInput'
import {Button} from './../../globalStyles' 
import './styles.css'

import { CountryDropdown } from 'react-country-region-selector'

const initialDetails = {
    line1: '',
    line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
}

const PaymentDetails = () => {
    const [shippingDetails, setShippingDetails] = useState({...initialDetails});
    const [billingDetails, setBillingDetails] = useState({...initialDetails});
    const [recipientName, setRecipientname] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleShipping = props => {

    }

    const handleBilling = props => {

    }

    return (<>
        <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <h2>
                    Shipping Address
                    </h2>

                    <FormInput 
                        placeholder="Recipient Name"
                        name="recipientName"
                        type="text"

                    />

                    <FormInput 
                        placeholder="line1"
                        name="line1"
                        type="text"

                    />
                    <FormInput 
                        placeholder="line2"
                        name="line2"
                        type="text"

                    />
                    <FormInput 
                        placeholder="city"
                        name="city"
                        type="text"

                    />
                    <FormInput 
                        placeholder="state"
                        name="state"
                        type="text"

                    />
                    <FormInput 
                        placeholder="postal_code"
                        name="postal_code"
                        type="text"

                    />
                    <div className="formRow countrySelect">
                        <CountryDropdown 
                        onChange={val => handleShipping({
                            target: {
                                name: 'country',
                                value: val
                            }
                        })}
                            value={shippingDetails.country}
                            valueType="short"
                        />
                    </div>

                    </div>
                    <div className="group">
                        <h2>
                            Billing Address
                        </h2>

                        <FormInput 
                            placeholder="Name on Card"
                            name="NameOnCard"
                            type="text"

                        />

                        <FormInput 
                            placeholder="line1"
                            name="line1"
                            type="text"

                        />
                        <FormInput 
                            placeholder="line2"
                            name="line2"
                            type="text"

                        />
                        <FormInput 
                            placeholder="city"
                            name="city"
                            type="text"

                        />
                        <FormInput 
                            placeholder="state"
                            name="state"
                            type="text"

                        />
                        <FormInput 
                            placeholder="postal_code"
                            name="postal_code"
                            type="text"

                        />
                        <div className="formRow countrySelect">
                            <CountryDropdown 
                                onChange={val => handleBilling({
                                    target: {
                                        name: 'country',
                                        value: val
                                    }
                                })}
                                value={billingDetails.country}
                                valueType="short"
                            />
                        </div>
                    </div>
            </form>
        
        </div>

        </>
    )
}

export default PaymentDetails
