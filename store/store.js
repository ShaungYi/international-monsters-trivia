import {configureStore } from '@reduxjs/toolkit'
import AppSlice from './AppSlice'




let store = configureStore({
    reducer: {
        App: AppSlice.reducer
    } 
})


export const AppSliceActions = AppSlice.actions
export default store