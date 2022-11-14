import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useNavbar } from "./hooks/useNavbar";
import {Home} from "./views/Home"
import { Login } from "./views/Login";
import { Productos } from "./views/Productos";
import { Usuarios } from "./views/Usuarios";
import { Ventas } from "./views/Ventas";



function App() {
 const {Rutas, abrir, setAbrir} = useNavbar();
  return (
    <div>
    <Navbar rutas={Rutas} abrir={abrir} setAbrir={setAbrir}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/ventas" element={<Ventas/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
