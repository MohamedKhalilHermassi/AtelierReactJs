import { Outlet } from "react-router-dom";

function Dashboard() {
    return ( <>
        <h1>Sidebar</h1>
        <Outlet/>
    </>
     );
}

export default Dashboard;