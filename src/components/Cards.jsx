import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>{
         characters.map(({name,species,gender,image,onClose}) => {
            return <Card 
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
         })
      }
   </div>
   );
}
