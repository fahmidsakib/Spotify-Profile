import { useSelector } from "react-redux/es/exports"
import { useEffect } from 'react';
import { updateUser, updateToken, updateFollowing, updateClicked } from "../Slices/UserSlice";
import { updateTopTracks } from "../Slices/TopTracks";
import { useDispatch } from "react-redux";
import { updateShowArr } from "../Slices/MyPlaylists";
import { updateTopArtists } from "../Slices/TopArtists";
import { Link } from "react-router-dom";

export default function Profile() {
    let { showMyPlaylists } = useSelector(state => state.myPlaylists)
    let { TTofAllTime } = useSelector(state => state.topTracks)
    let tracks = TTofAllTime.slice(0, 5)
    let artists = useSelector(state => state.topArtists)

    artists = artists.TAofAllTime.slice(0, 5)

    let dispatch = useDispatch();

    useEffect(() => {
        const hash = window.location.hash
        let token1 = window.localStorage.getItem("token")
        if (token1 && hash) {
            token1 = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token1)
        }
        localStorage.setItem('token', JSON.stringify(token1));
        dispatch(updateToken(token1))
        getData(token1);
        getPlaylist(token1);
        getTopTrack(token1, 'short_term', 'FourWeeks')
        getTopTrack(token1, 'medium_term', 'sixMonths')
        getTopTrack(token1, 'long_term', 'allTime')
        getFollowing(token1, 'allTime')
        getTopArtist(token1, 'long_term', 'allTime')
        getTopArtist(token1, 'medium_term', 'sixMonths')
        getTopArtist(token1, 'short_term', 'FourWeeks')
        // recentlyPlayed(token1)
    }, [])



    let getData = (token) => {
        fetch("https://api.spotify.com/v1/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                let obj = {}
                result.images.length === 0 ? obj.image = './images/profile2.png' : obj.image = result.images[0].url
                obj.name = result.display_name;
                obj.followers = result.followers.total
                dispatch(updateUser(obj))
            })
    }




    let getPlaylist = (token) => {
        fetch("https://api.spotify.com/v1/me/playlists", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                let arr = []
                result.items.map((el) => {
                    let obj = {}
                    obj.playlistName = el.name
                    obj.image = el.images[1].url
                    obj.totalTracks = el.tracks.total
                    arr.push(obj)
                })
                dispatch(updateShowArr(arr))
            })
    }



    let getFollowing = (token, type) => {
        fetch("https://api.spotify.com/v1/me/following?type=artist", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                dispatch(updateFollowing(result.artists.items.length))
            })
    }


    let getTopTrack = (token, range, type) => {
        fetch(`https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=${range}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                let tt = []
                result.items.map(el => {
                    let obj = {}
                    obj.name = el.name
                    el.artists.length >= 2 ? obj.artist = `${el.artists[0].name}, ${el.artists[1].name} · ${el.album.name}`
                        : obj.artist = `${el.artists[0].name} · ${el.album.name}`
                    let min = Math.floor((el.duration_ms / 1000 / 60) << 0)
                    let sec = Math.floor((el.duration_ms / 1000) % 60)
                    obj.duration = `${min}:${sec}`
                    obj.image = el.album.images[0].url
                    return tt.push(obj)
                })
                dispatch(updateTopTracks({ arr: tt, save: type }))
            })
    }

    let getTopArtist = (token, range, type) => {
        fetch(`https://api.spotify.com/v1/me/top/artists?limit=20&time_range=${range}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('TopArtist:', result);
                let artistsArr = []
                result.items.map((el) => {
                    let obj = {}
                    obj.artistName = el.name
                    obj.image = el.images[0].url
                    artistsArr.push(obj)
                })
                dispatch(updateTopArtists({ arr: artistsArr, save: type }))

            })
    }

    // let recentlyPlayed = (token) => {

    //     fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers: { "Authorization": `Bearer ${token}` } })
    //         .then((response) => response.json())
    //         .then((result) => {

    //         })
    // }


    let { user, following } = useSelector(state => state.userSlice)

    return <div className="profile-page">

        <div className="user-info">
            <img src={user.image} alt="" />
            <h1>{user.name}</h1>
            <div className="followers-div">
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)', fontWeight: '700' }}>{user.followers}</p>
                    <p style={{ fontSize: '14px' }}>FOLLOWERS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>{following}</p>
                    <p style={{ fontSize: '14px' }}>FOLLOWINGS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>{showMyPlaylists.length}</p>
                    <p style={{ fontSize: '14px' }}>PLAYLISTS</p>
                </div>
            </div>
            <Link to={`/`} className="link"><button>LOGOUT</button></Link>

        </div>


        <div className="bottom-div">


            <div className="top-artists">
                <div className="header">
                    <h4>Top Artists of All Time</h4>
                    <Link to={`/Artists`} className="link"><button onClick={() => dispatch(updateClicked('artists'))}> SEE MORE</button></Link>
                </div>

                <div className="content1">

                    {artists.map((el) => {
                        return <div>
                            <img src={el.image} alt="" />
                            <p>{el.artistName}</p>
                        </div>
                    })}

                </div>



            </div>




            <div className="top-tracks">
                <div className="header2">
                    <h4>Top Tracks of All Time</h4>
                    <Link to={`/TopTracks`} className="link"><button onClick={() => dispatch(updateClicked('track'))}> SEE MORE</button></Link>
                </div>

                <div className="content2">
                    {

                        tracks.map((el) => {
                            return <div className="song-info">

                                <div >
                                    <img src={el.image} alt="" />
                                    <div className="song-name-div">
                                        <p className="song-name">{el.name}</p>
                                        <p style={{ fontSize: '12px', color: 'gray' }} className="song-name">{el.artist}</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '12px', color: 'gray' }}>{el.duration}</p>
                            </div>
                        })
                    }

                </div>


            </div>
        </div>

    </div >
}