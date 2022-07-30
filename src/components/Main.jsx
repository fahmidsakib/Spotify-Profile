import Profile from "./Profile";
import Artists from "./Artists";
import { useNavigate, Routes, Route } from "react-router-dom";
export default function Main() {
    let navigate = useNavigate()
    return <div className="Main-container">
        <div className="side-bar">
            <img src="../spotify.png" alt="" />
            <div className="menu">
                <div className="menu-item" onClick={() => navigate('/Profile')}>
                    <img src="../images/profile.png" alt="" />
                    <p>Profile</p>
                </div>
                <div className="menu-item" onClick={() => navigate('/Artists')}>
                    <img src="../images/mic.png" alt="" />
                    <p>Top Artists</p>
                </div>
                <div className="menu-item">
                    <img src="../images/music.png" alt="" style={{ width: "20px" }} />
                    <p>Top Tracks</p>
                </div>
                <div className="menu-item">
                    <img src="../images/recent.png" alt="" />
                    <p>Recent</p>
                </div>
                <div className="menu-item">

                    <img src="../images/playlist.png" alt="" />
                    Playlist
                </div>
            </div>

            <img src="../github.png" alt="" className="git-icon" />
        </div>


        <Routes>

            <Route path="/Profile" element={<Profile />} />
            <Route path="/Artists" element={<Artists />} />
        </Routes>
    </div>
}