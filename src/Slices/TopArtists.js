import { createSlice } from "@reduxjs/toolkit";

let TopArtists = createSlice({
    name: 'topArtists-slice',
    initialState: {
        TAofAllTime: [
           

        ], TAofSixMonths: [
           
        ], TAofFourWeeks: [
            
        ],
        showArr:[],
        selected: "allTime"

    },
    reducers: {
        updateTopArtists: (state, action) => {
            if (action.payload.save === 'allTime') {
                state.TAofAllTime = action.payload.arr
                state.showArr = action.payload.arr
                console.log('artist are saved')
            }
            if (action.payload.save === 'sixMonth') {
                state. TAofSixMonths = action.payload.arr
            }
            if (action.payload.save === 'FourWeeks') {
                state.TAofFourWeeks = action.payload.arr
            }
        },
        show: (state, action) => {
            // console.log(action.payload)
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
export const {  updateTopArtists, show } = TopArtists.actions



// { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
//             { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
//             { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
//             { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
//             { name: 'DIVINE', img: '../images/AtifAslam.jpg' }

// { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
// { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
// { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
// { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
// { name: 'DIVINE', img: '../images/AtifAslam.jpg' }
// { name: 'Nucleya', img: '../images/AtifAslam.jpg' },
// { name: 'Arijit Singh', img: '../images/AtifAslam.jpg' },
// { name: 'A.R. Rahman', img: '../images/AtifAslam.jpg' },
// { name: 'Sachin-jigar', img: '../images/AtifAslam.jpg' },
// { name: 'DIVINE', img: '../images/AtifAslam.jpg' },
// { name: 'DIVINE', img: '../images/AtifAslam.jpg' }