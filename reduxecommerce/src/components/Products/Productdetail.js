import commonStyles from "../../styles/Common.module.css";
import {useNavigate, useParams } from "react-router-dom";
import {  useEffect } from "react";
import prostyle from "../../styles/Productdetail.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {  fetchproductdetail } from "../Products/productdetail-slice";
import {setCartItems } from "../Cart/cartcontext-slice"



const Productdetail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const inProgress = useSelector((state) => state.productdetail.inprogress);
  const productDetail = useSelector((state) => state.productdetail.productdetail);
  const navigate = useNavigate('');
  

  
  useEffect(()=>{
    dispatch(fetchproductdetail(params.id));
  }, [dispatch]);

  const productdesign = [commonStyles.headeinnerBody, prostyle.prodetail].join(
    " "
  );
  
  
  return (
    <div className={productdesign}>
      <div className={prostyle.prodetail}>
        <div className={prostyle.prodetailtable1}>
          <img src={productDetail.image} height={"250px"} />
        </div>
        <div className={prostyle.prodetailtable2}>
          <div className={prostyle.prodetailbox}>
            <b>{productDetail.title}</b>
          </div>
          <div className={prostyle.prodetailbox} style={{ color: "red",  fontSize:"25px"}}>
            {productDetail.price}
          </div>
          <div className={prostyle.prodetailbox}>{productDetail.category}</div>
          <div className={prostyle.prodetailbox}>
            {productDetail.description}
          </div>
          {/* <div className={prostyle.prodetailbox}>{productDetail.rating.rate}</div>
           <div className={prostyle.prodetailbox}>{productDetail.rating.count}</div> */}
          <div className={prostyle.prodetailbox}>
            {" "}
            <button
            
              onClick={() => dispatch(setCartItems(productDetail),navigate('/Cart') ) 
                
              }
            >
              Add to Cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
