import { createSlice } from "@reduxjs/toolkit";

let TopTracks = createSlice({
    name: 'topTracks-slice',
    initialState: {
        TTofAllTime: [],
        TTofSixMonths: [],
        TTofFourWeeks: [],
        showArr: [],
        show: 'allTime',
        selected: 'allTime'
    },
    reducers: {
        updateTopTracks: (state, action) => {
            if (action.payload.save === 'allTime') {
                state.TTofAllTime = action.payload.arr
                state.showArr = action.payload.arr
            }
            if (action.payload.save === 'sixMonth') {
                state.TTofSixMonths = action.payload.arr
            }
            if (action.payload.save === 'FourWeeks') {
                state.TTofFourWeeks = action.payload.arr
            }
        },
        show: (state, action) => {
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
export const { updateTopTracks, show } = TopTracks.actions