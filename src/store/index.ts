import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import { userSlice, UserState } from "./slices/user";
// import { websiteSlice, WebsiteState } from './slices/websites';
import {} from './slices/trucks';


export interface DataState {
    // user: UserState;
    // website: WebsiteState;
}

export interface RootState {
    data: DataState;
}

export const rootReducer = combineReducers({
    // user: userSlice.reducer,
    // website: websiteSlice.reducer,
});

export const store = configureStore({
    reducer: { data: rootReducer },
});

