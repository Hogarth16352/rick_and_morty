import SearchBar from "./SearchBar";

export default function NavBar(props) {
    // props = { onSearch=función }
    return (
       <div>
          <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }