import { Outlet } from "react-router-dom";

export function AdminLayout(){
    return <>
        <header></header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
}