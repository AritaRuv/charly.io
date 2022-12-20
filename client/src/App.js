import Card from './components/card';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [companies, setCompanies ] = useState([])
let url = 'http://localhost:5000/'

useEffect(()=>{
  axios.get(url).then((response) =>{
    setCompanies(response.data)
  })
})

  return (
    <div className="App">
    {
      companies.map((c)=>{
        return(
          <Card
            key={c.id} 
            name={c.name}
            status={c.status}
            date={c.date}/>
        )
      })
    }
      
    </div>
  );
}

export default App;
