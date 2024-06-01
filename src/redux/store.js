// eslint-disable-next-line no-unused-vars
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact'
import profileReducer from './profile'
import educationReducer from './education';
export default configureStore({
  reducer: {
    contact: contactReducer,
    profile: profileReducer,
    education: educationReducer,
  }
})