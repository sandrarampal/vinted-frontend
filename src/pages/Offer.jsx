import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Offer.css";
import { BiLogIn } from "react-icons/bi";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + params.id
      );

      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="offer-main">
      <section className="container">
        <div className="product-picture">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="product-details">
          <p>{data.product_price} €</p>
          <div className="other-details">
            <div>
              <p>MARQUE</p>
              <p>{data.product_details[0].MARQUE}</p>
            </div>
            <div>
              <p>ÉTAT</p>
              <p>{data.product_details[1].ÉTAT}</p>
            </div>
            <div>
              <p>COULEUR</p>
              <p>{data.product_details[2].COULEUR}</p>
            </div>
            <div>
              <p>EMPLACEMENT</p>
              <p>{data.product_details[3].EMPLACEMENT}</p>
            </div>
            <div>
              <p>MODES DE PAIEMENT</p>
              <p></p>
            </div>
          </div>
          <div>
            <h3>{data.product_name}</h3>
            <p>{data.product_description}</p>
            <div className="user">
              <img src={data.owner.account.avatar.secure_url} alt="" />
              <p>{data.owner.account.username}</p>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
