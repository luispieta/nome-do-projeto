import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../types/tarefa';

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(tarefa => (
          <Item
            key={tarefa.id}
            {...tarefa}
            selecionarTarefa={selecionarTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}