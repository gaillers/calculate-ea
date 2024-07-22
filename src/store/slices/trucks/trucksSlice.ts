import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface TruckState {
   
}
const initialState: TruckState = {
   
};

// export const Website = createAsyncThunk('website/Website', async ({ page, rowsPerPage }: { page: number; rowsPerPage: number }) => {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ filter: { page, perPage: rowsPerPage } }),
//     };
  
//     try {
//       const response = await fetch('google' + '/get-website-list', requestOptions);
//       const data = await response.json();
  
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   });
  
//   export const websiteSlice = createSlice({
//     name: 'website',
//     initialState,
//     reducers: {
//       weblistlSuccess: (state, action) => {
//         state.websiteList = action.payload;
//         state.websiteListPagination = action.payload;
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(Website.fulfilled, (state, action) => {
//           state.websiteList = action.payload.domain_list;
//           state.websiteListPagination = action.payload.pagination;
//         });
//     },
//   });
  
//   export const { weblistlSuccess } = websiteSlice.actions;