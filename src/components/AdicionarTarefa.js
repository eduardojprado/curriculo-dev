import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AdicionarTarefa = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionarTarefa;
