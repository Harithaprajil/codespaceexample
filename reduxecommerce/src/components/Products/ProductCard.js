import styles from "../../styles/Productcard.module.css";
import { Link } from "react-router-dom";


const Productcard = ({ product }) => {
    return (
      <div className={styles.content}>
      <Link to={"/productdetail/"+product.id} className="nav-link">
      <div className={styles.box}>
        <div>
          <img src={product.image} height="250px" width="150px" alt="product" />
        </div>
        <div>
          <b>{product.title}</b>
        </div>
        <div>{product.category}</div>


        <div style={{ fontSize: "22px" }}>${product.price}</div>
        <div style={{color:"brown"}}>{product.rating.rate}</div>
        
      </div>
      </Link>
    </div>
    );
  };
export default Productcard