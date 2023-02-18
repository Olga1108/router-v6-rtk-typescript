import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { isAuth } from '../services/authService';
import { Loading } from './Loading';
const Login  = React.lazy(() => import('../pages/Login'));
const Event  = React.lazy(() => import('../pages/Event'));


const AppRouter = () => {
	const {isLoggedin} = useAppSelector(state => state.authReducer)
	console.log('isLoggedin', isLoggedin)
	console.log('isAuth', isAuth())
	return (
		<React.Suspense fallback={<Loading />}>
			{isLoggedin || isAuth()
			?
			<Routes>
				<Route path='/' element={<Event />} />
				<Route path="*" element={<Event />} />
			</Routes>
			:
			<Routes>
				<Route path='/login' element={<Login/>} />
				<Route path="*" element={<Login />} />
			</Routes>
			}
		</React.Suspense>
	)
}

export default AppRouter;