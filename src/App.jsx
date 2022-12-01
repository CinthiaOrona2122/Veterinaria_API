import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Mascotas from "./componentes/Mascotas";
import Paginacion from "./componentes/Paginacion";

function App() {
  const [perros, setPerros] = useState([]);
  const [info, setInfo] = useState({});

  //Url con todos los datos raw.
  const initialUrl = "https://apimocha.com/veterinariarepo/api/perros";

  //Funcion que trae toda la info 'personajes'
  const fetchMascotas = (url) => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPerros(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchMascotas(info.prev);
  };

  const onNext = () => {
    fetchMascotas(info.next);
  };

  //Se ejecuta por defecto por primera vez al renderizar el componente y en cada updateting.
  useEffect(() => {
    fetchMascotas(initialUrl);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Mascotas perros={perros} />
        <Paginacion
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
