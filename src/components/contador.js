import React, { useState } from "react";

export function Contador() {
  const [cont, setCont] = useState(0);

  const estiloContador = {
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

  function avanzar() {
    setCont(cont + 1);
  }

  function Disminuir() {
    setCont(cont - 1);
  }

  function Resetear() {
    setCont(0);
  }

  return (
    <>
      <div style={estiloContador}>El contador es: {cont}</div>
      <button onClick={avanzar} style={estiloBoton}>
        Incrementar el contador
      </button>
      <button onClick={Disminuir} style={estiloBoton}>
        Disminuir
      </button>
      <button onClick={Resetear} style={estiloBoton}>
        Resetear
      </button>
    </>
  );
}
