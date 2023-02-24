import { useState } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 180px; /* altura del título */
  left: 0;
  right: 0;
  z-index: 999;
`;

const Button = styled.button`
  font-family: 'Get Schwifty', sans-serif; /* fuente inspirada en Rick and Morty */
  color: #fff;
  background-color: #00b0ff; /* azul de Rick and Morty */
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0086c3; /* azul oscuro de Rick and Morty */
  }

  &:active {
    background-color: #005f8c; /* azul más oscuro de Rick and Morty */
  }
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  }
`

export default function SearchBar(props) {
   // props = { onSearch=función }

   const [character, setCharacter] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      //console.log(e);
      setCharacter(value);
   }

   return (
      <ButtonWrapper>
         <Input 
         type="search" 
         name="search" 
         id="search"
         onChange={handleChange}
         />
      <Button onClick={() => props.onSearch(character)}>Agregar</Button>
      </ButtonWrapper>
   );
}
