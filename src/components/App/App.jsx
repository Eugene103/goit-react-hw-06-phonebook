import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container, Section } from "./GlobalStyle";
import { FindCont } from "components/FindCont/FindCont";
import { useSelector} from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter)
  
 const filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  ;

  return <Section>
      <h1>PhoneBook</h1>
      <ContactForm  />
      <Container>
        <h2>Contacts</h2>
        <FindCont />
      <ContactsList arr={filterContacts}/>
      </Container>
    </Section>
}


