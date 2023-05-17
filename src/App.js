import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ReturnModule = React.lazy(() => import("./modules/return"));
const ShipmentModule = React.lazy(() => import("./modules/shipment"));

const HelloComponent = () => {
  return (
    <div>
      <Link to="return">Return</Link>
      <br />
      <Link to="shipment">Shipment</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HelloComponent />} />
          <Route
            path="/return"
            element={
              <React.Suspense fallback={<>...</>}>
                <ReturnModule />
              </React.Suspense>
            }
          />
          <Route
            path="/shipment"
            element={
              <React.Suspense fallback={<>...</>}>
                <ShipmentModule />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
