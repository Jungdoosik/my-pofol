import { createSlice } from "@reduxjs/toolkit";

export const profileData = createSlice({
  name: "profile",
  initialState:
    [
      { title: '이름', detail: '정두식' },
      { title: '생일', detail: '92년 04월 04일' },
      { title: '직업', detail: '백엔드 개발자' },
      { title: '학력', detail: '경민대학교 졸업 (2014.03 ~ 2016.02)' },
      { title: '경력', detail: '3년차에 들어선 (2022.05.16 ~ )' },
      { title: '취미', detail: '코인노래방 가기, 음악감상, 공부' },
    ]
  ,
  reducers: {
    profile: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { profile } = profileData.actions;
export default profileData.reducer;