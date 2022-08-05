import { createSlice } from "@reduxjs/toolkit";

let MyPlaylists = createSlice({
    name: 'myplaylists-slice',
    initialState: {
        showMyPlaylists: []
    },
    reducers: {
        updateShowArr: (state, action) => {
            state.showMyPlaylists = action.payload
        }
    }
})

export default MyPlaylists.reducer
export const { updateShowArr } = MyPlaylists.actions
