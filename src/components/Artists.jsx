// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { show } from "../Slices/TopArtists"

export default function Artists() {
    let topArtists = useSelector(state => state.topArtists)
    let selected = topArtists.selected;
    let dispatch = useDispatch();
    let showArr = topArtists.showArr
    // console.log(showArr)

    return <div className="Artists-page">
        <div className="artists-div">
            <div className="header">
                <h4>Top Artists</h4>
                <div className="filter">
                    <p className={selected === 'allTime' ? 'Selected' : ''} onClick={() => dispatch(show('allTime'))} >All Time</p>
                    <p className={selected === 'sixMonth' ? 'Selected' : ''} onClick={() => dispatch(show('sixMonth'))}>Last 6 Months</p>
                    <p className={selected === 'FourWeeks' ? 'Selected' : ''} onClick={() => dispatch(show('FourWeeks'))}>Last 4 Weeks</p>
                </div>
            </div>

            <div className="content">
                {
                    showArr.map((el) => {
                        return <div className="artists-avatar">
                            <img src={el.image} alt="" />
                            <p>{el.artistName}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div >
}