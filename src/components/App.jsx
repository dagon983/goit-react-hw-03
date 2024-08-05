import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";




const contactData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

function App() {

  const [ contacts, setContacts ] = useState(()=>{
    const localData = JSON.parse(window.localStorage.getItem("contactsData"));
    if (localData !== null && localData.length !== 0) {
      return localData;
    }
    return contactData;
  });
  const [ filter, setFilter ] = useState("");



  const handleAdd = (data => {
    setContacts(prev => {
      return [...prev, data]
    })
  })

  useEffect(()=>{
    window.localStorage.setItem("contactsData", JSON.stringify(contacts))
  }, [contacts])

  const handleDelete = (contactId) => {
    setContacts(prev => prev.filter(item => item.id !== contactId))
  }

  const handleSubmit = (values, actions) => {
    handleAdd({
      id: nanoid(), 
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  }

  const currentContacts = contacts.filter(item => {
    return item.name && filter 
      ? item.name.toLowerCase().includes(filter.toLowerCase()) 
      : [];
  });

  return (
  <div>

    <h1>Phonebook</h1>
    <ContactForm handleSubmit={handleSubmit}/>
    <SearchBox onChange={setFilter} value={filter}/>
    <ContactList contacts={currentContacts} deleteContact={handleDelete}/>

  </div>
  )
}

export default App
