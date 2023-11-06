import Colaborador from '../Colaborador';
import './team.css'; 

const Time = (props) => {
    return (
        (props.employees.length > 0) &&
        <section className='time' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
            <div className='colaboradores'>
                {props.employees.map(
                    colaboradores => 
                        <Colaborador 
                            key={colaboradores.name}
                            name={colaboradores.name}
                            role={colaboradores.role}
                            image={colaboradores.image}
                            mainColor={props.mainColor}
                        />)}
            </div>  
        </section>
    )
}

export default Time;