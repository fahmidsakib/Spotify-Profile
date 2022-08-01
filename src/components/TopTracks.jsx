import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { show } from '../Slices/TopTracks'


export default function TopTracks() {

    let dispatch = useDispatch()
    let { selected, showArr } = useSelector(state => state.topTracks)

    return (
        <div className="tt">
            <div className="topTracks-div">

                <div className="header">
                    <h4>Top Tracks</h4>
                    <div className="filter">
                        <p className={selected === 'allTime' ? 'Selected' : ''} onClick={() => dispatch(show('allTime'))} >All Time</p>
                        <p className={selected === 'sixMonth' ? 'Selected' : ''} onClick={() => dispatch(show('sixMonth'))}>Last 6 Months</p>
                        <p className={selected === 'FourWeeks' ? 'Selected' : ''} onClick={() => dispatch(show('FourWeeks'))}>Last 4 Weeks</p>
                    </div>
                </div>

                <div className="ttlist">
                    <div className="tt-content">
                        {
                            showArr.map((el) => {
                                return <div className="tt-song-info">
                                    <div className="tt-img-name">
                                        <img src={el.image} alt="" />
                                        <div className="tt-song-name">
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
    )
}
