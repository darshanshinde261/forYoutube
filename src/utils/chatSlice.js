import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(15,1);
            state.messages.push(action.payload)
        },
    }
});

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;