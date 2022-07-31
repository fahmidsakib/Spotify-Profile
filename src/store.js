import { configureStore } from "@reduxjs/toolkit"
import RecentPlaylists from "./Slices/RecentPlaylists"
import TopArtists from "./Slices/TopArtists"
import TopTracks from "./Slices/TopTracks"
import UserSlice from "./Slices/UserSlice"
import MyPlaylists from './Slices/MyPlaylists';

const store = configureStore({
    reducer:{
        userSlice: UserSlice,
        topArtists: TopArtists,
        topTracks: TopTracks,
        recentPlaylists: RecentPlaylists,
        myPlaylists: MyPlaylists
    }
})
export default store