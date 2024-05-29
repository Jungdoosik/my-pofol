import { createSlice } from "@reduxjs/toolkit";

export const subTitleData = createSlice({
  name: 'subTitle',
  initialState: [
    { subTitle: "Contact", titleSno: 1, subTitleSno: 1 },
    { subTitle: "Education", titleSno: 1, subTitleSno: 2 },
    { subTitle: "Skills", titleSno: 1, subTitleSno: 3 },
    { subTitle: "Project", titleSno: 2, subTitleSno: 1 },
  ],
  reducers: {
    subTitle: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { subTitle } = subTitleData.actions;
export default subTitleData.reducer;

