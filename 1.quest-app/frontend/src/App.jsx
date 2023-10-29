import { useState } from "react";
import RoutesConfig from "./components/router/RoutesConfig";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <RoutesConfig />
    </div>
  );
}

export default App;
