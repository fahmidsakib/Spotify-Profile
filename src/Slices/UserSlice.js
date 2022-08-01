import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
    name: 'user-slice',
    initialState: { user: {}, token: '' },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
            console.log(state.user, 'yyyyy')
        },
        updateToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export default UserSlice.reducer
export const { updateUser,updateToken } = UserSlice.actions