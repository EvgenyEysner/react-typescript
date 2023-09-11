import React from "react";
 // Routes instead of "Switch"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route Component={TodosPage} path="/" />
          <Route Component={AboutPage} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
