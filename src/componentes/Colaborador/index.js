import {AiFillCloseCircle,AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'; 

const Colaborador = ({image,name, role,id, mainColor, handleDeleteEmployee}) => {

    const handleLike = (id) => {
        
    }

    const propsLikeButton = {
        size: 25, 
        fill: '#ff0000',
        onClick: handleLike
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='delete'onClick={handleDeleteEmployee} />
            <div className='cabecalho' style={{backgroundColor: mainColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <div className='like-button'>
                    {id ? <AiOutlineHeart {...propsLikeButton}/> : <AiFillHeart {...propsLikeButton}/> }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;