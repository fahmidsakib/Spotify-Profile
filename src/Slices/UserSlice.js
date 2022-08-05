import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
    name: 'user-slice',
    initialState: { user: {}, token: '', following: 0, clicked: 'profile' },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
            console.log(state.user, 'yyyyy')
        },
        updateToken: (state, action) => {
            state.token = action.payload
        },
        updateFollowing: (state, action) => {
            state.following = action.payload
        },
        updateClicked: (state, action) => {
            state.clicked = action.payload
        }
    }
})

export default UserSlice.reducer
export const { updateUser, updateToken, updateFollowing, updateClicked } = UserSlice.actions