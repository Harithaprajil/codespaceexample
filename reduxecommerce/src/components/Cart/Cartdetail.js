import styles from "../../styles/cart.module.css";
import commonStyles from "../../styles/Common.module.css";
import { useDispatch, useSelector } from "react-redux";
 import { setCartItems,
  removeCartItems,
  deleteFromCart,
} from "../Cart/cartcontext-slice";


const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartdetail.cartItems);

  // Calculate total amount for the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  return (
    <>
      <div className={commonStyles.headeinnerBody}>
        <h2>Cart</h2>
        <div>
          {[...cartItems]
            .slice()
            .reverse().map((item) => (
            <div className={styles.carttable} key={item.id}>
              <div className={styles.cartbox1}>
                <img src={item.image} height={"150px"} alt={item.title} />
              </div>
              <div className={styles.cartbox2}>
                <div
                  className={styles.cartitembox}
                  style={{ fontSize: "12px" }}
                >
                  <h4>{item.title}</h4>
                </div>
                <div className={styles.cartitembox}>
                  <p style={{ color: "red", fontSize: "25px" }}>${item.price}</p>
                </div>
                <div className={styles.cartitembox}>
                  <div className={styles.cartbutton}>
                    <button
                      className={styles.cartCount}
                      onClick={() => dispatch(removeCartItems(item))}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className={styles.cartCount}
                      onClick={() => dispatch(setCartItems(item))}
                    >
                      +
                    </button>
                    <button
                      className={styles.cartRemove}
                      onClick={() => dispatch(deleteFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                  <div className={styles.cartplace}>
                    <div>
                      <p>
                        <b>Total Amount:</b>
                      </p>
                      <div style={{ color: "red", fontSize: "30px" }}>
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.placeOrderContainer}>
            <p>
              <b>Cart Total:</b>
            </p>
            <div style={{ color: "red", fontSize: "30px" }}>{totalAmount}</div>
            <button className={styles.placeOrder}>Place Order</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default CartList;
