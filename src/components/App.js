import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { updateUser } from "../Slices/UserSlice";
import { useDispatch } from "react-redux";

function App() {

  const CLIENT_ID = "907c78c7dc024e278baafc9eaaa60c4e"
  const REDIRECT_URI = "http://localhost:3000/Profile"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "user-follow-read playlist-read-private user-read-recently-played user-top-read"

  //let dispatch = useDispatch();
  //let navigate = useNavigate();
  //const [token, setToken] = useState();

  // useEffect(() => {
  //   const hash = window.location.hash
  //   let token1 = window.localStorage.getItem("token")
  //   if (token1 && hash) {
  //     token1 = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  //     window.location.hash = ""
  //     window.localStorage.setItem("token", token1)
  //   }
  //   setToken(token1)
  //   getData(token1)
  // }, [])

  // let getPlaylist = () => {
  //   console.log(token, 'lll')
  //   fetch("https://api.spotify.com/v1/me/playlists", { headers: { "Authorization": `Bearer ${token}` } })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log('Playlist', result);
  //       let obj = {}
  //       obj.name = result.display_name;
  //       obj.followers = result.followers.total
  //       obj.img = result.images
  //       dispatch(updateUser(obj))
  //     })
  // }

  // let getData = (token) => {
  //   fetch("https://api.spotify.com/v1/me", { headers: { "Authorization": `Bearer ${token}` } })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log('Success:', result);
  //       let obj = {}
  //       obj.name = result.display_name;
  //       // obj.followers = result.followers.total
  //       obj.img = result.images
  //       dispatch(updateUser(obj))
  //       console.log()
  //     })
  // }

 

  return (
    <div className="App">
      <div className="login">
        <h3> Spotify Profile</h3>
        <button > <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login to Spotify</a></button>
      </div>
    </div>
  );
}

export default App;
