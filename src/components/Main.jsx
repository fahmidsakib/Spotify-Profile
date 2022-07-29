import Profile from "./Profile";
import { useNavigate, Routes, Route, } from "react-router-dom";
export default function Main() {
    return <div>
        <h1>spotify</h1>




        <Routes>
            <Route path="/Profile" element={<Profile />} />

        </Routes>
    </div>
}