import { createSlice } from "@reduxjs/toolkit";

export const projectData = createSlice({
  name: 'project',
  initialState: [
    {
      date: "2022.05 ~ 2022.09",
      projectName: '삼성 welstory 임직원 쇼핑몰 리뉴얼',
      role: '배송관련 PC화면 개선 담당',
      details: [
        { detail: '배송 관련 추가 로직 개발 및 퍼블리싱' },
        { detail: '장바구니 관련 api 개발' },
      ],
      skills: [
        { skill: 'Vue.js' },
        { skill: 'Nuxt.js' },
        { skill: 'Javascript' },
        { skill: 'MySql' },
        { skill: 'Git' },
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