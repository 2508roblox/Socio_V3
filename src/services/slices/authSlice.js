import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        //action
        setCredentiald: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))

        },
        updateAvatarRedux: (state, action) => {
            state.userInfo.user.avatar = action.payload
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo))



        },
        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')

        }
    }
})
export const { setCredentiald, logout, updateAvatarRedux } = authSlice.actions
export default authSlice.reducer