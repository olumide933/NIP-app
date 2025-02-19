import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Action"


export const myStore =configureStore({
    reducer: {myReducer}
})