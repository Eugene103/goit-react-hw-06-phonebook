import { Container, Item, List, Btn} from "./ContactsList.styled";


export const ContactsList = ({ arr, onDell }) => {
    return <Container>
        <List>
            {arr.map(({id, name, number}) => (
                <Item key={id}>
                    <p>{name}:</p><p>{number}</p>
                <Btn id={id} onClick={evt => onDell(id)}>Delete</Btn>
                </Item>
                
            ))}
    </List>
    </Container>
}