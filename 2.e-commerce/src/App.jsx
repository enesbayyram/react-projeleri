import "./App.css";
import Navbar from "./components/navbar/Navbar";
import RouteConfig from "./config/RouteConfig";
import PagesContainer from "./containers/PagesContainer";

function App() {
  return (
    <div>
      <PagesContainer>
        <Navbar />
        <RouteConfig />
      </PagesContainer>
    </div>
  );
}

export default App;
