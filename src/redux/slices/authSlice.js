import { createSlice } from "@reduxjs/toolkit";
import { defer } from "react-router-dom";
import { getToken } from "../../utils/localStorageUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!getToken()
  },
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    }
  }
})

export const {setLoggedIn} = authSlice.actions

export const isLoggedInSelector = (state) => state.auth.isLoggedIn

export default authSlice
