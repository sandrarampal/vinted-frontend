import { useState } from "react";
import axios from "axios";
import "./Publish.css";

const Publish = ({ token }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);

  //   console.log(token);

  return (
    <div>
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
          } catch (error) {
            console.log(error.response);
          }
        }}
      >
        <div>
          <input
            type="file"
            // multiple={true}
            onChange={async (event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <label htmlFor="description">Décris ton article</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <label htmlFor="size">Taille</label>
          <input
            type="text"
            id="size"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <label htmlFor="color">Couleur</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <label htmlFor="condition">Etat</label>
          <input
            type="text"
            id="condition"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
          <label htmlFor="location">Lieu</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Prix</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <input
            type="checkbox"
            id="exchange"
            value={exchange}
            onClick={(event) => {
              setExchange((prev) => !prev);
            }}
          />
          <label htmlFor="exchange">
            Je suis intéressé(e) par les échanges
          </label>
        </div>
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default Publish;
