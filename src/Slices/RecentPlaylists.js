import { createSlice } from "@reduxjs/toolkit";

let RecentPlaylists = createSlice({
    name: 'recentplaylists-slice',
    initialState: {
        showRecent: [
            {
                name: "Sher Aaya Sher",
                img: "../images/GullyBoy.jpg",
                info: 'DIVINE, Major C. Gully Boy',
                duration: '2:14'
            },
            {
                name: "Castle on the hill",
                img: "../images/GullyBoy.jpg",
                info: 'Castle on the hill. Castle on the hill',
                duration: '4:22'
            },
        ]
    },
    reducers: {
        updateShowArr: (state, action) => {
            state.showRecent = action.payload
        }
    }
})

export default RecentPlaylists.reducer
export const { updateShowArr } = RecentPlaylists.actions