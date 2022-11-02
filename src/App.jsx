import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useNavbar } from "./hooks/useNavbar";
import {Home} from "./views/Home"
import { Productos } from "./views/Productos";
import { Usuarios } from "./views/Usuarios";
import { Ventas } from "./views/Ventas";


function App() {
 const {Rutas} = useNavbar();
  return (
    <div>
    <Navbar rutas={Rutas}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/ventas" element={<Ventas/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
    </Routes>

    </div>
  );
}

export default App;
