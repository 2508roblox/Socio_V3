import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/v1/conversations'
// api
export const chatApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllRoomByAuthId: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/user_conversation`,
                method: 'GET',


            })
        }),
        getRoomBySearchParams: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}/search`,
                method: 'GET',


            })
        }),
        createRoom: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data

            })
        }),
        inviteMembers: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data.room_id}/invite`,
                method: 'PUT',
                body: data

            })
        }),
       

    })
})
export const { useGetAllRoomByAuthIdMutation , useGetRoomBySearchParamsMutation, useCreateRoomMutation, useInviteMembersMutation} = chatApiSlice
 