import React, { useState, useEffect } from "react";

const MiApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://mindicador.cl/api")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h3>Indicador Económico Diario </h3>
      {data ? (
        <ul>
          {Object.keys(data).map((indicador) => (
            <li key={indicador}>
              <strong>{indicador}: </strong>
              {data[indicador].valor}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default MiApi;
