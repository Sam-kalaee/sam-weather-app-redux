import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'C',
}

export const unitConvertSlice = createSlice({
    name: 'unitConvert',
    initialState,
    reducers: {
        unitConvertHandle: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { unitConvertHandle } = unitConvertSlice.actions

export default unitConvertSlice.reducer