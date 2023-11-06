import Colaborador from '../Colaborador';
import './team.css'; 

const Time = ({time, employees, handleDeleteEmployee}) => {
    return (
        (employees.length > 0) &&
        <section className='time' style={{backgroundColor: time.secondaryColor}}>
            <h3 style={{borderColor: time.mainColor}}>{time.name}</h3>
            <div className='colaboradores'>
                {/* {employees.map(
                    colaboradores => 
                        <Colaborador 
                            key={colaboradores.nome}
                            name={colaboradores.nome}
                            role={colaboradores.cargo}
                            image={colaboradores.imagem}
                            mainColor={time.mainColor}
                        />)} */}

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