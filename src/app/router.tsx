import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { LoginPage } from "../pages/login/LoginPage";
import { StudentLayout } from "../layouts/StudentLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { NotFoundPage } from "../pages/errors/NotFoundPage";
import { StudentTestPage } from "../pages/student/StudentTestPage";
import { StudentPage } from "../pages/student/StudentPage";
import { StudentTests } from "../pages/student/StudentTests";
import { StudentProfilePage } from "../pages/student/StudentProfilePage";
import { StudentStatistics } from "../pages/student/StudentStatistics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "student", element: <StudentLayout /> , 
                children: [
                {
                    index: true, 
                    element: <StudentPage /> 
                },
                {
                    path: "tests", 
                    element: <StudentTests /> 
                },
                {
                    path: "test/:id", 
                    element: <StudentTestPage />
                },
                {
                    path: "profile",
                    element: <StudentProfilePage />
                },
                {
                    path: "statistics",
                    element: <StudentStatistics />
                }
            ]},
            { path: "admin", element: <AdminLayout /> ,
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
            { path:'*' , element: <NotFoundPage />}
        ],
    },
]);