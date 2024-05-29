// eslint-disable-next-line no-unused-vars
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './title.js'

export default configureStore({
  reducer: {
    titleData: dataReducer
  }
})