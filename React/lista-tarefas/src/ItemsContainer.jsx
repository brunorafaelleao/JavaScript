import ItemLista from "./itemElemento";

const ItemsContainer = ({ listaTarefas }) => {
  return (
    <div>
      {listaTarefas.map((t) => (
        <ItemLista lista={t} />
      ))}
    </div>
  );
};

export default ItemsContainer;
