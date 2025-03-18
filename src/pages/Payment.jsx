import { useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51R3zGIRdxc3ty1YnRUlvGuhFVRKwXWq77WJFloDbaOniV5sEaR01hDeyg83EgY4QNp2SqxC1UTuJCK1RJKLkG5VW0029YUeOk0"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  const options = {
    title: title,
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: price * 100,
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };

  //   console.log({ title, price });

  return (
    <section className="payment-main">
      <div className="container">
        <h4>Résumé de la commande</h4>
        <div className="order-price">
          <div>
            <p>Commande</p>
            <p>{price.toFixed(2)} €</p>
          </div>
          <div>
            <p>Frais protection acheteurs</p>
            <p>1.50 €</p>
          </div>
          <div>
            <p>Frais de port</p>
            <p>3.00 €</p>
          </div>
        </div>
        <div className="order-summary">
          <div>
            <p>Total</p>
            <p>{(price + 1.5 + 3).toFixed(2)} €</p>
          </div>
          <p>
            Il ne vous reste plus qu'un étape pour vous offrir {title}. Vous
            allez payer {price.toFixed(2)} € (frais de protection et frais de
            port inclus).
          </p>
        </div>
        <div>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm title={title} price={price} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
