// eslint-disable-next-line no-unused-vars
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contact'
import profileReducer from './profile'
import educationReducer from './education';
import skillsReducer from './skills';
import projectReducer from './project'
import personalReducer from './personal'
export default configureStore({
  reducer: {
    contact: contactReducer,
    profile: profileReducer,
    education: educationReducer,
    skills: skillsReducer,
    project: projectReducer,
    personal: personalReducer,
  }
})