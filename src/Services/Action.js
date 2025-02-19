import { createSlice } from '@reduxjs/toolkit'

const initialState = {
myValue: 3,
userName: "Falowo Olumy"
};

const Action = createSlice({
  name:"Global",
  initialState,
  reducers: {
    increament:(state) => {
        state.myValue += 50;
    },
    decreament:(state) =>{
        state.myValue -=4;
    }
  },
});

export const {increament} = Action.actions

export const {decreament} = Action.actions

export default Action.reducer
