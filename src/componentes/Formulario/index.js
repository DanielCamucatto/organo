import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [name, setName] = useState(''); 
    const [role, setRole] = useState('');
    const [image, setImage] = useState(''); 
    const [team, setTeam] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        props.handleResgisteredEmployee({
            name, 
            role, 
            image, 
            team
        })

        setImage('');
        setName(''); 
        setRole('');
        setTeam('');
    }



    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    value={name}
                    setInputValue={value => setName(value)}
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    required={true}
                    value={role}
                    setInputValue={value => setRole(value)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    setInputValue={value => setImage(value)}
                />
                <ListaSuspensa 
                    label= "Time" 
                    items={props.squad} 
                    required={true}
                    value={team} 
                    setInputValue={value => setTeam(value)}
                />
                <Botao>
                    Adicionar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario