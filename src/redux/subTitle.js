import { createSlice } from "@reduxjs/toolkit";

export const subTitleData = createSlice({
  name: 'subTitle',
  initialState: [
    {
      subTitle: "Contact",
      titleSno: 1,
      subTitleSno: 1,
      content: '첫번째',
    },
    {
      subTitle: "Education",
      titleSno: 1,
      subTitleSno: 2,
      content: '두번째',
    },
    {
      subTitle: "Skills",
      titleSno: 1,
      subTitleSno: 3,
      content: '세번째',
    },
    {
      subTitle: "Project",
      titleSno: 2,
      subTitleSno: 1,
      content: '네번째',
    },
  ],
  reducers: {
    subTitle: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { subTitle } = subTitleData.actions;
export default subTitleData.reducer;

