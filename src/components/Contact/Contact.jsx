import css from './Contact.module.css';

const Contact = ({ items, onDelete }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.listItem}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
