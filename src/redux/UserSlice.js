import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: "UserSlice",
    initialState: {
        username:null,
        email:null,
        password:null,
        cancel:null
    },
    reducers: {
        login:(state,action)=>{
            state.username=action.payload
            state.email=action.payload
            state.password=action.payload
        },
        logout:(state)=>{
            state.username=null
            state.email=null
            state.password=null
        },
        cancel:(state,action)=>{
            state.cancel=action.payload
        }
    },     
})

export const { login,logout,cancel } = UserSlice.actions
export  const stateuser=(state)=>state.username.username
export const stateemail=(state)=>state.email.email
export const statepassword=(state)=>state.password.password
export const canceluser=(state)=>state.cancel.cancel
export default UserSlice.reducer