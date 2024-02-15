import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: '',
prepareHeaders: (headers, { getState }) => {
    const token = (getState() ).auth.userInfo?.accessToken ?? false

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
     endpoints: (builder) => ({}),
})