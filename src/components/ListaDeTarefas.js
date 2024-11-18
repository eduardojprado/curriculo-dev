import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Tarefa from "./Tarefa";

const ListaDeTarefas = () => {
  const { filterTasks } = useContext(TaskContext);
  const tasks = filterTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <Tarefa key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
