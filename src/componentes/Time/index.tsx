import React from 'react';
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './team.css'; 
import { ITime } from '../../shared/interfaces/Itime';
import { IEmployess } from '../../shared/interfaces/IEmployees';

type timeProps = {
    time: ITime
    employees: IEmployess[]
    handleLike: (id: string) => void
    handleDeleteEmployee: (id: string) => void
    changeColor: (color: string, timeId: string) => void
}

const Time = ({time, employees, handleDeleteEmployee, changeColor, handleLike}: timeProps) => {
    return (
        (employees.length > 0) &&
        <section className='time' style={{ backgroundColor: time.color ? hexToRgba(time.color, '0.6') : 'transparent' }}>
            <input type='color' value={time.color} className='input-color' onChange={ev => changeColor(ev.target.value, time.id)} />
            <h3 style={{borderColor: time.color}}>{time.name}</h3>
            <div className='colaboradores'>
                {employees.map((colaborador, index) => 
                    <Colaborador 
                        key={index}
                        like={colaborador.like as boolean}
                        id={colaborador.id as string}
                        name={colaborador.nome} 
                        role={colaborador.cargo} 
                        image={colaborador.imagem} 
                        mainColor={time.color} 
                        handleDeleteEmployee={() => handleDeleteEmployee(colaborador.id as string)} 
                        handleLike={handleLike}
                    />
                )}
            </div>  
        </section>
    )
}

export default Time;