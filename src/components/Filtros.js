import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Filtros = () => {
  const { setFilter } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
    </div>
  );
};

export default Filtros;
