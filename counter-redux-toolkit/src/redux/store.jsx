import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { counterSlice } from "./counterSlice";
const store = configureStore({
   reducer:{
      counter:counterSlice
   }
}
export default store