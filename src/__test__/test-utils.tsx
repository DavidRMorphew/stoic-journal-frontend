import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import quotesSlice from "../features/quotes/quotesSlice";

// @ts-ignore
function render(
    ui,
    {
        preloadedState,
        store = configureStore({ reducer: { quotes: quotesSlice }, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }