
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { updateUser } from "../Slices/UserSlice";
import { useDispatch } from "react-redux";

function App() {
  const CLIENT_ID = "907c78c7dc024e278baafc9eaaa60c4e"
  const REDIRECT_URI = "http://localhost:3000/Profile"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let [token, setToken] = useState();
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (token && hash) {

      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
    console.log(token)

  }, [])



  let getPlaylist = () => {
    console.log(token, 'lll')
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }).then((response) => response.json())
      .then((result) => {
        console.log('Playlist', result);
        let obj = {}
        obj.name = result.display_name;
        obj.followers = result.followers.total
        obj.img = result.images
        dispatch(updateUser(obj))
      })
  }


  let getData = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }).then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        let obj = {}
        obj.name = result.display_name;
        obj.followers = result.followers.total
        obj.img = result.images
        dispatch(updateUser(obj))
      })

  }




  getData()



  return (
    <div className="App">
      <div className="login">
        <h3> Spotify Profile</h3>
        <button > <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a></button>
      </div>



    </div>
  );
}

export default App;
