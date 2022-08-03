import React from 'react'
import { useSelector } from "react-redux"


export default function RecentPlaylist() {

    let { showRecent } = useSelector(state => state.recentPlaylists)

    return (
        <div className="recent">
            <div className="recent-div">
                <div className="header">
                    <h4>Recently Played Tracks</h4>
                </div>

                <div className="ttlist">
                    <div className="tt-content">
                        {
                            showRecent.map((el) => {
                                return <div className="tt-song-info"  >
                                    <div className="tt-img-name">
                                        <img src={el.img} alt="" />
                                        <div className="tt-song-name">
                                            <p>{el.name}</p>
                                            <p style={{ fontSize: '12px', color: 'gray' }}>{el.info}</p>
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
    )
}
