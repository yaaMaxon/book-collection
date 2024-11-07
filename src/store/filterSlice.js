import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        changeFilter(state, {payload}) {
            console.log(state)
            return payload
        },
        resetFilter(state) {
            // state = ''
        }
    }
})

export const {changeFilter, resetFilter} = filter.actions;
export default filter.reducer