import { createSlice } from "@reduxjs/toolkit";

let MyPlaylists = createSlice({
    name: 'myplaylists-slice',
    initialState: {
        showMyPlaylists: [
            {
                name: "Focus Beats 2021 (Instrumental)",
                img: "../images/GullyBoy.jpg",
                totalTracks: '85'
            },
            {
                name: "NCS Releases - Copyright Free Music by NoCopyRightSounds",
                img: "../images/GullyBoy.jpg",
                totalTracks: '50'
            },
            {
                name: "All time fav ❤",
                img: "../images/GullyBoy.jpg",
                totalTracks: '53'
            },
        ]
    },
    reducers: {
        updateShowArr: (state, action) => {
            state.showMyPlaylists = action.payload
        }
    }
})

export default MyPlaylists.reducer
export const { updateShowArr } = MyPlaylists.actions