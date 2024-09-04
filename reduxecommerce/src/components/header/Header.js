import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Header.module.css";
import {Link} from "react-router-dom";
import{setAuthentication} from '../header/header-slice'

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.header || {});

  const handleLogout = () => {
    dispatch(setAuthentication({ isAuthenticated: false, user: null }));
  };
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>OneCart</h1>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ProductList" className="nav-link">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Cart" className="nav-link">
                      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" height="22vh" alt="Cart" />
                    </Link>
                  </li>
                </ul>
                
                          <div>
            {isAuthenticated ? (
              <>
                <span>Welcome, {user?.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <span>Login</span>
                <button>Login</button>
              </>
            )}
          </div>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </div>
  );
}

export default Header;


