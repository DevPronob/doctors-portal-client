import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51HVdTWBLa4QtAMbzJF8fESJt8K44YI2RpHvgDeomDGPXujOgO65ZODQda0qJjd7KiMCyuKPq1NpAfrpXYhaw5VTG00f5DSaCaY');
const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking[0];
  return (
    <div>
    <h3 className="text-3xl">Payment for {treatment}</h3>
    <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
    <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
            <CheckoutForm
                booking={booking}
            />
        </Elements>
    </div>
</div>
  )
}

export default Payment
