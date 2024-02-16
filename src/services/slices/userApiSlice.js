import { apiSlice } from "./apiSlice";
const USERS_URL = 'http://localhost:3000/api/v1/users'
// api
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getById: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data}`,
                method: 'GET',
                
                
            })
        }),
       
    })
})
export const {useGetByIdMutation } = usersApiSlice