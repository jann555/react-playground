import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( (users) =>setMonsters(users));
  }, []);

  useEffect(() =>{
    const filterMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filterMonsters);
  } , [monsters, searchField])

  const onSearchChange = (event) =>{
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search'
        className='monsters-search-box' 
        />
        <CardList monsters = {filterMonsters}/>
      </div>
  )
}

export default App;
