import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    list: [],
    address: {
      city: "",
      specific: "",
      phone: ""
    },
    load: false
  }, reducers: {
    setPaymentList(state, action) {
      state.list = action.payload
    },
    setCity: (state, action) => {
      state.address.city = action.payload
    },
    setSpecificAddress: (state, action) => {
      state.address.specific = action.payload
    },
    setPhone: (state, action) => {
      state.address.phone = action.payload
    },
    loadPayment(state) {
      state.load = !state.load
    }
  }
})

export const addressSelector = (state) => state.payment.address
export const paymentSelector = (state) => state.payment.list
export const loadPaymentSelector = (state) => state.payment.load

export const { setPaymentList, loadPayment, setCity, setSpecificAddress, setPhone } = paymentSlice.actions
export default paymentSlice
