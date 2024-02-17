import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/v1/users'
// api
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getById: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}`,
                method: 'GET',


            })
        }),
        updateAvatar: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'PUT',
                body: data


            })
        }),
        updateBanner: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'PUT',
                body: data


            })
        }),

    })
})
export const { useGetByIdMutation, useUpdateAvatarMutation, useUpdateBannerMutation } = usersApiSlice
