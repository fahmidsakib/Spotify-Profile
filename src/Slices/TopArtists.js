import { createSlice } from "@reduxjs/toolkit";

let TopArtists = createSlice({
    name: 'topArtists-slice',
    initialState: {
        TAofAllTime: [],
        TAofSixMonths: [],
        TAofFourWeeks: [],
        showArr: [],
        selected: "allTime"

    },
    reducers: {
        updateTopArtists: (state, action) => {
            if (action.payload.save === 'allTime') {
                state.TAofAllTime = action.payload.arr
                state.showArr = action.payload.arr
                console.log(state.showArr, 'updated')
            }
            if (action.payload.save === 'sixMonth') {
                state.TAofSixMonths = action.payload.arr
            }
            if (action.payload.save === 'FourWeeks') {
                state.TAofFourWeeks = action.payload.arr
            }
        },
        show: (state, action) => {
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
export const { updateTopArtists, show } = TopArtists.actions