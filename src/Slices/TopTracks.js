import { createSlice } from "@reduxjs/toolkit";

let TopTracks = createSlice({
    name: 'topTracks-slice',
    initialState: { TTofALlTime: [], TTofSixMonths: [], TTofFourWeeks: [] },
    reducers: {
        updateTTofALlTime: (state, action) => {
            state.TTofALlTime = action.payload
        },
        updateTTofSixMonths: (state, action) => {
            state.TTofSixMonths = action.payload
        },
        updateTTofFourWeeks: (state, action) => {
            state.TTofFourWeeks = action.payload
        }
    }
})

export default TopTracks.reducer
export const { updateTTofALlTime, updateTTofSixMonths, updateTTofFourWeeks } = TopTracks.actions