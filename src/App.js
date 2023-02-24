import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles';
import {Routes,Route} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App() {
  const [characters, setCharacters] = useState([]);
  // const example = {
  //   name: "Morty Smith",
  //   species: "Human",
  //   gender: "Male",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    // [ 4, 5, 7]
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <GlobalStyles />
      <div>
        <NavBar onSearch = {onSearch} />
      </div>
      <Routes>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/home" element = 
        {<Cards characters={characters} onClose={onClose}/>}
        />
        <Route path = "/detail/:detailId" element = {<Detail />}/>
        </Routes>
    </div>
  )
}

export default App
