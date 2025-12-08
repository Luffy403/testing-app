import { Outlet } from "react-router-dom";

export function AppLayout(){
    return <>
        <header></header>
        <main>
            <Outlet />
        </main>
        <footer>&copy; 2025</footer>
    </>
}