import React from "react";
import ReactDOM from "react-dom/client";  // Corregir la importación de ReactDOM
import { Contador } from "./components/contador";
import { Text } from "./components/texto";
import { LED } from "./components/led";

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Contador/>
    <Text/>
    <LED />
    </>
)