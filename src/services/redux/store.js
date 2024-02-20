import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slices/authSlice'
import { apiSlice } from '../slices/apiSlice'
import themeSlice from '../slices/themeSlice'
import postSlice from '../slices/postSlice'
import friendSlice from '../slices/friendSlice'
import chatSlice from '../slices/chatSlice'
import messageSlice from '../slices/messageSlice'
const store = configureStore({
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware ),
    reducer: {
        // name of state: state
        'auth': authSlice,
        'post': postSlice,
        'theme': themeSlice,
        'chat': chatSlice,
        'friend': friendSlice,
        'message': messageSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    }


})
export default store