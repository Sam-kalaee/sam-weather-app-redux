import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const selectedCityInfoSlice = createSlice({
    name: 'selectedCityInfo',
    initialState,
    reducers: {
        selectedCityInfoHandle: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { selectedCityInfoHandle } = selectedCityInfoSlice.actions

export default selectedCityInfoSlice.reducer