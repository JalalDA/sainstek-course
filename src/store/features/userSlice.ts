import { UserData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    user: UserData
};

const initialState = {
    user: {}
} as UserState;

export const user = createSlice({
    name: "token",
    initialState,
    reducers: {
        reset: () => initialState,
        getSuccess: (state, action) => {
            state.user = action.payload
        },
        getFailed: (state) => {
            state.user = {}
        },
        deletUser: (state, action) => {
            state.user = {}
        }
    },
});

export const {
    getSuccess,
    getFailed,
    deletUser,
    reset,
} = user.actions;
export default user.reducer;