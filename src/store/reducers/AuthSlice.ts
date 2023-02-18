import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types';
import { IUser } from '../../models/IUser';
import { auth } from '../../services/authService';
import { setTokens } from '../../services/storage';
import { RootState } from '../../store';

export interface IAuth {
  isLoading: boolean;
  isLoggedin: boolean;
  accessToken?: string;
}
const initialState: IAuth = { 
	isLoading: false,
	isLoggedin: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isLoading: false,
		isLoggedin: true,
		err: '',
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
       isLoading: false,
	   isLoggedin: false,
	   err: action.payload
      };
    },
  },
});
export const authenticateUser = (userData: any) => async (dispatch: any) => {
  try {
    const authData = await auth(
     userData
    );
	console.log('authData', authData)
    setTokens(authData.data);
	console.log('authData.data', authData.data)
    dispatch(success(authData.data));
  } catch (err) {
    dispatch(err);
  }
};
export const { start, success, error } = authSlice.actions;
export const selectAuthentication = (state: RootState) => state.authReducer;

export default authSlice.reducer;