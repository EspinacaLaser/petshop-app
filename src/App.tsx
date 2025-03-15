import { PetsProvider } from "./context/PetsContext";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";

function App() {
  return (
    <PetsProvider>
      <PetForm />
      <PetList />
    </PetsProvider>
  );
}

export default App;
