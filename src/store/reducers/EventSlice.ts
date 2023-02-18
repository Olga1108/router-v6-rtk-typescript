import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types';
import { IUser } from '../../models/IUser';

const initialState: AuthState = {
	isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}