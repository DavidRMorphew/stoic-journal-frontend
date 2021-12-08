import { createSlice } from '@reduxjs/toolkit'

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        value: [],
    },
    reducers: {
        addQuotes: (state, action) => {
            state.value = action.payload
        },
        removeQuotes: (state) => {
            state.value = []
        },
    },
})

export const { addQuotes, removeQuotes } = quotesSlice.actions

export default quotesSlice.reducer