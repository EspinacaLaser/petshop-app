import { Pet } from "../types/pets";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import "../styles/App.css"; // Importa los estilos específicos

const PetCard = ({ pet }: { pet: Pet }) => {
  const petContext = useContext(PetsContext);

  if (!petContext) {
    return <p>Error: No se encontró el contexto</p>;
  }

  const { deletePet } = petContext;

  return (
    <div className="pet-card">
      <img src={pet.imageUrl} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.description}</p>
      <p>Fecha de nacimiento: {pet.birthDate}</p>
      <p>Precio: ${pet.price}</p>
      <p>Código: {pet.code}</p>
      <button onClick={() => deletePet(pet.id)}>Eliminar</button>
    </div>
  );
};

export default PetCard;