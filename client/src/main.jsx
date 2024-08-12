import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CookPage from './pages/CookPage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import Login from './pages/LoginPage.jsx'
import Signup from './pages/SignupPage.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/cook',
        element: <CookPage />,
      },
      {
        path: '/restaurant',
        element: <RestaurantPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
