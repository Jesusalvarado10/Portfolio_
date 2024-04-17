import { Outlet } from "react-router-dom";
import { Navbar } from "../NavBar/navbar";
import { Content } from "antd/es/layout/layout";

export function Layout(){

    return (
        <main>
            <Navbar />
            <Content>
                <Outlet />
            
            </Content>
        </main>
    )
}