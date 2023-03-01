import { useState } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   // props = { onSearch=función }

   const [character, setCharacter] = useState("");

   const handleChange = element => {
      const {value} = element.target;
      //console.log(e);
      setCharacter(value);
   }

   const handleSearch = () => {//Para limpiar el contenedor despues de cada busqueda
      props.onSearch(character);
      setCharacter("");
   }


   return (
    <div className={styles.container}>
       <input
          type="search"
          name="search"   
          id="search"
          value = {character}
          onChange={handleChange}
       />
       <button onClick={handleSearch}>Agregar</button>
    </div>
 );
}
