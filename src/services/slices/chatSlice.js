import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: localStorage.getItem('chat') ? JSON.parse(localStorage.getItem('chat')) : null
}
const chatSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        //action
        setChatRoomList: (state, action) => {
            state.chat = action.payload
            localStorage.setItem('chat', JSON.stringify(action.payload))

        },
       
    }
})
export const { setChatRoomList } = chatSlice.actions
export default chatSlice.reducer