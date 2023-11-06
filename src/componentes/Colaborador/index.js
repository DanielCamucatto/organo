import './colaborador.css'; 

const Colaborador = ({image,name, role, mainColor}) => {
    console.log('colaborador',name)
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: mainColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Colaborador;