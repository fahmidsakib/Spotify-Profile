import { useSelector } from "react-redux/es/exports"
import { useEffect, useState } from 'react';
import { updateUser } from "../Slices/UserSlice";
import { useDispatch } from "react-redux";
import { updateToken } from "../Slices/UserSlice";
export default function Profile() {
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
        getTopTrack(token1)
    }, [])

    let getPlaylist = (token) => {

        fetch("https://api.spotify.com/v1/me/playlists", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                // let obj = {}
                // obj.name = result.display_name;
                // obj.followers = result.followers.total
                // obj.img = result.images
                // dispatch(updateUser(obj))
                // console.log(obj)
                // console.log(result)
            })

    }

    let getData = (token) => {
        fetch("https://api.spotify.com/v1/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                let obj = {}
                obj.image = result.images[0].url
                obj.name = result.display_name;
                obj.followers = result.followers.total
                obj.img = result.images
                dispatch(updateUser(obj))

            })
    }


    let getTopTrack = (token) => {
        fetch("https://api.spotify.com/v1/me/top/tracks", { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => response.json())
            .then((result) => {
                console.log('TopTracks:', result);
                // let obj = {}
                // obj.image = result.images[0].url
                // obj.name = result.display_name;
                // obj.followers = result.followers.total
                // obj.img = result.images
                // dispatch(updateUser(obj))

            })
    }









    let user = useSelector(state => state.userSlice)

    console.log(user.user)
    return <div className="profile-page">

        <div className="user-info">
            <div className="user-avatar">
                <img src={user.user.image} alt="" /></div>
            <h1>{user.user.name}</h1>
            <div className="followers-div">
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)', fontWeight: '700' }}>{user.user.followers}</p>
                    <p style={{ fontSize: '14px' }}>FOLLOWERS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>12</p>
                    <p style={{ fontSize: '14px' }}>FOLLOWINGS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>3</p>
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
                    <div className="song-info">
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
                                <p>Castle on the hill</p>
                                <p style={{ fontSize: '12px', color: 'gray' }}>Castle on the hill. Castle on the hill</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '12px', color: 'gray' }}>4:22</p>
                    </div>


                </div>


            </div>
        </div>

    </div>
}