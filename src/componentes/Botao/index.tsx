import React, { ReactElement } from 'react';
import './botao.css';

type botaoProps = {
    children: ReactElement | string
}

const Botao = (button: botaoProps) => {
    return(
        <button className='botao'>
            {button.children}
        </button>
    )
}

export default Botao