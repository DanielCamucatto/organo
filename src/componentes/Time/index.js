import Colaborador from '../Colaborador';
import './team.css'; 

const Time = ({time, employees, handleDeleteEmployee, changeColor}) => {
    return (
        (employees.length > 0) &&
        <section className='time' style={{backgroundColor: time.secondaryColor}}>
            <input type='color' value={time.mainColor} className='input-color' onChange={ev => changeColor(ev.target.value, time.name)} />
            <h3 style={{borderColor: time.mainColor}}>{time.name}</h3>
            <div className='colaboradores'>
                {employees.map((colaborador, index) => 
                    <Colaborador 
                        key={index} 
                        name={colaborador.nome} 
                        role={colaborador.cargo} 
                        image={colaborador.imagem} 
                        mainColor={time.mainColor} 
                        handleDeleteEmployee={handleDeleteEmployee} 
                    />
                )}
            </div>  
        </section>
    )
}

export default Time;