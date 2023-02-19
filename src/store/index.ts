import { combineReducers } from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import eventReducer from './reducers/EventSlice'

const rootReducer = combineReducers({
	authReducer,
	eventReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
