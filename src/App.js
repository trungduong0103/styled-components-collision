
import "./App.css";
import { ReturnComponent } from "@foo/return";
import { ShipmentComponent } from "@foo/shipment";

function App() {
  return (
    <div className="App">
      <ShipmentComponent />
      <ReturnComponent />
    </div>
  );
}

export default App;
