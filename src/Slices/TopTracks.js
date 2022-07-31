import { createSlice } from "@reduxjs/toolkit";

let TopTracks = createSlice({
    name: 'topTracks-slice',
    initialState: {
        TTofAllTime: [
            {
                name: "Sher Aaya Sher",
                img: "../images/GullyBoy.jpg",
                info: 'DIVINE, Major C. Gully Boy',
                duration: '2:14'
            },
            {
                name: "Castle on the hill",
                img: "../images/GullyBoy.jpg",
                info: 'Castle on the hill. Castle on the hill',
                duration: '4:22'
            },
        ],
        TTofSixMonths: [
            {
                name: "Sher Aaya Sher",
                img: "../images/GullyBoy.jpg",
                info: 'DIVINE, Major C. Gully Boy',
                duration: '2:14'
            },
        ],
        TTofFourWeeks: [
            {
                name: "Castle on the hill",
                img: "../images/GullyBoy.jpg",
                info: 'Castle on the hill. Castle on the hill',
                duration: '4:22'
            },
        ],
        showArr: [
            {
                name: "Sher Aaya Sher",
                img: "../images/GullyBoy.jpg",
                info: 'DIVINE, Major C. Gully Boy',
                duration: '2:14'
            },
            {
                name: "Castle on the hill",
                img: "../images/GullyBoy.jpg",
                info: 'Castle on the hill. Castle on the hill',
                duration: '4:22'
            },
        ],
        show: 'allTime'
    },
    reducers: {
        updateTTofALlTime: (state, action) => {
            state.TTofALlTime = action.payload
        },
        updateTTofSixMonths: (state, action) => {
            state.TTofSixMonths = action.payload
        },
        updateTTofFourWeeks: (state, action) => {
            state.TTofFourWeeks = action.payload
        },
        show: (state, action) => {
            console.log(action.payload)
            state.selected = action.payload
            if (state.selected === 'allTime') {
                state.showArr = state.TTofAllTime;
            } else if (state.selected === 'sixMonth') {
                state.showArr = state.TTofSixMonths;
            } else if (state.selected === 'FourWeeks') {
                state.showArr = state.TTofFourWeeks;
            }
        }
    }
})

export default TopTracks.reducer
export const { updateTTofALlTime, updateTTofSixMonths, updateTTofFourWeeks, show } = TopTracks.actions