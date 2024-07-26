// reducers/user-reducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") ?? "{}")
      : null,
  accessToken:
    (typeof window !== "undefined" && localStorage.getItem("accessToken")) ??
    null,
  refreshToken:
    (typeof window !== "undefined" && localStorage.getItem("refreshToken")) ??
    null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", action.payload);
      }
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("refreshToken", action.payload);
      }
    },
    setUserTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
  },
});

export const { setUsers, setUserTokens, setAccessToken, setRefreshToken } = userSlice.actions;
export default userSlice.reducer;
