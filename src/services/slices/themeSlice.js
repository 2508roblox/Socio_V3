import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light' 
}
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        //action
        toggleMode: (state, action) => {
            state.theme = action.payload
            localStorage.setItem('theme', JSON.stringify(action.payload))

        },
     
    }
})
export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer