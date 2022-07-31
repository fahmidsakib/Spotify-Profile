import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Artists from "./Artists";
import TopTracks from "./TopTracks";
import RecentPlaylist from './RecentPlaylists';
import MyPlaylists from "./MyPlaylists";

export default function Main() {

    let [clicked, setClicked] = useState('profile');
    let navigate = useNavigate()

    return <div className="Main-container">
        <div className="side-bar">
            <img src="../spotify.png" alt="" className="logo"/>
            <div className="menu">
                <div className={clicked !== 'profile' ? "menu-item" : "menu-item clicked"} onClick={() => {
                    navigate('/Profile')
                    setClicked('profile')
                }}>
                    <img src="../images/profile.png" alt="" />
                    <p>Profile</p>
                </div>
                <div className={clicked !== 'artists' ? "menu-item" : "menu-item clicked"} onClick={() => {
                    navigate('/Artists')
                    setClicked('artists')
                }}>
                    <img src="../images/mic.png" alt="" />
                    <p>Top Artists</p>
                </div>
                <div className={clicked !== 'track' ? "menu-item" : "menu-item clicked"} onClick={() => {
                    navigate('/TopTracks')
                    setClicked('track')
                }}>
                    <img src="../images/music.png" alt="" style={{ width: "20px" }} />
                    <p>Top Tracks</p>
                </div>
                <div className={clicked !== 'recent' ? "menu-item" : "menu-item clicked"} onClick={() => {
                    navigate('/RecentPlaylists')
                    setClicked('recent')
                }}>
                    <img src="../images/recent.png" alt="" />
                    <p>Recent</p>
                </div>
                <div className={clicked !== 'playlist' ? "menu-item" : "menu-item clicked"} onClick={() => {
                    navigate('/MyPlaylists')
                    setClicked('playlist')
                }}>
                    <img src="../images/playlist.png" alt="" />
                    Playlist
                </div>
            </div>

            <img src="../github.png" alt="" className="git-icon" />
        </div>


        <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Artists" element={<Artists />} />
            <Route path="/TopTracks" element={<TopTracks />} />
            <Route path="/RecentPlaylists" element={<RecentPlaylist />} />
            <Route path="/MyPlaylists" element={<MyPlaylists />} />
        </Routes>
    </div>
}