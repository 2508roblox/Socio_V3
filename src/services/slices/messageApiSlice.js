import { apiSlice } from "./apiSlice";
const MESSAGE_URL = 'http://localhost:3000/api/v1/messages'
// api
export const messageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getMessage: builder.mutation({
            query: (data) => ({
              
                url: `${MESSAGE_URL}/${data.room_id}/${data.page}`,
                method: 'GET',
                
                
            })
        }),
       
        createMessage: builder.mutation({
            query: (data) => ({
              
                url: `${MESSAGE_URL}`,
                method: 'POST',
                body: data
                
                
            })
        }),
       
      
       
    })
})
export const {useGetMessageMutation , useCreateMessageMutation} = messageApiSlice
