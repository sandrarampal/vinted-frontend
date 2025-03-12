import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
    );
    console.log(response.data);

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
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="/offer/:id"
          element={<Offer data={data} setData={setData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
