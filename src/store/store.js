import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        filter: filterReducer
    }
});