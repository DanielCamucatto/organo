import {AiFillCloseCircle,AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'; 

type ColaboradorProps = {
    image: string
    name: string
    role: string
    mainColor: string
    id: string
    like: boolean
    handleLike: (value: string) => void 
    handleDeleteEmployee: () => void
}

const Colaborador = ({image,name, role, mainColor, handleDeleteEmployee, handleLike, id, like}: ColaboradorProps) => {
    function changeLike(){
        handleLike(id)
    }    

    const propsLikeButton = {
        size: 25, 
        fill: '#ff0000',
        onClick: changeLike
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='delete' onClick={handleDeleteEmployee} />
            <div className='cabecalho' style={{backgroundColor: mainColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{role}</h5>
                <div className='like-button'>
                {like ? (
                        <AiFillHeart {...propsLikeButton} />
                    ) : (
                        <AiOutlineHeart {...propsLikeButton} />
                        )
                }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;