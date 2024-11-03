import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productdetail: [],
};

const productdetailSlice = createSlice({
  name: "productdetail",
  initialState,
  reducers: {
    setProductdetail: (state, action) => {
      console.log(action);
      state.productdetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproductdetail.pending, (state, action) => {
      state.inprogress = true;
    });
    builder.addCase(fetchproductdetail.fulfilled, (state, action) => {
      state.inprogress = false;
      state.productdetail = action.payload;
    });
  },
});

export const { setProductdetail } = productdetailSlice.actions;

export const fetchproductdetail = createAsyncThunk(
  "productdetail/fetchproductdetail",
  async (id: number, thunkAPI) => {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    return response.json();
  }
);

export default productdetailSlice.reducer;
