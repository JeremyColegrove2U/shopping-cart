import { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";
// import {
//   UPDATE_PRODUCTS,
//   ADD_TO_CART,
//   UPDATE_CART_QUANTITY,
//   REMOVE_FROM_CART,
//   ADD_MULTIPLE_TO_CART,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
//   CLEAR_CART,
//   TOGGLE_CART
// } from "./actions";

const initialState = {
  products: [],
  cartOpen: false,
  cart: [],
  categories: [],
  currentCategory: ""
}

export const reducerSlice = createSlice({
  name:'current',
  initialState,
  reducers: {
    UPDATE_PRODUCTS: (state, action) => {

      state.products = [...action.products]
    },

    ADD_TO_CART: (state, action) => {
      state.cartOpen = true;
      state.cart = [...state.cart, action.product]
    },
    ADD_MULTIPLE_TO_CART: (state, action) => {
      state.cart = [...state.cart, ...action.products]
    },
    UPDATE_CART_QUANTITY: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map(product => {
        if (action._id === product._id) {
          product.purchaseQuantity = action.purchaseQuantity
        }
        return product
      })
    },
    REMOVE_FROM_CART: (state, action) => {
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });
      state.cartOpen = newState.length > 0;
      state.cart = newState;
    },
    CLEAR_CART: state => {
      state.cartOpen = false;
      state.cart = []
    },

    TOGGLE_CART: state => {
      state.cartOpen = !state.cartOpen
    },
    UPDATE_CATEGORIES: (state, action) => {
      state.categories = [...action.categories]
    },
    UPDATE_CURRENT_CATEGORY: (state, action) => {
      state.currentCategory = action.currentCategory
    }
  }
});

export const {
  UPDATE_PRODUCTS, 
  ADD_TO_CART, 
  ADD_MULTIPLE_TO_CART, 
  UPDATE_CART_QUANTITY, 
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} = reducerSlice.actions

export default reducerSlice.reducer