import { configureStore } from "@reduxjs/toolkit";
import useReducer, { cancel } from "./UserSlice";

export default configureStore({
    reducer: {
        username:useReducer,
        email:useReducer,
        password:useReducer,
        cancel:useReducer
    },
})