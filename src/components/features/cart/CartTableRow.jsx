import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { deleteCartById, updateCart } from "../../../api/cartAPI";
import useCarts from "../../../hooks/useCarts";

const CartTableRow = ({ product, setCheckedCart, checkedCart }) => {
  const { refreshCart } = useCarts();
  const [quantity, setQuantity] = useState(product.cart_quantity);
  const [isQuantityOverLimit, setIsQuantityOverLimit] = useState(false);

  const deleteHandler = async (id) => {
    await deleteCartById(id);
    refreshCart();
  };

  const increaseHandler = async () => {
    isQuantityOverLimit || setIsQuantityOverLimit(false);
    const newQuantity = quantity + 1;

    try {
      await updatehandler({ quantity: newQuantity });
      setQuantity(newQuantity);
    } catch ({ response }) {
      setIsQuantityOverLimit(true);
      setQuantity(quantity);
    }
  };

  const decreaseHandler = async () => {
    isQuantityOverLimit && setIsQuantityOverLimit(false);
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    updatehandler({ quantity: newQuantity });
  };

  const updatehandler = async ({ quantity }) => {
    await updateCart(product.cart_id, quantity);
    refreshCart();
  };

  const checkHandler = (id) => {
    const isChecked = checkedCart.includes(id);
    if (isChecked) {
      setCheckedCart(checkedCart.filter((item) => item !== id));
    } else {
      setCheckedCart((prev) => [...prev, id]);
    }
  };

  return (
    <div className="addCart-contaniner">
      <input
        type="checkbox"
        checked={checkedCart.includes(product.cart_id)}
        onChange={() => checkHandler(product.cart_id)}
      />
      <div className="addCart-top__name">{product.name}</div>
      <div className="addCart-top__img">
        <img src={product.image} />
      </div>
      <div className="addCart-top__price">
        {new Intl.NumberFormat().format(product.price * 1000)} vnđ
      </div>
      <div className="quantity-cart-container">
        <div className="text-quantily-cart">
          <div
            className="quantily-cart__minus"
            onClick={() => decreaseHandler()}
          >
            -
          </div>
          <div className="quantily-cart__number">{quantity}</div>
          <div
            className="quantily-cart__plus"
            onClick={() => increaseHandler(product.cart_quantity)}
          >
            +
          </div>
        </div>
        <div className={`error ${isQuantityOverLimit ? "active" : ""}`}>
          Over limit!
        </div>
      </div>
      <div className="addCart-top__totalPrice">
        {new Intl.NumberFormat().format(
          product.price * 1000 * product.cart_quantity
        )}
        vnđ
      </div>
      <p className="addCart-top__dele">
        <FontAwesomeIcon
          className="faTrashCan"
          icon={faTrashCan}
          onClick={() => {
            deleteHandler(product.cart_id);
          }}
        />
      </p>
    </div>
  );
};
export default CartTableRow;
