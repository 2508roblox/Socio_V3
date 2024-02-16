import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: localStorage.getItem('postData') ? JSON.parse(localStorage.getItem('postData')) : null 
}
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

        //action
        setPosts: (state, action) => {
            state.postData = action.payload
            localStorage.setItem('postData', JSON.stringify(action.payload))

        }
        
    }
})
export const { setPosts} = postSlice.actions
export default postSlice.reducer