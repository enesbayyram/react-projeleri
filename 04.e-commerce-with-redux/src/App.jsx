import { useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import BasketDetail from "./components/BasketDetail";
function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />
        <RouterConfig />
        <BasketDetail />
        <Footer />
      </PageContainer>
    </div>
  );
}

export default App;
