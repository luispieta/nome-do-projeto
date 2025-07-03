import React, { useState } from "react";
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import style from './App.module.scss';
import { ITarefa } from "../components/types/tarefa";

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa =>
        tarefa.id === tarefaSelecionada.id
          ? { ...tarefa, selecionado: true }
          : { ...tarefa, selecionado: false }
      )
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa =>
          tarefa.id === selecionado.id
            ? { ...tarefa, selecionado: false, completado: true }
            : tarefa
        )
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}