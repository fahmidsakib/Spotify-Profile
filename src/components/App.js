import Main from "./Main";
import { useNavigate, Routes, Route, } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const CLIENT_ID = "907c78c7dc024e278baafc9eaaa60c4e"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  let [token, setToken] = useState();
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    console.log(hash)
    if (!token && hash) {

      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
    console.log(token)

  }, [])

  let getData = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }).then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })

  }
  getData()







  return (
    <div className="App">
      <div className="login">
        <h4> Spotify Profile</h4>

        <button> <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a></button>
      </div>

      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>

    </div>
  );
}

export default App;
