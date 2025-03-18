import axios from "axios";
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";
import defaultAvatar from "../assets/img/default-avatar.webp";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNewletter = (event) => {
    setNewsletter((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (file) {
      formData.append("avatar", file);
    }

    try {
      const response = await axios.post(
        "https://site--vinted-backend--96jcjn4jx467.code.run/user/signup",
        formData
      );
      //   console.log(response);
      Cookies.set("userToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        setExist(true);
      }
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        {exist && <p className="error">Cet email a déjà un compte chez nous</p>}
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          value={password}
        />
        <div className="check">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={handleNewletter}
          />
          <label> S'inscrire à notre newsletter</label>{" "}
        </div>
        <div>
          <label htmlFor="">Choisissez une photo de profil</label>
          <input
            type="file"
            onChange={async (event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <p className="message">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
        <Link to="/login" className="link-to">
          Tu as déjà un compte? Connecte-toi !
        </Link>
      </form>
    </div>
  );
};

export default Signup;
