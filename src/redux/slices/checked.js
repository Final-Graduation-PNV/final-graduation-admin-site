import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
  name: "check",
  initialState: {
    list: [],
    load: false
  },
  reducers: {
    setChecked(state, action) {
      state.list = action.payload
    },
    loadChecked(state) {
      state.load = !state.load
    }
  }
})

export const checkSeletor = (state) => state.check.list;
export const loadCheckSeletor = (state) => state.check.load

export const { setChecked, loadChecked } = checkedSlice.actions
export default checkedSlice