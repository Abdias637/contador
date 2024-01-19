import React, { useState } from "react";

export function Text() {
  const [estado, setEstado] = useState("Encendido");

  const estiloTexto = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#fff", // Cambia el color del texto a blanco
    fontWeight: "bold", // Texto en negrita
  };

  const estiloBoton = {
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#800080", // Morado
    color: "#fff", // Letras blancas
    fontWeight: "bold", // Negrita
    border: "1px solid #800080", // Bordes
    borderRadius: "5px", // Esquinas redondeadas
    marginRight: "10px",
  };

  function switch2() {
    if (estado === "Encendido") {
      setEstado("Apagado");
    } else {
      setEstado("Encendido");
    }
  }

  function Resetear() {
    setEstado("Encendido");
  }

  return (
    <>
      <div style={estiloTexto}>{estado}</div>
      <button onClick={switch2} style={estiloBoton}>
        Apagar/Encender
      </button>
      <button onClick={Resetear} style={estiloBoton}>
        Resetear
      </button>
    </>
  );
}
