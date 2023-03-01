import { configureStore } from "@reduxjs/toolkit";
// @ts-ignore

const store = configureStore({});

export type AppDispatch = typeof store.dispatch;

export default store;
