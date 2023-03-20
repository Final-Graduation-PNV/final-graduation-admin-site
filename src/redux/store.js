import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import checkedSlice from "./slices/checked";
import paymentSlice from "./slices/paymentSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    payment: paymentSlice.reducer,
    check: checkedSlice.reducer
  }
})

export default store