import React from "react";
import SucursalItem from "./SucursalItem";
import LightText from "../texts/LightText";

const SucursalesList = ({ sucursales }) => {
  if (sucursales.length > 0) {
    return (
      <div className="sucursales-list mb-4">
        {sucursales.map((sucursal,i) => (
          <SucursalItem key={i} {...sucursal} />
        ))}
      </div>
    );
  }

  return <LightText className='mx-auto' text="No se han encontrado sucursales" />;
};

export default SucursalesList;
