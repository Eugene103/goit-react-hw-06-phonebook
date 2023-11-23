import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter', 
    initialState: {
    filter: '',
    }, 
    reducers: {
        checkFilter(state, action) { state.filter = action.payload },
        initialFilter(state, action) {state.filter = ''}
    }
})

export const filterReducer = filterSlice.reducer;
export const { checkFilter, initialFilter} = filterSlice.actions