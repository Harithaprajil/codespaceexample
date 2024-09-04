import { createSlice } from '@reduxjs/toolkit'
 
export const headerSlice = createSlice({
  name: 'Header',
  initialState:{
    isAuthenticated:false,
    user:null,
  },
  reducer : {
 setAuthentication:(state,action)=>{
    state.isAuthenticated = action.payload.isAuthenticated;
    state.user = action.payload.user || null;

    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const {setAuthentication} = headerSlice.actions

export default headerSlice.reducer



