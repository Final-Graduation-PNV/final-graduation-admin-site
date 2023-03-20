import { useDispatch, useSelector } from "react-redux";
import {
  addressSelector,
  loadPayment,
  loadPaymentSelector,
  paymentSelector,
  setPaymentList,
} from "../redux/slices/paymentSlice";

const usePayment = () => {
  const dispatch = useDispatch();
  const load = useSelector(loadPaymentSelector);
  const payments = useSelector(paymentSelector);
  const address = useSelector(addressSelector);

  const refreshPayment = () => dispatch(loadPayment());
  const setPayment = (product) => dispatch(setPaymentList(product));
  const setSpecificAddress = (address) => dispatch(setSpecificAddress(address));
  const setPhone = (phone) => dispatch(setPhone(phone));
  const setCity = (city) => dispatch(setCity(city));

  const totalPayment = () => {
    return payments.reduce((total, paymentEle) => {
      return total + paymentEle.product_price * paymentEle.cart_quantity * 1000;
    }, 0);
  };

  return {
    address,
    payments,
    loadProductToggle: load,
    refreshPayment,
    setPayment,
    totalPayment,
    setSpecificAddress,
    setPhone,
    setCity,
  };
};
export default usePayment;
