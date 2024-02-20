import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBar from "../SearchBar/SearchBar";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact ];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBar value={searchFilter} onChange={setSearchFilter} />
      <ContactList value={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
