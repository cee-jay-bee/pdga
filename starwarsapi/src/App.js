import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PeopleList from '../PeopleList/PeopleList';

function App() {
  const [people, setPeople]= useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading]=useState(true);
  const [searchOutcome, setSearchOutcome] = useState('');

  // haven't used APIs before so was trying to get on load, but couldn'finalize the data coming through so finished the rest without that
  useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/1/');
      let data = res.json();
      setPeople(data.results);
      
    }
  }, [])

  const nameSearch = event => {
    people.map(x=>{
      if (x.contains(event.target.value)){
        setSearchOutcome(event.target.value);
      }
    })
  }

  return (
    <div className="App">
      hello
      <p>{JSON.stringify(people)}</p>
      <input type="text" placeholder="search for Star Wars person" onChange={(event)=>nameSearch(event) }></input>
      <h2>{searchOutcome}</h2>
      <PeopleList people = { people } />
    </div>
  );
}

export default App;
