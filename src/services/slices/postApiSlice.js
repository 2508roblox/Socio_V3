import { apiSlice } from "./apiSlice";
const USERS_URL = 'http://localhost:3000/api/v1/posts'
// api
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/create`,
                method: 'POST',
                body: data
                
            })
        }),
        getAllPostsByUserId: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/create`,
                method: 'POST',
                body: data
                
            })
        }),
        
    })
})
export const {useCreatePostMutation, useGetAllPostsByUserIdMutation } = userApiSlice