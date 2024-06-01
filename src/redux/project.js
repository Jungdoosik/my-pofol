import { createSlice } from "@reduxjs/toolkit";

export const projectData = createSlice({
  name: 'project',
  initialState: [
    {
      date: "2022.05 ~ 2022.09",
      projectName: '삼성 welstory 임직원 쇼핑몰 리뉴얼',
      detail: '배송관련 PC화면 개선 담당',
      skills: [
        { skill1: 'Vue.js' },
        { skill2: 'Nuxt.js' },
        { skill3: 'Javascript' },
        { skill4: 'MySql' },
        { skill5: 'Git' },
      ],
    }
  ],
  reducers: {
    project: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { profile } = projectData.actions;
export default projectData.reducer;