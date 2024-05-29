import { createSlice } from "@reduxjs/toolkit";

export const titleData = createSlice({
  name: "titleData",
  initialState: {
    value:
      [
        { title: "🧑‍💻Developer Jeong Doo-sik", sno: 1 },
        { title: "🧑‍💻Career", sno: 2 },
      ]
  },
  reducers: {
    title: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { title } = titleData.actions;
export default titleData.reducer;