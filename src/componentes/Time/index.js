import Colaborador from '../Colaborador';
import './team.css'; 

const Time = ({time, employees}) => {
    return (
        (employees.length > 0) &&
        <section className='time' style={{backgroundColor: time.secondaryColor}}>
            <h3 style={{borderColor: time.mainColor}}>{time.name}</h3>
            <div className='colaboradores'>
                {employees.map(
                    colaboradores => 
                        <Colaborador 
                            key={colaboradores.name}
                            name={colaboradores.nome}
                            role={colaboradores.cargo}
                            image={colaboradores.imagem}
                            mainColor={time.mainColor}
                        />)}
            </div>  
        </section>
    )
}

export default Time;