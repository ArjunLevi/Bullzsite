import React from "react";
import PageHOC from './components/PageHOC'
import Home from "./components/Home";
import MarketPlace from "./components/MarketPalce";
import RoadMap from "./components/RoadMap";
import  Token  from "./components/Token";
import Contact from "./components/Contact";

import { BrowserRouter,  Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
     
        <PageHOC/>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
       
      </div>
    </BrowserRouter>
  );
};

export default App;
