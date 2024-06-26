import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Auth/Login';
import NotFound from './views/NotFound';
import Home from './views/Home/Home';
import Register from './views/Auth/Register';
import AuthProtectedRoute from './views/AuthProtectedRoute';
import App from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: (
					<AuthProtectedRoute>
						<Login />
					</AuthProtectedRoute>
				),
			},
			{
				path: '/register',
				element: (
					<AuthProtectedRoute>
						<Register />
					</AuthProtectedRoute>
				),
			},
		],
	},
]);
