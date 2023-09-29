import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
  id : string;
  role : string
};

const initialState = {
  token: "",
  id : "",
  role : ""
} as AuthState;

export const auth = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
    loginFailed: (state) => {
      state.token = "";
      state.id = "";
      state.role = "";
    },
    logout:(state, action)=>{
      state.token = "";
      state.id = "";
      state.role = "";
    }
  },
});

export const {
  loginFailed,
  loginSuccess,
  logout,
  reset,
} = auth.actions;
export default auth.reducer;