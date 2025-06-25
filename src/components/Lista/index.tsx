import React from "react";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [{
            tarefa: "React",
            tempo: "01:00:00"
        },
        {
            tarefa: "Spring Boot",
            tempo: "00:30:00"
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => 
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default Lista;