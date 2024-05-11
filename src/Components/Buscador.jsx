import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const Buscador = ({ data }) => {
  // búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  //cambio en el input de búsqueda
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //  filtrar los resultados de búsqueda cuando cambia el término de búsqueda
  useEffect(() => {
    if (data) {
      // Filtrar los indicadores que coincidan con el término de búsqueda
      const results = Object.keys(data)
        .filter((key) =>
          data[key].nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        // Ordenar alfabéticamente por el nombre del indicador
        .sort((a, b) => data[a].nombre.localeCompare(data[b].nombre));
      setSearchResults(results);
    }
  }, [searchTerm, data]); // Ejecutar el efecto cuando cambia searchTerm o data

  return (
    <div>
      <h2>Buscador</h2>
      {}
      <input
        type="text"
        placeholder="Buscar indicador..."
        value={searchTerm}
        onChange={handleChange}
      />

      {}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {}
          {searchResults.map((key) => (
            <tr key={key}>
              {}
              <td>{data[key].nombre}</td>
              <td>{data[key].valor}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// PropTypes para verificar la forma correcta de los datos
Buscador.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
    })
  ),
};

export default Buscador;
