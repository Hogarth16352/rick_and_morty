import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
     <div className={styles.container}>
       <div className={styles.buttonContainer}>
         <button onClick={props.onClose} className={styles.closeButton}>X</button>
       </div>
       <div className={styles.imageContainer}>
         <Link to={`/detail/${props.id}`} className={styles.link}>
           <img src={props.image} alt={props.name} className={styles.image} />
         </Link>
         <h2 className={styles.name}>{props.name}</h2>
         <div className={styles.dataContainer}>
           <h4 className={styles.species}>{props.species}</h4>
           <h4 className={styles.gender}>{props.gender}</h4>
         </div>
       </div>
     </div>
   );
 }


