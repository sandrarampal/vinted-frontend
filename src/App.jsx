import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import React from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [priceDesc, setPriceDesc] = useState(false);
  const [values, setValues] = React.useState([5, 200]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        token={token}
        setToken={setToken}
        setPriceDesc={setPriceDesc}
        values={values}
        setValues={setValues}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              search={search}
              priceDesc={priceDesc}
              values={values}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
