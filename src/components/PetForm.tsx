import { useState, useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import { Pet } from "../types/pets";
import "../styles/App.css"; // Importa los estilos específicos

const PetForm = () => {
  const petContext = useContext(PetsContext);

  if (!petContext) {
    return <p>Error: No se encontró el contexto</p>;
  }

  const { addPet } = petContext;

  const [pet, setPet] = useState<Pet>({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    imageUrl: "",
    birthDate: "",
    price: 0,
    code: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpia el error al escribir
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!pet.name) newErrors.name = "El nombre es obligatorio.";
    if (!pet.imageUrl) newErrors.imageUrl = "La URL de la imagen es obligatoria.";
    if (!pet.birthDate) newErrors.birthDate = "La fecha de nacimiento es obligatoria.";
    if (pet.price <= 0) newErrors.price = "El precio debe ser mayor a 0.";
    if (!/^[A-Z]{3}\d{3}$/.test(pet.code)) newErrors.code = "El código debe tener el formato ABC123.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    addPet(pet);
    setPet({ id: crypto.randomUUID(), name: "", description: "", imageUrl: "", birthDate: "", price: 0, code: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={pet.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={pet.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="imageUrl">URL de Imagen</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={pet.imageUrl}
          onChange={handleChange}
          required
        />
        {errors.imageUrl && <p className="error-message">{errors.imageUrl}</p>}
      </div>
      <div>
        <label htmlFor="birthDate">Fecha de Nacimiento</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={pet.birthDate}
          onChange={handleChange}
          required
        />
        {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}
      </div>
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          value={pet.price}
          onChange={handleChange}
          min="1"
          required
        />
        {errors.price && <p className="error-message">{errors.price}</p>}
      </div>
      <div>
        <label htmlFor="code">Código</label>
        <input
          type="text"
          id="code"
          name="code"
          value={pet.code}
          onChange={handleChange}
          required
        />
        {errors.code && <p className="error-message">{errors.code}</p>}
      </div>
      <button type="submit">Agregar Mascota</button>
    </form>
  );
};

export default PetForm;