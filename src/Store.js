import { configureStore } from "@reduxjs/toolkit";
import todoslice from './toolkit/Reducer';
import userid from './toolkit/Reducer';
const store= configureStore({
    reducer: {
        fetchvalue:todoslice,
        userid:userid
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),

})
export default store;