import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'
import { IRegisterEmployee } from '../../shared/interfaces/IEmployees'
import { INewTime } from '../../shared/interfaces/Itime'

type FormProps = {
    squad: string[]
    handleResgisteredEmployee: (newResgisterEmployee: IRegisterEmployee) => void
    handleResgisterNewTeams: (newTimeRegister: INewTime) => void
}

const Formulario = (form: FormProps) => {

    const [nome, setName] = useState(''); 
    const [cargo, setRole] = useState('');
    const [imagem, setImage] = useState(''); 
    const [time, setTeam] = useState('');
    const [timeName, setTimeName] = useState(''); 
    const [timeColor, setTimeColor] = useState('#000000');

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        form.handleResgisteredEmployee({
            nome, 
            cargo,
            imagem, 
            time
        }); 


        setImage('');
        setName(''); 
        setRole('');
        setTeam('');
    }

    const registerNewTeam = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        form.handleResgisterNewTeams({name: timeName, color:timeColor});

        setTimeName(''); 
        setTimeColor('');
    }


    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required
                    value={nome}
                    setInputValue={value => setName(value)}
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    required
                    value={cargo}
                    setInputValue={value => setRole(value)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    setInputValue={value => setImage(value)}
                />
                <ListaSuspensa 
                    label= "Time" 
                    items={form.squad} 
                    required
                    value={time} 
                    setInputValue={value => setTeam(value)}
                />
                <Botao>
                    Adicionar card
                </Botao>
            </form>
            <form onSubmit={registerNewTeam}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    label="Nome do Time" 
                    placeholder="Digite o nome do novo time" 
                    required
                    value={timeName}
                    setInputValue={value => setTimeName(value)}
                />
                <CampoTexto 
                    type='color'
                    label="Cor do time"
                    placeholder="Digite a cor do time" 
                    required
                    value={timeColor}
                    setInputValue={value => setTimeColor(value)}
                />
                <Botao>
                    Adicionar time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario