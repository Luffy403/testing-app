import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { LoginPage } from "../pages/login/LoginPage";
import { StudentLayout } from "../layouts/StudentLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFoundPage } from "../pages/errors/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "Login", element: <LoginPage /> },
            { path: "Student", element: <StudentLayout /> , 
                children: [
                {
                    index: true, 
                    element: <h2> Student dashboard</h2> 
                },
                {
                    path: "test", 
                    element: <h2> Student TESTS</h2> 
                }
            ]},
            { path: "Admin", element: <AdminLayout /> ,
                children: [
                {
                    index: true, 
                    element: <h2> Admin dashboard</h2> 
                },
                {
                    path: "settings", 
                    element: <h2> Admin SETTINGS</h2> 
                }
                ]
             },
        ],
    },
]);