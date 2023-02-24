import Card from './Card';
import styled from 'styled-components';

const CardsStyle = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`

export default function Cards(props) {
   const { characters } = props;
   return (
      <CardsStyle>
         {characters.map( character => (
            <Card 
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => props.onClose(character.id)}
            />
         ))}
      </CardsStyle>
   );
}
