import React, { useState } from "react";

export function LED() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [brillo, setBrillo] = useState(0); // Valor inicial del brillo

  const estiloBrillo = {
    marginBottom: "10px",
    fontSize: "18px",
  };

  const estiloBoton = {
    marginRight: "10px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#800080", // Morado
    color: "#fff", // Letras blancas
    fontWeight: "bold", // Negrita
    border: "1px solid #800080", // Bordes
    borderRadius: "5px", // Esquinas redondeadas
  };

  const estiloApagar = {
    backgroundColor: "#800080", // Morado
    color: "#fff", // Letras blancas
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold", // Negrita
    border: "1px solid #800080", // Bordes
    borderRadius: "5px", // Esquinas redondeadas
  };

  function aumentarBrillo() {
    if (brillo < luz.length - 1) {
      setBrillo(brillo + 1);
    } else {
      // Si está al 100%, al aumentar va a "apagado"
      setBrillo(0);
    }
  }

  function disminuirBrillo() {
    if (brillo > 0) {
      setBrillo(brillo - 1);
    } else {
      // Si está en "apagado", al disminuir va al 100%
      setBrillo(luz.length - 1);
    }
  }

  function resetearBrillo() {
    setBrillo(0);
  }

  return (
    <>
      <div style={estiloBrillo}>Intensidad: {luz[brillo]}</div>
      <button onClick={aumentarBrillo} style={estiloBoton}>
        Aumentar Intensidad
      </button>
      <button onClick={disminuirBrillo} style={estiloBoton}>
        Disminuir Intensidad
      </button>
      <button onClick={resetearBrillo} style={estiloBoton}>
        Resetear Intensidad
      </button>
      <button onClick={resetearBrillo} style={estiloApagar}>
        Apagar LED
      </button>
    </>
  );
}
