import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
      
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
      
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
      
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
      
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#D86EBF',
      
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FEBA05',
      
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
      
    },
  ]);

  const inicial = [
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[0].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[0].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[0].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[0].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[1].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[1].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[1].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[1].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[2].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[2].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[2].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[2].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[3].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[3].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[3].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[3].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[4].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[4].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[4].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[4].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[5].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[5].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[5].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[5].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: teams[6].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: teams[6].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: teams[6].name
    },
    {
      like: false,
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: teams[6].name
    },
  ];


  const [employees, setEmployees] = useState(inicial);

  const handleNewEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  const handleDeleteEmployee = (employeeToDelete) => {
    const updateEmployees = employees.filter(employee => employee.id !== employeeToDelete.id )
    setEmployees(updateEmployees)
  }

  const handleChangeColorTeams = (color, id) => {
    setTeams(teams.map(time => {
      if(time.id === id){
        time.color = color
      }
      return time
    }))
  }

  const handleResgisterNewTeams = (newTeams) => {
    setTeams([...teams, {...newTeams, id: uuidv4()}]);
  }

  const buttonLike = (id) => {
    // console.log('colaborador', employees)
    setEmployees(employees.map(colaborador => {
      if(colaborador.id === id){
        colaborador.like = !colaborador.like
      }
      return colaborador
    }));
  }

  return (
    <div className="App">
      <Banner src='/imagens/banner.png' alt='O banner principal da página do Organo'/>
      <Formulario 
        squad={teams.map(squad => squad.name)} 
        handleResgisteredEmployee={employee => handleNewEmployee(employee)} 
        handleResgisterNewTeams={ teams => handleResgisterNewTeams(teams)}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {teams.map((team, index) => 
          <Time 
            handleLike={buttonLike}
            changeColor={handleChangeColorTeams}
            key={index} 
            time={team} 
            employees={employees.filter(employee => employee.time === team.name )} 
            handleDeleteEmployee={handleDeleteEmployee}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
