import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RouteCart = () => {
  return (
    <div className="cart-top">
      <div className="cart-top__nav">
        <Link to="/home">Marketplace </Link>
        <FontAwesomeIcon
          style={{
            fontSize: 13,
            fontWeight: 600,
            marginTop: 5,
            marginRight: 5,
          }}
          icon={faAngleRight}
        />
        <Link to="/cart">Add to cart </Link>
      </div>
    </div>
  );
};
export default RouteCart;
