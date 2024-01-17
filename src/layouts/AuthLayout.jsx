import { Outlet } from "react-router-dom"
import AuthLayoutImage from "../assets/images/layouts/auth_layout.svg"
import Logo from "../assets/images/layouts/logo.svg"
function AuthLayout() {
    return (
        <div className="bg-grayLight h-full flex flex-col justify-center items-center">
            <div className="mx-4 bg-white flex flex-col justify-center items-center drop-shadow-md md:flex-row">
                <div className="text-center md:flex flex-col gap-5 flex-1 p-14 md:border-l border-l-stroke justify-center items-center">
                    <img src={Logo} className="mx-auto" />
                    <p className="text-center hidden md:block ">سامانه برون سپاری و دریافت پروژه</p>
                    <img src={AuthLayoutImage} className="hidden md:block" />
                </div>

                <div className="flex-1 flex flex-col p-14 pt-0 md:pt-14">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout