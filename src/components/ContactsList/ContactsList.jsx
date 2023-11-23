import {delContact } from "redux/contactsSlice";
import { Container, Item, List, Btn } from "./ContactsList.styled";
import { useDispatch } from 'react-redux';


export const ContactsList = ({ arr}) => {
    const dispatch = useDispatch();

    const removeContact = (id) => [
        dispatch(delContact(id))
  ]
    return <Container>
        <List>
            {arr.map(({id, name, number}) => (
                <Item key={id}>
                    <p>{name}:</p><p>{number}</p>
                <Btn id={id} onClick={evt => removeContact(evt.target.id)}>Delete</Btn>
                </Item>
                
            ))}
    </List>
    </Container>
}