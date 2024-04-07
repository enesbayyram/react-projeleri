import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/hr/api/authenticate",
          {
            username: "aaydogudu",
            password: "2",
          }
        );
        setUsername(jwtDecode(response?.data?.data?.token).sub);
      } catch (e) {
        console.log("hata olustu ", e);
      }
    };

    authenticate();
  }, []);

  return <div>Merhaba {username}</div>;
}

export default App;
