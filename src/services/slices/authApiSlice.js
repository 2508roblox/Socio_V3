import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/v1/auth'
// api
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data

            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data

            })
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',


            })
        }),

    })
})
export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice