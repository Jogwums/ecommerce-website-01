import React from 'react'
import PaymentDetails from '../../components/PaymentDetails'

//stripe payments integration
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// stripe publishablekey
import { publishablekey } from './../../stripe/config'


const stripePromise = loadStripe(publishablekey);


const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentDetails />
        </Elements>
        
    )
}

export default Payment
