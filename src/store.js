import { configureStore } from "@reduxjs/toolkit"
import TopArtists from "./Slices/TopArtists"
import TopTracks from "./Slices/TopTracks"
import UserSlice from "./Slices/UserSlice"

const store = configureStore({
    reducer:{
        userSlice: UserSlice,
        topArtists: TopArtists,
        topTracks: TopTracks
    }
})
export default store