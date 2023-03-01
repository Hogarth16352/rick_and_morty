import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NotFound from "./components/NotFound/NotFound";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "alan@mail.com";
  const password = "123456";
  const navigate = useNavigate();

  function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  function logout() {
      setCharacters([]);
      setAccess(false);
      navigate('/');
   }
 

  useEffect( () => {
    !access && navigate('/');
  }, [access]);
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
          const characterExists = characters.find((char) => char.id === data.id);//Se busca el personaje en el estado
          if (!characterExists) {//Si no existe mmuestra el estado con las imagenes solicitadas
            setCharacters((oldChars) => [...oldChars, data]);
          } 
        }else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    // [ 4, 5, 7]
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      {/* <GlobalStyles /> */}
      {location.pathname !== "/" && <NavBar onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route exact path="/" element={<Form login={login}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> } />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
