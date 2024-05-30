import { createSlice } from "@reduxjs/toolkit";

export const contentData = createSlice({
  name: 'content',
  initialState: [
    { content: "첫번째", titleSno: 1, subTitleSno: 1 },
    { content: "두번째", titleSno: 1, subTitleSno: 2 },
    { content: "세번째", titleSno: 1, subTitleSno: 3 },
    { content: "네번째", titleSno: 2, subTitleSno: 1 },
  ],
  reducers: {
    content: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { content } = contentData.actions;
export default contentData.reducer;