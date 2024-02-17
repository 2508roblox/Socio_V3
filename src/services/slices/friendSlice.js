import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friendData: localStorage.getItem('friend')   ? JSON.parse(localStorage.getItem('friend')) : {
        friend: [],
        request: [],
        requesting: [],
        allUser: []
    }
}
const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {

        //action
        setFriend: (state, action) => {
            state.friendData.friend = action.payload ?? []
            localStorage.setItem('friend', JSON.stringify(state.friendData))

        },
        setRequest: (state, action) => {
            state.friendData.request = action.payload ?? []
            localStorage.setItem('friend', JSON.stringify(state.friendData))

        },
        setRequesting: (state, action) => {
            state.friendData.requesting = action.payload ?? []
            localStorage.setItem('friend', JSON.stringify(state.friendData))

        },
        setAllUsers: (state, action) => {
            state.friendData.allUser =  action.payload ?? []
              
            localStorage.setItem("friend", JSON.stringify(state.friendData));
          },

    }
})
export const { setFriend,
    setRequest,
    setRequesting,
    setAllUsers,
} = friendSlice.actions
export default friendSlice.reducer