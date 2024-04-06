import { useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Navbar from "./components/Navbar";
import PageContainers from "./containers/PageContainers";

function App() {
  return (
    <div>
      <Navbar />

      <PageContainers>
        <RouterConfig />
      </PageContainers>
    </div>
  );
}

export default App;
