import ItemsContainer from "./ItemsContainer";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Minha lista de tarefas</h1>
      <ItemsContainer listaTarefas={["Lavar roupa", "Ir ao mercado"]} />
    </div>
  );
}

export default App;
