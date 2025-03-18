import { useLocation } from "react-router-dom";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51R3zGIRdxc3ty1YnRUlvGuhFVRKwXWq77WJFloDbaOniV5sEaR01hDeyg83EgY4QNp2SqxC1UTuJCK1RJKLkG5VW0029YUeOk0"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;

  const options = {
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

  return token ? (
    <section className="payment-main">
      <div className="payment">
        <h4>Résumé de la commande</h4>
        <div className="order-price">
          <div>
            <span>Commande</span>
            <span>{price.toFixed(2)} €</span>
          </div>
          <div>
            <span>Frais protection acheteurs</span>
            <span>1.50 €</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>3.00 €</span>
          </div>
        </div>
        <div className="order-summary">
          <div>
            <span>Total</span>
            <span>{(price + 1.5 + 3).toFixed(2)} €</span>
          </div>
          <p>
            Il ne vous reste plus qu'un étape pour vous offrir{" "}
            <span style={{ fontWeight: "bold" }}>{title}</span>. Vous allez
            payer{" "}
            <span style={{ fontWeight: "bold" }}>
              {(price + 1.5 + 3).toFixed(2)} €
            </span>{" "}
            (frais de protection et frais de port inclus).
          </p>
        </div>
        <div>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm title={title} price={price} />
          </Elements>
        </div>
      </div>
    </section>
  ) : (
    <Navigate
      to="/login"
      state={{ from: "/payment", title: title, price: price }}
    />
  );
};

export default Payment;
