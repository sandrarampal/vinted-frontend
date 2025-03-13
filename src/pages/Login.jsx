import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      Cookies.set("userToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          value={password}
        />
        <button>Se connecter</button>
        <p>Pas encore de compte? Inscris-toi !</p>
      </form>
    </div>
  );
};

export default Login;
