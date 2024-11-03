import Productcard from "./ProductCard";
import styles from "../../styles/Productlist.module.css";
import commonStyles from "../../styles/Common.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewproducts } from "../Products/productlist-slice";
import { useEffect} from "react";



const Products = () => {
        const dispatch = useDispatch();
        
  // const[searchText ,setSearchText] = useState('');
  // const onSearchChange= ($e)=>{
  //   setSearchText($e.target.value);
  // }
  const inProgress = useSelector((state) => state.product.inprogress);
  const productArray = useSelector((state) => state.product.products);

  useEffect(()=>{
     dispatch(fetchNewproducts());
  },[dispatch]);
  
  
  if (inProgress) {
    console.log(inProgress)
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={commonStyles.headeinnerBody}> 
      {/* search:<input type="text" id="productSearch" onChange={onSearchChange}/><button>search</button> */}
   
      <div className={styles.container}>

      {productArray.length > 0 ? (
        productArray.map(product => (
          <Productcard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
      </div>
      </div>
    </>
  );
};

export default Products;
