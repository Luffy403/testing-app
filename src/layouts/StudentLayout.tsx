import { Outlet } from "react-router-dom";

export function StudentLayout(){
    return <>
        <header></header>
        <main>
            <aside></aside>
            <Outlet />
        </main>
        <footer></footer>
    </>
}