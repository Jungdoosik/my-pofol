import { createSlice } from "@reduxjs/toolkit";

export const contactData = createSlice({
  name: "contact",
  initialState:
    [
      { title: "Email", detail: 'entlrsla@gmail.com' },
      { title: "Github", detail: 'https://github.com/Jungdoosik' },
      { title: "Phone", detail: '010-6486-4033' },
    ]
  ,
  reducers: {
    contact: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { contact } = contactData.actions;
export default contactData.reducer;