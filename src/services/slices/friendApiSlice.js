import { apiSlice } from "./apiSlice";
const FRIEND_URL = '/api/v1/friends'
// api
export const friendApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getFriends: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friends`,
                method: 'GET',


            })
        }),
        deleteFriend: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friends`,
                method: 'DELETE',
                body: data


            })
        }),
        getOtherUsersRequest: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friend-requests`,
                method: 'GET',


            })
        }),
        getUserRequest: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friend-requests/sent`,
                method: 'GET',
            })
        }),
        getUserInfoById: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friend-requests/info/${data}`,
                method: 'GET',
            })
        }),

        sendFriendRequest: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friend-requests`,
                method: 'POST',
                body: data
            })
        }),
        confirmFriendRequest: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friend-requests/confirm`,
                method: 'PUT',
                body: data
            })
        }),
    })
})
export const { useGetFriendsMutation, useGetOtherUsersRequestMutation, useGetUserRequestMutation, useSendFriendRequestMutation, useConfirmFriendRequestMutation, useDeleteFriendMutation, useGetUserInfoByIdMutation } = friendApiSlice
