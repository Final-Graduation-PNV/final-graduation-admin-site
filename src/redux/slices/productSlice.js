import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    load: false
  },
  reducers: {
    setProductList(state, action) {
      state.list = action.payload
    },
    loadProduct(state) {
      state.load = !state.load
    }
  }
})

export const productSelector = (state) => state.product.list;
export const loadProductSelector = (state) => state.product.load;

export const { setProductList, loadProduct } = productSlice.actions;
export default productSlice