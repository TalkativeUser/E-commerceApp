import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import x from "../../images/freshcart-logo.svg";
import { autContext } from "../../context/authencontext";
import { cartContext } from "../../context/cartContext";

export default function Navbar() {
  const { token, setToken } = useContext(autContext);
  const { numOfCartItems } = useContext(cartContext);
  const navShadow=useRef()

  const navFunc = useNavigate();

  function logOut() {
    localStorage.removeItem("tkn");
    setToken(null);

    navFunc("/login");
  }

  const handleScroll = () => {
    if(window.scrollY > 10 && navShadow.current) {

      navShadow.current.style.boxShadow='0px 10px 8px -8px rgba(0,0,0,0.75), 0px -10px 8px -8px rgba(0,0,0,0.75)'

    }


    else   {


      if(navShadow.current) {


        navShadow.current.style.boxShadow='unset'
      }

    }  
      

  }
  document.addEventListener('scroll', handleScroll);

  return (
    <>
      <nav ref={navShadow} className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-4 ">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={x} alt="freshcart" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {token ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/products"
                    >
                      products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Category"
                    >
                      Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Wishlist">
                      Wishlist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/SubCategory">
                    SubCategory
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Brands">
                    Brands
                    </Link>
                  </li>
               

                  <li className="nav-item">
                    <Link className="nav-link" to="/AllOrders">
                      All Orders
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link position-relative" to="/cart">
                    <i className="fa-solid fa-cart-shopping fa-xl "></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {numOfCartItems}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </Link>
                  </li>

                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <i className="fa-brands me-2 fa-facebook-f"></i>
                <i className="fa-brands me-2 fa-linkedin"></i>
                <i className="fa-brands me-2 fa-twitter"></i>
                <i className="fa-brands me-2 fa-whatsapp"></i>
              </li>

              {token ? (
                <>
                  <li className="nav-item">
                    <span
                      onClick={logOut}
                      style={{ cursor: "pointer" }}
                      className="nav-link"
                    >
                      Logout
                    </span>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Profile"
                    >
                      Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Regester">
                      Regester
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
