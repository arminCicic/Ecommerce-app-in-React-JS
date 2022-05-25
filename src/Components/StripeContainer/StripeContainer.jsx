import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JoujiA34f5pP21QjLvKtEBlOLlfdovtrq98IDrHrzHppMETN9I2yOBx7DNdP6Wsgh9PDfZle62HR1GLgl5Nz5Do00iHryCzqt";

const stripeTestsPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestsPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
