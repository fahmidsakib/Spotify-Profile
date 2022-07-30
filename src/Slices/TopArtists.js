import { createSlice } from "@reduxjs/toolkit";

let TopArtists = createSlice({
    name: 'topArtists-slice',
    initialState: {
        TAofAllTime: [
            { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
            { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
            { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
            { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' }

        ], TAofSixMonths: [
            { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
            { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
            { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
            { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' }

        ], TAofFourWeeks: [
            { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
            { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
            { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
            { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' }
        ],
        showArr:[
            { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
            { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
            { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
            { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' },
            { name: 'DIVINE', img: '../images/AtifAslam.jpg' }

        ],
        selected: "allTime"

    },
    reducers: {
        updateTAofALlTime: (state, action) => {
            state.TAofAllTime = action.payload
            state.show=state.TAofAllTime
        },
        updateTAofSixMonths: (state, action) => {
            state.TAofSixMonths = action.payload
        },
        updateTAofFourWeeks: (state, action) => {
            state.TAofFourWeeks = action.payload
        },
        show: (state, action) => {
            console.log(action.payload)
            state.selected = action.payload
            if (state.selected === 'allTime') {
                state.showArr = state.TAofAllTime;
            } else if (state.selected === 'sixMonth') {
                state.showArr = state.TAofSixMonths;
            } else if (state.selected === 'FourWeeks') {
                state.showArr = state.TAofFourWeeks;
            }
        }
    }
})

export default TopArtists.reducer
export const { updateTAofAllTime, updateTAofSixMonths, updateTAofFourWeeks, show } = TopArtists.actions