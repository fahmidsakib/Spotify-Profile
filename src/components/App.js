function App() {

  const CLIENT_ID = "8063ebba207d4a1382ae4e548e408158"
  const REDIRECT_URI = "http://localhost:3000/Profile"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "user-follow-read playlist-read-private user-read-recently-played user-top-read"

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
