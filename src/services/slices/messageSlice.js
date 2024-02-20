import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageData: localStorage.getItem('message')   ? JSON.parse(localStorage.getItem('message')) : null
}
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        //action
        setMessage: (state, action) => {
            state.messageData = action.payload ?? []
            localStorage.setItem('message', JSON.stringify(state.messageData))
        },
        pushMessage: (state, action) => {
            state.messageData = [...state.messageData, action.payload] ?? []
            localStorage.setItem('message', JSON.stringify(state.messageData))
        },
    }
})
export const {
    setMessage,
    pushMessage
} = messageSlice.actions
export default messageSlice.reducer