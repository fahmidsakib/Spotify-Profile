import Main from "./Main";
import { useNavigate, Routes, Route, } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="login">
        <h4> Spotify Profile</h4>
        <button> Login To Spotify</button>
      </div>

      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>

    </div>
  );
}

export default App;
