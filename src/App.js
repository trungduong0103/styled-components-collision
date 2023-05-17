import "./App.css";
import { ReturnComponent } from "@foo-testing-0103/return";
import { ShipmentComponent } from "@foo-testing-0103/shipment";

function App() {
  return (
    <div className="App">
      <ShipmentComponent />
      <ReturnComponent />
    </div>
  );
}

export default App;
