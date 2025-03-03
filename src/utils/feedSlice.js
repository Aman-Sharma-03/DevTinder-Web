import { createSlice, current } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeUserFromFeed: (state, actions) => {
            return state.filter((user) => user._id !== actions.payload);
        },
        clearFeed: (state, action) => {
            return null;
        }
    },
});

export const { addFeed, clearFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;