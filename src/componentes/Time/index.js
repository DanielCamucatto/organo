import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './team.css'; 

const Time = ({time, employees, handleDeleteEmployee, changeColor}) => {
    return (
        (employees.length > 0) &&
        <section className='time' style={{backgroundColor: hexToRgba(time.color, '0.6')}}>
            <input type='color' value={time.color} className='input-color' onChange={ev => changeColor(ev.target.value, time.id)} />
            <h3 style={{borderColor: time.color}}>{time.name}</h3>
            <div className='colaboradores'>
                {employees.map((colaborador, index) => 
                    <Colaborador 
                        key={index}
                        name={colaborador.nome} 
                        role={colaborador.cargo} 
                        image={colaborador.imagem} 
                        mainColor={time.color} 
                        handleDeleteEmployee={() => handleDeleteEmployee(colaborador)} 
                    />
                )}
            </div>  
        </section>
    )
}

export default Time;