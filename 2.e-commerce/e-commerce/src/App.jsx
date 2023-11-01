import { useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "./App.css";

function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
