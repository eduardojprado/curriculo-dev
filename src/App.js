import React from "react";
import { TaskContextProvider } from "./context/TaskContext";
import ListaDeTarefas from "./components/ListaDeTarefas";
import AdicionarTarefa from "./components/AdicionarTarefa";
import Filtros from "./components/Filtros";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <TaskContextProvider>
      <div className="App">
        <Header />
        <h1>Gerenciador de Tarefas</h1>
        <AdicionarTarefa />
        <p></p>
        <Filtros />
        <p></p>
        <ListaDeTarefas />
        <p></p>
        <Footer />
      </div>
    </TaskContextProvider>
  );
};

export default App;
