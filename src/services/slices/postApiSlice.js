import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/v1/posts'
// api
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/create`,
                method: 'POST',
                body: data

            })
        }),
        deletePost: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}/delete`,
                method: 'DELETE',

            })
        }),
        likePost: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}/like`,
                method: 'PUT',
                body: data

            })
        }),
        unLikePost: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}/unlike`,
                method: 'PUT',
                body: data

            })
        }),
        getAllPostsByUserId: builder.mutation({
            query: (user_id) => ({
                url: `${USERS_URL}/user/${user_id}`,
                method: 'GET',


            })
        }),

    })
})
export const { useCreatePostMutation, useLikePostMutation, useDeletePostMutation, useUnLikePostMutation, useGetAllPostsByUserIdMutation } = authApiSlice