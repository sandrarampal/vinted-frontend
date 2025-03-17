import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Cookies from "js-cookie";
import React from "react";
import { Commet } from "react-loading-indicators";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [priceDesc, setPriceDesc] = useState(false);
  const [values, setValues] = React.useState([5, 200]);
  const [homePage, setHomePage] = useState(true);

  const fetchData = async () => {
    let filters = "";
    if (!priceDesc) {
      filters += "?sort=price-asc";
    }
    if (priceDesc) {
      filters += "?sort=price-desc";
    }
    if (search) {
      if (filters) {
        filters += "&title=" + search;
      } else {
        filters += "?title=" + search;
      }
    }
    if (values[0]) {
      if (filters) {
        filters += "&priceMin=" + values[0];
      } else {
        filters += "?priceMin=" + values[0];
      }
    }
    if (values[1]) {
      if (filters) {
        filters += "&priceMax=" + values[1];
      } else {
        filters += "?priceMax=" + values[1];
      }
    }

    const response = await axios.get(
      `https://site--vinted-backend--96jcjn4jx467.code.run/offers${filters}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search, values, priceDesc]);

  return isLoading ? (
    <Commet
      color="#0dafba"
      size="medium"
      text=""
      textColor=""
      className="loading"
    />
  ) : (
    // <span>En cours de chargement... </span>
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        token={token}
        setToken={setToken}
        setPriceDesc={setPriceDesc}
        values={values}
        setValues={setValues}
        setHomePage={setHomePage}
        homePage={homePage}
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
              setHomePage={setHomePage}
              homePage={homePage}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              token={token}
              setToken={setToken}
              setHomePage={setHomePage}
              homePage={homePage}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              setHomePage={setHomePage}
              homePage={homePage}
            />
          }
        />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route
          path="/offer/:id"
          element={<Offer setHomePage={setHomePage} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
