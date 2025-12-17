import { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";

const App = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  return (
    <div className="container">
      <h1 style={{ color: "black" }}>Formulario</h1>
      <InputText
        placeholder="Ingresa tu nombre"
        type="text"
        onChange={setName}/>
        <InputText     
        placeholder="Ingresa tu dirección"
        type="text"
        onChange={setAddress}
      />
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
        Nombre: {name} <br /> 
      Dirección: {address} <br />
        Usuario: {username} <br /> 
        Contraseña: {password} 
        
      </p>
    </div>
  );
};

export default App;
