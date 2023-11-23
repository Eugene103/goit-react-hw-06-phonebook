import { ContactForm } from "components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container, Section } from "./GlobalStyle";
import { FindCont } from "components/FindCont/FindCont";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('saved-contacts')
    if (savedContacts !== null) {
     return JSON.parse(savedContacts)
    } return []
  })
  const [filter, setFilter] = useState(``)

  useEffect(() => {
      localStorage.setItem('saved-contacts', JSON.stringify(contacts))
  }, [contacts])
  const addContact = (newContact) => {
    const newNameToLower = newContact.name.toLocaleLowerCase()
    const checkName = contacts.some(contact => contact.name.toLocaleLowerCase() === newNameToLower)
    if (checkName) {
      alert(`${newContact.name} is already in contacts`)
      return
    }
    setContacts(prevState => [...prevState, {...newContact, id: nanoid()}])
  }
  const delContact = (id) => [
    setContacts(prevState => prevState.filter(contact => contact.id !== id))
  ]
  const changeFilter = (value) =>{
    setFilter(value)
  }
 const filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  ;

  return <Section>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <Container>
        <h2>Contacts</h2>
        <FindCont onFilter={changeFilter} filterValue={filter} />
      <ContactsList arr={filterContacts} onDell={delContact} />
      </Container>
    </Section>
}


