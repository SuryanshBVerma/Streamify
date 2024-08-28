import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name : "user",
    initialState: {
        name : 'test',
        email : 'test@mail.com'
    },

    reducers : {
        updateUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { updateUser } = user.actions;
export default user.reducer;