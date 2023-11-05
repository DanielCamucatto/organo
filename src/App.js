import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const teams = [
    {
      name: 'Programação', 
      mainColor: '#57C278', 
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End', 
      mainColor: '#82CFFA', 
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science', 
      mainColor: '#A6D157', 
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops', 
      mainColor: '#E06B69', 
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design', 
      mainColor: '#D86EBF', 
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile', 
      mainColor: '#FEBA05', 
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão', 
      mainColor: '#FF8A29', 
      secondaryColor: '#FFEEDF',
    },
  ]
  const [employees, setEmployees] = useState([]);

  const handleNewEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario squad={teams.map(squad => squad.name)} handleResgisteredEmployee = {employee => handleNewEmployee(employee)}/>
      {teams.map(team => 
        <Time 
          name={team.name} 
          key={team.name}
          mainColor={team.mainColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(employees => employees.team === team.name)}
        />
      )}
      <Rodape/>
    </div>
  );
}

export default App;
