import { useState } from "react";
import ItemsContainer from "./ItemsContainer";
import "./App.css";

function App() {
  const [listaTarefas, setListaTarefas] = useState([
    "Lavar roupa",
    "Ir ao mercado",
    "Comprar pão",
  ]);
  return (
    <div>
      <h1>Minha lista de tarefas</h1>
      <h2>Aqui vai um item de adição de tarefas</h2>
      <ItemsContainer listaTarefas={listaTarefas} />
    </div>
  );
}

export default App;
