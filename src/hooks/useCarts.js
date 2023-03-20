import { useDispatch, useSelector } from "react-redux"
import { getCarts as getCartApi } from "../api/cartAPI"
import { cartSelector, loadCart, loadCartSelector, setCartList } from "../redux/slices/cartSlice"


const useCarts = () => {
  const dispatch = useDispatch()
  const load = useSelector(loadCartSelector)
  const cart = useSelector(cartSelector)


  const refreshCart = () => dispatch(loadCart())
  const setCart = (cart) => dispatch(setCartList(cart))

  const getCart = async () => {
    try {
      const res = await getCartApi()
      setCart(res.data.carts)
    }
    catch (e) {
      console.log("Error carts: ", e)
    }
  }

  const getTotal = () => {
    return cart.reduce((total, cartEle) => {
      return total + cartEle.cart_quantity * cartEle.price * 1000
    }, 0)
  }

  const getQuantity = () => {
    return cart.map(ele => {
      return [ele.cart_quantity]
    })
  }

  return {
    cart,
    setCart,
    refreshCart,
    loadCartToggle: load,
    getCart, getTotal, getQuantity
  }
}

export default useCarts