import React, { useState } from "react";

export const useNavbar = () => {
  const Rutas = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Ventas", "/ventas"],
    ["Usuarios", "/usuarios"],
  ];
  const [abrir, setAbrir] = useState(false);
  return {
    Rutas,
    abrir,
    setAbrir,
  };
};
