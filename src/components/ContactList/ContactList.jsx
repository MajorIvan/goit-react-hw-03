import Contact from "../Contact/Contact";

const ContactList = ({ value, onDelete }) => {
  return (
    <div>
      <Contact items={value} onDelete={onDelete} />
    </div>
  );
};

export default ContactList;
