import React from "react";
import CreateHeader from "./Component/CreateHeader";
import "./Style/Card.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "./Component/CardComponent";

function App() {
  return (
    <div className="App">
      <CreateHeader />
      <CardComponent />
    </div>
  );
}

export default App;
