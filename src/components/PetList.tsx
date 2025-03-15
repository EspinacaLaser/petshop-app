import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import PetCard from "./PetCard";
import "../styles/App.css"; // Importa los estilos específicos

const PetList = () => {
  const petContext = useContext(PetsContext);

  if (!petContext) {
    return <p>Error: No se encontró el contexto</p>;
  }

  const { pets } = petContext;

  return (
    <div className="container">
      {pets.length === 0 ? <p>No hay mascotas registradas.</p> : pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </div>
  );
};

export default PetList;