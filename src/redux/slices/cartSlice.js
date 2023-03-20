import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    load: false
  },
  reducers: {
    setCartList(state, action) {
      state.list = action.payload
    },
    loadCart(state) {
      state.load = !state.load
    }
  }
})

export const cartSelector = (state) => state.cart.list
export const loadCartSelector = (state) => state.cart.load

export const {setCartList, loadCart} = cartSlice.actions
export default cartSlice