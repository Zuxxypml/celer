import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import SmallBanner from "./components/SmallBanner/SmallBanner";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <SmallBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
