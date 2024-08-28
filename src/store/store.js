import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSclice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        sidebar : sidebarReducer,
        user :  userReducer,
    }
})

export default store;