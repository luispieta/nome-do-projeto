export interface ITarefa {
  id: string;
  tarefa: string;
  tempo: string;
  selecionado?: boolean;
  completado?: boolean;
}


export interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}