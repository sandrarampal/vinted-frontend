import axios from "axios";
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({ setIsConnected, token, setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      //   console.log(response);
      setIsConnected(true);
      Cookies.set("userToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setExist(true);
    }
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSubmit}>
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
        {exist && <p>Cet email a déjà un compte chez nous</p>}
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
          value={password}
        />
        <div>
          <input type="checkbox" />
          <p>S'inscrire à notre newsletter</p>{" "}
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
        <Link to="/login">Tu as déjà un compte? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
