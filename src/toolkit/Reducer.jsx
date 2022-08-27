import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const initialState=[];
export const todoslice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
      Add: (state,action) => {
        const addvalue=action.payload;
        const statevalue=[...state,{...addvalue}];
       state=statevalue;
       return state;
      } ,
     remove:(state,action)=>{
      state.splice(action.payload, 1);
      return state;
     } 
    }
  })
  var initialidstate;
  export const UserIDslice = createSlice({
    name: 'id',
    initialidstate,
    reducers: {
      saveId: (state,action) => {
        return state=action.payload
      } ,
      
    }
  })

  export const {Add,remove}=todoslice.actions;
  export const {saveId}=UserIDslice.actions;
  export default combineReducers({
   todoslice:todoslice.reducer,
   userid: UserIDslice.reducer
});
 