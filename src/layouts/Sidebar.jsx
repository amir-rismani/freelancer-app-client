import { NavLink } from "react-router-dom"
import Logo from "../assets/images/layouts/logo_light.svg"
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Sidebar() {
    return (
        <div className="bg-darkFull text-white h-screen row-start-1 row-span-2 p-10 flex flex-col gap-16">
            <img src={Logo} alt="" />
            <div className="flex flex-col gap-3">
                <CustomNavLink end to="/owner/dashboard">
                    <MdOutlineDashboard className="text-xl" />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to="/owner/projects">
                    <AiOutlineFundProjectionScreen className="text-xl" />
                    <span>پروژه ها</span>
                </CustomNavLink>
            </div>
        </div>
    )
}
export default Sidebar


function CustomNavLink({ end = false, to, children }) {
    const navLinkClass = "flex justify-start items-center gap-2 px-3 py-2 rounded-lg";
    return (
        <NavLink end={end} to={to} className={({ isActive }) => isActive ? `${navLinkClass} bg-darkMiddle` : navLinkClass}>
            {children}
        </NavLink>
    )
}