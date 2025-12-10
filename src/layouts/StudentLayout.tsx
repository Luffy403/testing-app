import { Outlet } from "react-router-dom";

export function StudentLayout(){
    return <>
        <header></header>
        <main>
            <Outlet />
        </main>
        <footer></footer>
    </>
}