import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-700 text-white">
                <ul className="menu text-white">
                    <li><NavLink to='dashboard/user'>All User</NavLink></li>
                    <li><NavLink to='dashboard/users'>All User</NavLink></li>
                    
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;