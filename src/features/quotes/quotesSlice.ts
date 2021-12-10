import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { QuoteData } from './Quotes';

interface quotesState {
    value: QuoteData[]
}

const initialState: quotesState = {
    value: []
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        addQuotes: (state, action: PayloadAction<QuoteData[]>) => {
            state.value = action.payload
        },
        removeQuotes: (state) => {
            state.value = []
        },
    },
})

export const { addQuotes, removeQuotes } = quotesSlice.actions

export default quotesSlice.reducer