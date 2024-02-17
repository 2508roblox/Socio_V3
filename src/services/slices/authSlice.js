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
        updateBannerRedux: (state, action) => {
            state.userInfo.user.banner = action.payload
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        },
        updateProfileRedux: (state, action) => {
            state.userInfo.user.firstName = action.payload.firstName
            state.userInfo.user.lastName = action.payload.lastName
            state.userInfo.user.username = action.payload.username
            state.userInfo.user.email = action.payload.email
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        },
        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')

        }
    }
})
export const { setCredentiald, logout, updateAvatarRedux, updateBannerRedux, updateProfileRedux } = authSlice.actions
export default authSlice.reducer