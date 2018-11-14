import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Index from "./";

import mapContainer from "./mapContainer";



const Index = () => {
  return (
 <HashRouter>
    <div className="container">
      <h1>Get Coffee!!</h1>
      <Route exact path="/" component={form} />
      <Route exact path="/map" component={mapContainer} />
    </div>
  </HashRouter>
  )
};

export default Index;