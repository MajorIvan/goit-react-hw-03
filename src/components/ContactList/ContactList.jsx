import Contact from "../Contact/Contact";

const ContactList = ({ value }) => {
  return (
    <div>
      <Contact items={value} />
    </div>
  );
};

export default ContactList;
