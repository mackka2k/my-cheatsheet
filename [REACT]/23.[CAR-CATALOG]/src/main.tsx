import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/styles/global.css'
import CarDetail from './components/screens/car-detail/CarDetail'
import Home from './components/screens/home/Home'
import AuthProvider from './providers/AuthProvider'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/car/:id',
		element: <CarDetail />,
	},
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
