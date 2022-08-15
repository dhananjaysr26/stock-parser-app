import Axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";
import Criteria from "./pages/Criteria";
import Variable from "./pages/Variable";
import "./App.css";

export default function App() {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    Axios.get("https://mobile-app-challenge.herokuapp.com/data").then((res) => {
      // console.log(res.data);
      setStockData(res.data);
    });
  }, []);
  return (
    <Router>
      {stockData ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page stockData={stockData} />} />
          <Route path="/page/:stockId" element={<Criteria stockData={stockData} />} />
          <Route
            path="/page/:stockId/:criteriaId/:variableId"
            element={<Variable stockData={stockData} />}
          />
        </Routes>
      ) : (
        ""
      )}
    </Router>
  );
}
