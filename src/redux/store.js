import {configureStore} from "@reduxjs/toolkit";
import excReducer from "./slice/excCall";

export const store = configureStore({
    reducer: {
        exc : excReducer
    }
});