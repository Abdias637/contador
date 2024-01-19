import React, { useState } from "react";

export function LED() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [brillo, setBrillo] = useState(0); 

  const estiloBrillo = {
    marginBottom: "10px",
    fontSize: "18px",
  };

  const estiloBoton = {
    marginRight: "10px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#800080", 
    color: "#fff", 
    fontWeight: "bold", 
    border: "1px solid #800080", 
    borderRadius: "5px",
  };

  const estiloApagar = {
    backgroundColor: "#800080", 
    color: "#fff", 
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold", 
    border: "1px solid #800080",
    borderRadius: "5px", 
  };

  function aumentarBrillo() {
    if (brillo < luz.length - 1) {
      setBrillo(brillo + 1);
    } else {
   
      setBrillo(0);
    }
  }

  function disminuirBrillo() {
    if (brillo > 0) {
      setBrillo(brillo - 1);
    } else {
    
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
