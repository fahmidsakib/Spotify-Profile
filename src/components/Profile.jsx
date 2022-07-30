import { useSelector } from "react-redux/es/exports"

export default function Profile() {
    let user = useSelector(state => state.userSlice)
    console.log(user.name)
    return <div className="profile-page">

        <div className="user-info">
            <div className="user-avatar">
                <img src="../images/profile2.png" alt="" /></div>
            <h1>Moinshaikh</h1>
            <div className="followers-div">
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)',fontWeight:'700' }}>0</p>
                    <p style={{fontSize:'14px'}}>FOLLOWERS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>12</p>
                    <p style={{fontSize:'14px'}}>FOLLOWINGS</p>
                </div>
                <div>
                    <p style={{ color: 'rgb(109, 240, 109)' }}>3</p>
                    <p style={{fontSize:'14px'}}>PLAYLISTS</p>
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