import { createSlice } from "@reduxjs/toolkit";

export const educationData = createSlice({
  name: 'edcation',
  initialState: [
    {
      date: '2021.09.08 ~ 2022.02.16',
      academy: 'KH정보교육원',
      curriculum: '디지털 컨버전스 공공 개발자 과정'
    }
  ],
  reducers: {
    edcation: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { edcation } = educationData.actions;
export default educationData.reducer;