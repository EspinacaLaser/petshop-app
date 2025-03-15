import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";

const PetDetail = () => {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const petContext = useContext(PetsContext);

  if (!petContext) {
    return <p>Error: No se encontró el contexto</p>;
  }

  const { pets } = petContext;

  // Buscamos la mascota por su ID
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return <p>No se encontró la mascota.</p>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.imageUrl} alt={pet.name} width="200" />
      <p>{pet.description}</p>
      <p>Fecha de nacimiento: {pet.birthDate}</p>
      <p>Precio: ${pet.price}</p>
      <p>Código: {pet.code}</p>
    </div>
  );
};

export default PetDetail;
