import React, { createContext, useContext } from "react";
import { configureStore} from '@reduxjs/toolkit'
import reducerSlice from "./reducers";


const store = configureStore({
  reducer:reducerSlice
  })

  // const StoreProvider = ({ value = [], ...props }) => {
  //   const [state, dispatch] = useProductReducer({
  //     products: [],
  //     cart: [],
  //     cartOpen: false,
  //     categories: [],
  //     currentCategory: '',
  //   });
  
  //   // return <Provider value={[state, dispatch]} {...props} />;
  // };
  
  // const useStoreContext = () => {
  //   return useContext(store);
  // };

export { store };
