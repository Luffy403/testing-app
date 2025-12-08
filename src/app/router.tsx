import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { LoginPage } from "../pages/login/LoginPage";
import { StudentPage } from "../pages/student/StudentPages";
import { AdminPage } from "../pages/admin/AdminPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "Login", element: <LoginPage /> },
            { path: "Student", element: <StudentPage /> },
            { path: "Admin", element: <AdminPage /> },
        ],
    },
]);