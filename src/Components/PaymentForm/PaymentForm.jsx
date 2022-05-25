import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { AppState } from "../../Context";
import "./PaymentForm.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#df3512",
      color: "#df3512",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "17px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const { total } = AppState();
  const newTotal = total * 100;
  console.log(newTotal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3000/payment", {
          amount: newTotal,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="stripe-container">
      {!success ? (
        <form className="stripe-form" onSubmit={handleSubmit}>
          <fieldset className="stripe-form-fieldset">
            <h4>Enter your credit card details</h4>
            <div className="form-row">
              <CardElement options={CARD_OPTIONS} />
            </div>
            <button type="submit">Pay</button>
          </fieldset>
        </form>
      ) : (
        <div>
          <h2>Thank you for your purchase</h2>
        </div>
      )}
    </div>
  );
}
