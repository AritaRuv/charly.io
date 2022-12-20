import Card from './components/card';
import Filters from './components/filters';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

const [companies, setCompanies ] = useState([])
const [status, setStatus ] = useState('')
const [date, setDate ] = useState('')
const [name, setName] = useState('')

let url = 'http://localhost:5000/'

useEffect(()=>{
  axios.get(url).then((response) =>{
    setCompanies(response.data)
  },[companies])
})

  let render = () =>{
    function SortArrayDate(x, y){
      if (x.date< y.date) {return -1;}
      if (x.date > y.date) {return 1;}
      return 0;
  }
  function SortArrayName(x, y){
    if (x.name< y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}
    let rend = status === '' ? companies : companies.filter(e => e.status === status)
    if(date === 'asc') {
      rend = rend.sort(SortArrayDate)}
    if(name === 'asc') {
      rend = rend.sort(SortArrayName)}
    return rend
  } 
  
  return (
    <div className="container">
      <Filters setStatus={setStatus} setDate={setDate}setName={setName} companies={companies} setCompanies={setCompanies}/>
      <div className='text'>
        <text>Registros:</text>
          <text>{render().length}</text>
      </div>
      <div className='card-container'>
      {
        
          render().map((c)=>{
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
    </div>
  );
}

export default App;
