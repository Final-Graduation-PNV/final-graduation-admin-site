import { useDispatch, useSelector } from "react-redux";
import { getData } from "../api/productsAPI";
import {
  loadProduct,
  loadProductSelector,
  productSelector,
  setProductList,
} from "../redux/slices/productSlice";

const useProducts = () => {
  const dispatch = useDispatch();
  const load = useSelector(loadProductSelector);
  const product = useSelector(productSelector);

  const refreshProduct = () => dispatch(loadProduct());
  const setProduct = (product) => dispatch(setProductList(product));

  const getProduct = async () => {
    try {
      const res = await getData();
      setProduct(res.data.products);
    } catch (e) {
      console.log("Err of product home page", e);
    } 
  };

  return {
    product,
    loadProductToggle: load,
    refreshProduct,
    getProduct,
  };
};

export default useProducts;
