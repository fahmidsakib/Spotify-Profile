import { createSlice } from "@reduxjs/toolkit";

let TopArtists = createSlice({
    name: 'topArtists-slice',
    initialState: { TAofALlTime: [], TAofSixMonths: [], TAofFourWeeks: [] },
    reducers: {
        updateTAofALlTime: (state, action) => {
            state.TAofALlTime = action.payload
        },
        updateTAofSixMonths: (state, action) => {
            state.TAofSixMonths = action.payload
        },
        updateTAofFourWeeks: (state, action) => {
            state.TAofFourWeeks = action.payload
        }
    }
})

export default TopArtists.reducer
export const { updateTAofALlTime, updateTAofSixMonths, updateTAofFourWeeks } = TopArtists.actions