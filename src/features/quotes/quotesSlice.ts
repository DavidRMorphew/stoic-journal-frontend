import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { QuoteDataProps } from './Quotes';

interface quotesState {
    value: QuoteDataProps[]
}

const initialState: quotesState = {
    value: []
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        addQuotes: (state, action: PayloadAction<QuoteDataProps[]>) => {
            state.value = action.payload
        },
        removeQuotes: (state) => {
            state.value = []
        },
    },
})

export const { addQuotes, removeQuotes } = quotesSlice.actions

// export const selectQuotes = (state: RootState) => state.quotes.value

export default quotesSlice.reducer