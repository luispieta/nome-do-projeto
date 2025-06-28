import React from 'react';
import style from './Botao.module.scss';

function Botao(texto: any) {
    return (
        <button className={style.botao}>
            {texto.children}
        </button>
    )
}

export default Botao;