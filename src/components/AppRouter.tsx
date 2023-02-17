import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from './Loading';
const Login  = React.lazy(() => import('../pages/Login'));
const Event  = React.lazy(() => import('../pages/Event'));

// import { privateRoutes, publicRoutes } from '../router'; 

const AppRouter = () => {
	const auth = true;
	return (
		<React.Suspense fallback={<Loading />}>
			{auth
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