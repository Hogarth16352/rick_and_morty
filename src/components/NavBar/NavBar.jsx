import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
   // props = { onSearch=función }
   return (
      <div className={styles.container}>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}

 //<button as={Link} to = "/home"><>