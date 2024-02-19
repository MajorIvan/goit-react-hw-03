import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const serachId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={serachId}>Find contacts by name</label>
      <input type="text" id={serachId} />
    </div>
  );
};

export default SearchBox;
