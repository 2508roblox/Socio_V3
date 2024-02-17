import { apiSlice } from "./apiSlice";
const FRIEND_URL = 'http://localhost:3000/api/v1/friends'
// api
export const friendApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getFriends: builder.mutation({
            query: (data) => ({
                url: `${FRIEND_URL}/friends`,
                method: 'GET',
                
                
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
      
       
    })
})
export const {useGetFriendsMutation ,useGetOtherUsersRequestMutation, useGetUserRequestMutation } = friendApiSlice
