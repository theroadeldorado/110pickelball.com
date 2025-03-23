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

    try {
      // Redirect directly to the Stripe hosted checkout page
      window.location.href = 'https://buy.stripe.com/test_7sI6p00Oybz21pK288';
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error redirecting to checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-black ring-white ring-2 hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline transition-all duration-200 ease-in-out"
    >
      {loading ? 'Processing...' : 'Buy Now'}
    </button>
  );
}
