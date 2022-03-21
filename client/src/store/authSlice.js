import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, user: null },
  reducers: {
    login(state, payload) {
      state = { isLoggedIn: true, user: payload };
    },
    logout(state) {
      state = { isLoggedIn: false, user: null };
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
