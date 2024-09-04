import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  inprogress:false,

}


  
  const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductlist:(state,action)=>{
        console.log(action)
        state.products = action.payload;
    }
  },
  extraReducers:(builder) =>{
    builder.addCase(fetchNewproducts.pending,(state,action)=>{
        state.inprogress= true;
    });
    builder.addCase(fetchNewproducts.fulfilled,(state,action)=>{
            state.inprogress= false;
            state.products = action.payload;
    });

  }
})

// Action creators are generated for each case reducer function
export const { setProductlist } = productSlice.actions

export const fetchNewproducts = createAsyncThunk(
  'product/fetchNewproducts',
  async (limit: number, thunkAPI) => {
    const response = await fetch('https://fakestoreapi.com/products?limit'+limit);
    return response.json()
  },
)

export default productSlice.reducer

