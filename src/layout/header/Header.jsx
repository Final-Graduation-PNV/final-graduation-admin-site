import "../../pages/Modals/Logout";
import "../../styles/Header/header.scss";

import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBasketball, faBell, faCartShopping, faSearch, faShop, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import account from "../../assets/Image/account.png";
import cartProduct from "../../assets/Image/cartProduct.png";
import logo from "../../assets/Image/logo.png";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import Logout from "../../pages/Modals/Logout";

function Header() {

  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCarts();
  const { refreshProduct } = useProducts();


  const refreshHomePage = () => {
    refreshProduct()
    console.log("refresh home page home: ")
  }



  return (
    <>
      <div className="header">
        {isLogout && <Logout closeModal={setIsLogout} />}
        <div id="container-header">
          <div className="header-left">
            <div className="header-left__img">
              <img src={logo} alt="Logo" style={{ width: 27, height: 45, marginRight: 30 }} onClick={() => { refreshHomePage() }} />
            </div>
            <div className="header-search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" className="search" placeholder="Search plan & flower" />
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-icon">
              <Link to="/"><FontAwesomeIcon className="fa faShop" icon={faShop} onClick={() => { refreshHomePage() }} /></Link>
              <FontAwesomeIcon className="fa faUserGroup" icon={faUserGroup} />
              <FontAwesomeIcon className="fa faBasketball" icon={faBasketball} />
            </div>
            <div className="header-right-account">
              <div className="detail-top__cart">
                <div className="top__cart-icon" >
                  <FontAwesomeIcon className="faCartShopping" icon={faCartShopping} onClick={() => navigate('/cart')} />
                  <a>{cart.length}</a>
                </div>
                <div className="header-carts">
                  <p className="carts-top"></p>
                  {
                    cart.length ? (
                      <div className="carts-products">
                        <p>Recently Added Products</p>
                        {cart.map((pro, idx) => {
                          return (
                            <div key={idx} className="recently-carts">
                              <img className="carts__img" src={pro.image} alt="No image" />
                              <p className="carts__name">{pro.name}</p>
                              <p className="carts__price">{new Intl.NumberFormat().format(pro.price * 1000)} vnđ</p>
                            </div>
                          )
                        })}
                        <button className="carts-product__btn" onClick={() => { navigate("/cart") }}>View my cart</button>
                      </div>
                    ) : (
                      <div className="noCart-product">
                        <img src={cartProduct} />
                        <p>No Products Yet</p>
                      </div>
                    )
                  }
                </div>
              </div>
              <div>
                <FontAwesomeIcon className="faFacebookMessenger" icon={faFacebookMessenger} />
                <FontAwesomeIcon className="faBell" icon={faBell} />
                <img className="acount__" src={account} alt="account" style={{ width: 40, height: 40, borderRadius: 50, cursor: "pointer" }} onClick={() => { setIsLogout(true) }} />
              </div>
            </div>

          </div >
        </div>
      </div>
    </>
  )
}
export default Header