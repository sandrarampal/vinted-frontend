import { useState } from "react";
import axios from "axios";
import "./Publish.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [exchange, setExchange] = useState(false);

  const navigate = useNavigate();

  //   console.log(token);

  return token ? (
    <section className="publish-main">
      <div className="container publish-input">
        <h3>Vends ton article</h3>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append("picture", file);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("condition", condition);
            formData.append("price", price);
            formData.append("city", location);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            try {
              const response = await axios.post(
                "https://site--vinted-backend--96jcjn4jx467.code.run/offer/publish",
                formData,
                {
                  headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              console.log(response.data);
              navigate("/offer/" + response.data._id);
            } catch (error) {
              console.log(error.response);
            }
          }}
        >
          <div className="add-picture">
            <input
              type="file"
              // multiple={true}
              onChange={async (event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div>
            <label htmlFor="title">
              Titre
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="ex: Chemise verte Zara"
              />
            </label>

            <label htmlFor="description" className="description">
              Décris ton article
              <textarea
                className="input-description"
                type="text"
                id="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                placeholder="ex: très bon état, presque jamais portée"
              />
            </label>
          </div>
          <div>
            <label htmlFor="brand">
              Marque
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                placeholder="ex: Zara"
              />
            </label>

            <label htmlFor="size">
              Taille
              <input
                type="text"
                id="size"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                placeholder="ex: L/42/XL"
              />
            </label>

            <label htmlFor="color">
              Couleur
              <input
                type="text"
                id="color"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
                placeholder="ex: vert"
              />
            </label>

            <label htmlFor="condition">
              Etat
              <input
                type="text"
                id="condition"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
                placeholder="ex: très bon état"
              />
            </label>

            <label htmlFor="location">
              Lieu
              <input
                type="text"
                id="location"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                placeholder="ex: Paris"
              />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Prix
              <input
                type="text"
                id="price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                placeholder="0,00 €"
              />
            </label>

            <span className="check-exchange">
              <input
                type="checkbox"
                id="exchange"
                value={exchange}
                onClick={(event) => {
                  setExchange((prev) => !prev);
                }}
              />
              Je suis intéressé(e) par les échanges
            </span>
          </div>
          <div className="add-button">
            <button>Ajouter</button>
          </div>
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
