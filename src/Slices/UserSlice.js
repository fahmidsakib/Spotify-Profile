import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
    name: 'user-slice',
    initialState: { user: {} },
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default UserSlice.reducer
export const { updateUser  } = UserSlice.actions