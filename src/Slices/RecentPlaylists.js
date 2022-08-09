import { createSlice } from "@reduxjs/toolkit";

let RecentPlaylists = createSlice({
    name: 'recentplaylists-slice',
    initialState: {
        showRecent: []
    },
    reducers: {
        updateRecentPlaylist: (state, action) => {
            state.showRecent = action.payload
        }
    }
})

export default RecentPlaylists.reducer
export const { updateRecentPlaylist } = RecentPlaylists.actions