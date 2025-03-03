import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, actions) => {
            const newArray = state.filter((request) => request._id !== actions.payload);
            return newArray;
        },
        clearRequest: (state, action) => {
            return null;
        }
    },
});

export const {addRequest, clearRequest, removeRequest} = requestSlice.actions;
export default requestSlice.reducer;