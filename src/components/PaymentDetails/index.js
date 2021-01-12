import React, { useState } from 'react'
import { CardElement, useElements } from '@stripe/react-stripe-js'
import { useStripe } from '@stripe/react-stripe-js'
import { useHistory } from 'react-router-dom'
import FormInput from '../Forms/FormInput'
import {Button} from './../../globalStyles' 
import { apiInstance } from '../../Utils'
// import stripe from 'stripe'
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
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [shippingDetails, setShippingDetails] = useState({...initialDetails});
    const [billingDetails, setBillingDetails] = useState({...initialDetails});
    const [recipientName, setRecipientname] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const cardElements = elements.getElement('card');

        if(
            !shippingDetails.line1 || !shippingDetails.city || !shippingDetails.state || 
            !shippingDetails.postal_code || !shippingDetails.country || 
            !billingDetails.line1 || !billingDetails.city || 
            !billingDetails.state || !billingDetails.postal_code || !billingDetails.country || !recipientName 
            || !nameOnCard
        ){ return;}

        
        apiInstance.post('/payments/create', {
            amount: '',
            shipping: {
                name: recipientName,
                address: {
                    ...shippingDetails
                }
            }
        }).then(({ data: clientSecrete}) => {

        });
    };

    const handleShipping = event => {
        const { name, value} = event.target;
        setShippingDetails({
            ...shippingDetails,
            [name]: value
        })
    }

    const handleBilling = event => {
        const { name, value } = event.target;
        setBillingDetails({
            ...billingDetails,
            [name]: value
        })
    }

    //cardElements Configuration //see stripe docs 
    const cardElementsConfig = {
        iconStyle: 'solid',
        style: {
            base: {
                fontSize: '24px'
            }
        },
        hidePostalCode: true,
    }

    

    return (<>
        <div className="paymentDetails">
            <form onSubmit={handleSubmit} className="formWrap">
                <div className="group">
                    <h2>
                    Shipping Address
                    </h2>

                    <FormInput 
                        required
                        placeholder="Recipient Name"
                        name="recipientName"
                        type="text"
                        value={recipientName}
                        handleChange={e => setRecipientname(e.target.value)}
                    />

                    <FormInput 
                        required
                        placeholder="line1"
                        name="line1"
                        type="text"
                        value={shippingDetails.line1}
                        handleChange={event => handleShipping(event)}

                    />
                    <FormInput 
                        placeholder="line2"
                        name="line2"
                        type="text"
                        value={shippingDetails.line2}
                        handleChange={event => handleShipping(event)}

                    />
                    <FormInput 
                        placeholder="city"
                        name="city"
                        type="text"
                        value={shippingDetails.city}
                        handleChange={event => handleShipping(event)}

                    />
                    <FormInput 
                        placeholder="state"
                        name="state"
                        type="text"
                        value={shippingDetails.state}
                        handleChange={event => handleShipping(event)}

                    />
                    <FormInput 
                        placeholder="postal_code"
                        name="postal_code"
                        type="text"
                        value={shippingDetails.postal_code}
                        handleChange={event => handleShipping(event)}

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
                            required
                            placeholder="Name on Card"
                            name="NameOnCard"
                            type="text"
                            value={nameOnCard}
                            handleChange={e => setNameOnCard(e.target.value)}

                        />

                        <FormInput 
                            required
                            placeholder="line1"
                            name="line1"
                            type="text"
                            value={billingDetails.line1}
                            handleChange={event => handleBilling(event)}

                        />
                        <FormInput 
                            placeholder="line2"
                            name="line2"
                            type="text"
                            value={billingDetails.line2}
                            handleChange={event => handleBilling(event)}

                        />
                        <FormInput 
                            placeholder="city"
                            name="city"
                            type="text"
                            value={billingDetails.city}
                            handleChange={event => handleBilling(event)}

                        />
                        <FormInput 
                            placeholder="state"
                            name="state"
                            type="text"
                            value={billingDetails.state}
                            handleChange={event => handleBilling(event)}

                        />
                        <FormInput 
                            placeholder="postal_code"
                            name="postal_code"
                            type="text"
                            value={billingDetails.postal_code}
                            handleChange={event => handleBilling(event)}

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

                    <div className="group">
                        <h2>
                            Card Details
                        </h2>

                        <CardElement 
                            cardElementsConfig

                          />
                    </div>
                    <div className="center">
                        <Button pay full type="submit">Pay Now</Button>
                    </div>
            </form>
        
        </div>

        </>
    )
}

export default PaymentDetails
