import { Outlet } from "react-router-dom";
import SideNav from "../Shared/SideNav/SideNav";
import DashHeader from "../Shared/DashHeader/DashHeader";

const Dashboard = () => {
    return (
        <div className="bg-[#0A0F23]">
            <div className="container flex justify-start items-stretch">
                <div className=" md:w-[200px] border-r border-[#171938]">
                   <SideNav />
                </div>
                <div className=" flex-1">
                    <div className=" border-b border-[#171938]">
                        <DashHeader />
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;