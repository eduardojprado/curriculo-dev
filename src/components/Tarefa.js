import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Tarefa = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
      />
      {task.text}
    </li>
  );
};

export default Tarefa;
