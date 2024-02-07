import { Navigate, createBrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth';
import CompleteProfile from './pages/CompleteProfile';
import OwnerDashboard from './pages/OwnerDashboard';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';

export const router = createBrowserRouter([
    {
        path: "/owner",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <OwnerDashboard />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "projects/:id",
                element: <Project />,
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