import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import Auth from './pages/Auth';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/complete-profile",
        element: <CompleteProfile />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);