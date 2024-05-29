// eslint-disable-next-line no-unused-vars
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './title.js'
import subTitleReducer from './subTitle.js'

export default configureStore({
  reducer: {
    titleData: titleReducer,
    subTitleData: subTitleReducer,
  }
})