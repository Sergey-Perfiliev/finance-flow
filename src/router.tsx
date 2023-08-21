import { createBrowserRouter } from 'react-router-dom'
import AddOperation from './pages/AddOperation'
import Home from './pages/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'add-operation',
		element: <AddOperation />,
	},
])

export default router
