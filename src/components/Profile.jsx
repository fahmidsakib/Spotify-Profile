import { useSelector } from "react-redux/es/exports"
import { useEffect, useState } from 'react';
import { updateUser, updateToken, updateFollowing } from "../Slices/UserSlice";
import { updateTopTracks } from "../Slices/TopTracks";
import { useDispatch } from "react-redux";
import { updateShowArr } from "../Slices/MyPlaylists";
export default function Profile() {
    let { showMyPlaylists } = useSelector(state => state.myPlaylists)
    let { showArr } = useSelector(state => state.topTracks)
    console.log(showArr)
    let tracks = showArr.slice(0, 5)
    console.log(tracks, 'dskfsfsfj')
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
        getFollowing(token1)
        // getTopArtist(token1)
        recentlyPlayed(token1)
    }, [])

    let getPlaylist = (token) => {
        fetch("https://api.spotify.com/v1/me/playlists", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('play:', result)
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

    let getData = (token) => {
        fetch("https://api.spotify.com/v1/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                let obj = {}
                result.images.length === 0 ? obj.image = './images/profile2.png' : obj.image = result.images[0].url
                obj.name = result.display_name;
                obj.followers = result.followers.total
                dispatch(updateUser(obj))
            })
    }

    let getFollowing = (token) => {
        fetch("https://api.spotify.com/v1/me/following?type=artist", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                dispatch(updateFollowing(result.item.length))
            })
    }


    let getTopTrack = (token, range, type) => {
        fetch(`https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=${range}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                let tt = []
                // console.log('TopTracks:', result.items);
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

    let getTopArtist = (token) => {
        fetch("https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('TopArtist:', result);
                // let obj = {}
                // obj.image = result.images[0].url
                // obj.name = result.display_name;
                // obj.followers = result.followers.total
                // obj.img = result.images
                // dispatch(updateUser(obj))

            })
    }

    let recentlyPlayed = (token) => {

        fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('curr', result);
                // let obj = {}
                // obj.image = result.images[0].url
                // obj.name = result.display_name;
                // obj.followers = result.followers.total
                // obj.img = result.images
                // dispatch(updateUser(obj))

            })
    }





    let { user, following } = useSelector(state => state.userSlice)

    console.log(user)
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
            <button>LOGOUT</button>
        </div>


        <div className="bottom-div">


            <div className="top-artists">
                <div className="header">
                    <h4>Top Artists of All Time</h4>
                    <button>SEE MORE</button>
                </div>

                <div className="content1">
                    <div>
                        <img src="../images/AtifAslam.jpg" alt="" />
                        <p>Atif Aslam</p>
                    </div>
                    <div>
                        <img src="../images/AtifAslam.jpg" alt="" />
                        <p>Arijit Singh</p>
                    </div>
                    <div>
                        <img src="../images/AtifAslam.jpg" alt="" />
                        <p>Amit Trivedi</p>
                    </div>
                    <div>
                        <img src="../images/AtifAslam.jpg" alt="" />
                        <p>Rahat Fateh Ali Khan</p>
                    </div>

                </div>



            </div>




            <div className="top-tracks">
                <div className="header2">
                    <h4>Top Tracks of All Time</h4>
                    <button>SEE MORE</button>
                </div>

                <div className="content2">
                    {/* <div className="song-info">
                        <div>
                            <img src="../images/GullyBoy.jpg" alt="" />
                            <div className="song-name">
                                <p>Sher Aaya Sher</p>
                                <p style={{ fontSize: '12px', color: 'gray' }}>DIVINE, Major C. Gully Boy</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '12px', color: 'gray' }}>2:14</p>
                    </div>

                    <div className="song-info">
                        <div>
                            <img src="../images/GullyBoy.jpg" alt="" />
                            <div className="song-name">
                                <p style={{ fontSize: '12px', color: 'gray' }}>Castle on the hill. Castle on the hill</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '12px', color: 'gray' }}>4:22</p>
                    </div> */}
                    {
                        tracks.map((el) => {
                            <div >
                                <div >
                                    <img src={el.image} alt="" />
                                    <div >
                                        <p>{el.name}</p>
                                        <p style={{ fontSize: '12px', color: 'gray' }}>{el.artist}</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '12px', color: 'gray' }}>{el.duration}</p>
                            </div>
                        })
                    }

                </div>


            </div>
        </div>

    </div>
}