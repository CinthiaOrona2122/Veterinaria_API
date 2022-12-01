import React from "react";

const Mascotas = ({ perros = [] }) => {
  return (
    <div className="row">
      {perros.map((item, index) => (
        <div key={index} className="col-4 mb-4">
          <div className="card" style={{ minWith: "100px" }}>
            <img src={item.pictures} alt="Perros" />
            <div className="card-body">
              <h5 className="card-title">Nombre: {item.name}</h5>
              <hr />
              <div className="card-text">
                <p> Descripcion: {item.description}</p>
                <p> Sexo: {item.gender}</p>
                <p> Edad aprox.: {item.age.number} {item.age.type}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mascotas;
