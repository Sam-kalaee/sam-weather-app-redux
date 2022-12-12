import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchHandle: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { searchHandle } = searchSlice.actions

export default searchSlice.reducer