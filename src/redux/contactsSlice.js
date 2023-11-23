import { createSlice } from "@reduxjs/toolkit";

// export const checkStorage = createAction('contacts/checkStrage') 

// const initialState = {
//     contacts: [],
// }

// export const contactsReducer = createReducer(initialState, builder =>
//     builder.addCase(checkStorage, (state, action) => {
//     state.contacts = action.payload;
//     })
// )

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
    contacts: [],
    }, 
    reducers: {
        addContact(state, action) { state.contacts.push(action.payload) },
        delContact(state, action) { const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);}
    }, 
})

export const contactsReducer = contactsSlice.reducer;
export const { addContact, delContact} = contactsSlice.actions