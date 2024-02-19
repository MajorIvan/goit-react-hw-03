import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  return (
    <div className={css.container}>
      <form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <input type="text" id={nameId} />
        <label htmlFor={numberId}>Number</label>
        <input type="text" id={numberId} />
      </form>
      <button type="">Add contact</button>
    </div>
  );
};

export default ContactForm;
