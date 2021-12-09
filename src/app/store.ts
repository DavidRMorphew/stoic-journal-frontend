import { configureStore } from '@reduxjs/toolkit';
import quotesSlice from '../features/quotes/quotesSlice';

export const store= configureStore({
    reducer: {
        quotes: quotesSlice
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch