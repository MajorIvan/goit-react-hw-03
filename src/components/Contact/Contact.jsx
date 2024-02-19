const Contact = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
