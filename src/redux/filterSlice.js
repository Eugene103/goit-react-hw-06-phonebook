import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter', 
    initialState: {
    filter: '',
    }, 
    reducers: {
        checkFilter(state, action) {state.filter = action.payload},
    }
})

export const filterReducer = filterSlice.reducer;
export const { checkFilter} = filterSlice.actions