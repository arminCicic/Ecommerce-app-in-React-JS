import React, { useState, useRef, useEffect } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AiFillDelete } from "react-icons/ai";
import { AppState } from "../../Context";
import { Link } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);

    //cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

const NavBar = () => {
  const [height, width] = useWindowSize();
  const { total, cart, setCart, setSearchTerm, user, logout } = AppState();
  const [showRegistrationIcon, setShowRegistrationIcon] = useState(false);
  const [searchBarResponsive, setSearchBarResponsive] = useState(false);

  // Hook
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target) || isHidden) {
          return;
        }
        handler(event);
      };
      document.addEventListener("click", listener);
      const handleScreenChange = () => (width > 670 ? setShowLinks(true) : " ");
      window.addEventListener("resize", handleScreenChange);

      return () => {
        document.removeEventListener("click", listener);
        window.removeEventListener("resize", handleScreenChange);
      };
    }, [ref, handler, width]);
  }

  const [isHidden, setIsHidden] = useState(true);

  const toggleCartHeader = () => {
    setIsHidden(!isHidden);
  };
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => toggleCartHeader());

  const [showLinks, setShowLinks] = useState(true);

  // Removing Cart Text when resizing window
  const [symbol, setSymbol] = useState("Cart");
  const display = (value) => {
    setSymbol(value);
  };
  const clear = () => {
    setSymbol(0);
  };

  // Event listener
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 768) {
      setShowRegistrationIcon(false);
      display("Cart");
    } else {
      setShowRegistrationIcon(true);
      display("");
    }
  });

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 650) {
      setSearchBarResponsive(false);
    } else {
      setSearchBarResponsive(true);
    }
  });

  return (
    <>
      <div className="navigation-container">
        <Link to="/" className="links">
          <div className="logo">Only Supplements</div>
        </Link>

        <form className={searchBarResponsive ? "form-responsive" : "form"}>
          <input
            className={
              searchBarResponsive ? "search-input-responsive" : "search-input"
            }
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit"></button>
        </form>
        {/* <button
          className="reorder-button"
          onClick={() => setShowLinks(!showLinks)}
          
        >
          <i class="fa fa-reorder"></i>
        </button> */}

        {user ? (
          <div className="logout-container">
            <Link to="/login">
              <div className="email">{user.email}</div>
            </Link>
            <div className="logout">
              <div>
                <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
              </div>
              <span onClick={logout}> Sign out</span>
            </div>
          </div>
        ) : showRegistrationIcon ? (
          <Link to="/login" className="links">
            <FontAwesomeIcon
              className="sign-icon"
              icon={faSignOutAlt}
            ></FontAwesomeIcon>
          </Link>
        ) : (
          <Link to="/login" className="links">
            <div className="registration">
              <button>Login</button>
              <button>Registration</button>
            </div>
          </Link>
        )}

        <div className="cart-icon-container" onClick={toggleCartHeader}>
          {symbol}
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <div className="badge">{cart.length}</div>
        </div>
      </div>

      <div
        id="container"
        className={isHidden ? "container-hidden" : "container"}
      >
        <div ref={ref} className="shopping-cart">
          <div className="shopping-cart-header">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <span className="badge">{cart.length}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text"> {total} €</span>
            </div>
          </div>

          {cart.map((prod) => (
            <div className="modal-items-container">
              <div className="single-modal-item">
                <img src={prod.url} alt={prod.name} />
                <span className="single-modal-item-price">{prod.price}€</span>
                <AiFillDelete
                  onClick={() =>
                    setCart(cart.filter((c) => c.url !== prod.url))
                  }
                  fontSize="25px"
                />
              </div>
            </div>
          ))}

          <Link to="/cart" className="links">
            <a href="#" className="modal-button">
              Checkout
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
