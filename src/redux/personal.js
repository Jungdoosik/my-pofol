import { createSlice } from "@reduxjs/toolkit";

export const personalData = createSlice({
  name: 'personal',
  initialState: [
    {
      imgSrc: process.env.PUBLIC_URL + '/image/todoList.png',
      title: 'TodoList',
      made: '2024.06'
    }
  ],
  reducers: {
    edcation: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { personal } = personalData.actions;
export default personalData.reducer;