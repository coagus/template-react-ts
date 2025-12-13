import { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="container">
      <InputText
        placeholder="Ingresa tu usuario"
        type="text"
        onChange={setUsername}
      />
      <InputText
        placeholder="Ingresa tu contraseña"
        type="password"
        onChange={setPassword}
      />
      <button>Submit</button>
      <p style={{ color: "black" }}>
        Usuario: {username} | Contraseña: {password}
      </p>
    </div>
  );
};

export default App;
