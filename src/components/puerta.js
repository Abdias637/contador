import React, { useState } from "react";

const PuertaAbierta = "https://png.pngtree.com/thumb_back/fw800/background/20230524/pngtree-an-open-door-leading-to-a-dark-room-image_2678606.jpg";
const PuertaCerrada = "https://seguridadantirrobo.com/wp-content/uploads/2019/11/door-1587023_960_720-960x480.jpg";

export function Puerta() {
  const [estadoPuerta, setEstadoPuerta] = useState("cerrada");

  const estiloImagen = {
    width: "100px",
    height: "100px",
  };

  const estiloContenedor = {
    marginTop: "50px", // Ajusta el valor según sea necesario
    textAlign: "center",
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

  const BotonAbierta = () => (
    <button onClick={() => setEstadoPuerta("abierta")} style={estiloBoton}>
      Abrir Puerta
    </button>
  );

  const BotonCerrada = () => (
    <button onClick={() => setEstadoPuerta("cerrada")} style={estiloBoton}>
      Cerrar Puerta
    </button>
  );

  return (
    <div style={estiloContenedor}>
      <img
        src={estadoPuerta === "abierta" ? PuertaAbierta : PuertaCerrada}
        alt="Estado de la puerta"
        style={estiloImagen}
      />
      <div>
        <BotonAbierta />
        <BotonCerrada />
      </div>
    </div>
  );
}
