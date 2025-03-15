import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PetsProvider } from "./context/PetsContext";
import Home from "./pages/Home";
import PetDetail from "./pages/PetDetail";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PetsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetail />} />
        </Routes>
      </Router>
    </PetsProvider>
  </React.StrictMode>
);
