import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../components/header/header-slice'
import productReducer from '../components/Products/productlist-slice'
// import Products from '../components/Products/Productlist'
// import { setProductlist } from "../components/Products/productlist-slice"
import productdetailReducer from "../components/Products/productdetail-slice"
import cartcontextReducer from "../components/Cart/cartcontext-slice"


export const store = configureStore({
  reducer: {
    header:headerReducer,
    product: productReducer,
    productdetail: productdetailReducer,
    cartdetail: cartcontextReducer,
  },
})
