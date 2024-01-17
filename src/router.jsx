import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Auth from './pages/Auth';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "/complete-profile",
                element: <CompleteProfile />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);