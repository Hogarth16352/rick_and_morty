import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles';

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
      <div>
      <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App
