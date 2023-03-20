import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

import checkedSlice from "./slices/checked";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    check: checkedSlice.reducer
  }
})

export default store