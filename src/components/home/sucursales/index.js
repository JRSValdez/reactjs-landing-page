import React, { useState, useEffect } from "react";
import axios from "axios";

import SucursalesUI from "./SucursalesUI";

function Surcursales() {
  const api_url = "https://api.elaniin.dev/api/locations";

  const [sucursales, setSucursales] = useState([]);

  const [search, setSearch] = useState("");

  const [type, setType] = useState("takeaway");

  useEffect(() => {
    try {
      getSucursales();
    } catch (err) {
      console.error(err);
    }
  }, [search, type]);

  const getSucursales = async () => {
    if (search === "" || search.length > 2) {
      const response = await axios({
        method: "get",
        url: `${api_url}?type=${type}&query=${search}`,
        json: true,
      });
      setSucursales(response.data.data);
    }
  };

  const changeSucursalType = (type) => {
    setType(type);
  };

  const onChangeSearch = (search) => {
    setSearch(search);
  };

  return (
    <SucursalesUI {...{ sucursales, changeSucursalType, onChangeSearch }} />
  );
}

export default Surcursales;
