'use client';

import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';

type CheckoutProps = {
  price: string;
};

export default function Checkout({ price }: CheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // In a real implementation, you would redirect to your API endpoint
    // that creates a Stripe checkout session and returns the session ID

    // Example of how you would redirect to Stripe:
    // const stripe = await loadStripe('your_publishable_key');
    // const { error } = await stripe.redirectToCheckout({
    //   sessionId: 'your_checkout_session_id',
    // });

    // For now, just alert the user
    alert('In a real implementation, this would redirect to Stripe Checkout. Price: ' + price);
    setLoading(false);
  };

  return (
    <a
      href="https://buy.stripe.com/test_7sI6p00Oybz21pK288"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-black ring-white ring-2 hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline transition-all duration-200 ease-in-out"
    >
      {loading ? 'Processing...' : 'Buy Now'}
    </a>
  );
}
