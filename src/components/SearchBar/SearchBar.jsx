import { useId } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input 
        type="text"
        id={searchId}  
        value={value}
        onChange={evt => onChange(evt.target.value)} />
    </div>
  );
};

export default SearchBar;
