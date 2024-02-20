import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatData: localStorage.getItem('chat') ? JSON.parse(localStorage.getItem('chat')) : {
        chat: [],
        current: null
    }
}
const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {

        //action
        setChatRoomList: (state, action) => {
            state.chatData.chat = action.payload
            localStorage.setItem('chat', JSON.stringify(state.chatData))

        },
        setCurrentRoom: (state, action) => {
            state.chatData.current = action.payload
            localStorage.setItem('chat', JSON.stringify(state.chatData))

        },
       
    }
})
export const { setChatRoomList, setCurrentRoom } = chatSlice.actions
export default chatSlice.reducer