import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ query, onChange }) => {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={query}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
