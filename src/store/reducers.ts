// store/reducers.ts

import { combineReducers } from '@reduxjs/toolkit';
// import yourReducer from './yourReducer'; // Ganti dengan nama reducer Anda
import authReducer from './features/authSlice'
import cartReducer from './features/cartSlice'
import userReducer from './features/userSlice'

const rootReducer = combineReducers({
    auth : authReducer,
    cart : cartReducer,
    user : userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;