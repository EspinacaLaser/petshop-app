import { createContext, useState, ReactNode } from "react";
import { Pet } from "../types/pets";

// Definimos el tipo de datos que manejará el contexto de mascotas.
interface PetsContextType {
  pets: Pet[];                 // Lista de mascotas
  addPet: (pet: Pet) => void;   // Función para agregar una nueva mascota
  updatePet: (pet: Pet) => void; // Función para actualizar una mascota
  deletePet: (id: string) => void; // Función para eliminar una mascota
}

// Creamos el contexto de mascotas con TypeScript.
export const PetsContext = createContext<PetsContextType | undefined>(undefined);

// Proveedor del contexto de mascotas.
export const PetsProvider = ({ children }: { children: ReactNode }) => {
  // Estado para almacenar la lista de mascotas.
  const [pets, setPets] = useState<Pet[]>([]);

  // Función para agregar una nueva mascota a la lista.
  const addPet = (pet: Pet) => {
    setPets([...pets, pet]);
  };

  // Función para actualizar una mascota en la lista.
  const updatePet = (updatedPet: Pet) => {
    setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
  };

  // Función para eliminar una mascota de la lista.
  const deletePet = (id: string) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  return (
    <PetsContext.Provider value={{ pets, addPet, updatePet, deletePet }}>
      {children}
    </PetsContext.Provider>
  );
};
