import { Conteiner, Label, Err, Btn } from "./ContactForm.styled";
import {  Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.number()
     .min(2, 'Too Short!')
     .required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return <Formik
      initialValues={{
        name: '',
        number: '',
        }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
          onAdd(values)
          actions.resetForm();
      }}
    >
      <Conteiner>
            <Label htmlFor="name">Name
          <Field id="name" name="name" placeholder="Jane" />    
          <ErrorMessage name="name">{msg => <Err>{msg}</Err>}</ErrorMessage>
        </Label>
        
        <Label htmlFor="number">Number
          <Field id="number" name="number" placeholder="459-12-56" />
          <ErrorMessage name="number">{msg => <Err>{msg}</Err>}</ErrorMessage>
        </Label>
        
        <Btn type="submit">Add contact</Btn>
      </Conteiner>
    </Formik>
}