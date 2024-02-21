const Contact = ({ item, onDelete }) => {
  return (
    <>
      <div>
        <p>{item.name}</p>
        <p>{item.number}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </>
  );
};

export default Contact;
