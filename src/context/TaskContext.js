import React, { createContext, useReducer, useState } from "react";

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

const TaskContextProvider = ({ children }) => {
  const initialTasks = [
    {
      id: 1,
      text: "Tarefa inicial - visível sempre que iniciar o projeto.",
      completed: false,
    },
  ];

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [filter, setFilter] = useState("all");

  const filterTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, dispatch, filterTasks, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider, TaskContext };
