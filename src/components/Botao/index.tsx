import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    children: React.ReactNode;
    tipo?: "button" | "submit" | "reset";
    onClick?: () => void
}

export default function Botao({ children, tipo = "button", onClick }: BotaoProps) {
    return (
        <button onClick={onClick} type={tipo} className={style.botao}>
            {children}
        </button>
    );
}