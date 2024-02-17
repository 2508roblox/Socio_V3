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

        },
        deletePostById: (state, action) => {
            const postIdToDelete = action.payload;
            const updatedPosts = state.postData.posts.filter(
                (post) => post._id !== postIdToDelete
            );
            state.postData.posts = updatedPosts; // Update the `posts` property of `postData`
            localStorage.setItem("postData", JSON.stringify(state.postData));
        },

    }
})
export const { setPosts, deletePostById } = postSlice.actions
export default postSlice.reducer