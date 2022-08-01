import React from 'react'
import { useSelector } from 'react-redux'

export default function MyPlaylists() {

    let { showMyPlaylists } = useSelector(state => state.myPlaylists)


    return (
        <div className="my-playlists">
            <div className="myplaylists-div">
                <div className="header">
                    <h4>Your Playlists</h4>
                </div>

                <div className="mylist">
                    {
                        showMyPlaylists.map((el) => 
                            <div className="list">
                                <img src={el.image} alt="" />
                                <p className="list-name">{el.playlistName}</p>
                                <p style={{ fontSize: '12px', color: 'gray' }}>{el.totalTracks} Tracks</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
