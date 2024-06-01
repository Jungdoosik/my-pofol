import { createSlice } from "@reduxjs/toolkit";

export const skillsData = createSlice({
  name: "skills",
  initialState:
    [
      {
        title: "Back-End",
        details: [
          { detail: 'Java' },
          { detail: 'Oracle, MySql,' },
          { detail: 'Spring, Egov, SpringBoot' },
        ]
      },
      {
        title: "Front-End",
        details: [
          { detail: 'JavaScript, Jquery' },
          { detail: 'React, Vue' }
        ]
      },
      {
        title: "Tools",
        details: [
          { detail: 'Git, Github' },
          { detail: 'websquare, Github' }
        ]
      },
    ]
  ,
  reducers: {
    skills: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { skills } = skillsData.actions;
export default skillsData.reducer;