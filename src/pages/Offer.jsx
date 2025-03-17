import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Offer.css";
import { BiLogIn } from "react-icons/bi";
import { Commet } from "react-loading-indicators";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--vinted-backend--96jcjn4jx467.code.run/offers/" +
          params.id
      );

      console.log(response.data);
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
    <Commet
      color="#0dafba"
      size="medium"
      text=""
      textColor=""
      className="loading"
    />
  ) : (
    <div className="offer-main">
      <section className="container">
        <div className="product-picture">
          <img src={data.product_image.secure_url} alt="photo du vêtement" />
        </div>
        <div className="product-details">
          <h3>{data.product_name}</h3>
          <p>{data.product_price.toFixed(2)} €</p>
          <div className="other-details">
            {data.product_details.map((detail, index) => {
              const key = Object.keys(detail);
              return (
                <div key={index}>
                  <span>{key}</span>
                  <span>{detail[key]}</span>
                </div>
              );
            })}
          </div>
          <div>
            <p className="product-description">{data.product_description}</p>
            <div className="user">
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="avatar de l'utilisateur"
                />
              )}

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
