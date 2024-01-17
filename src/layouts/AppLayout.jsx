import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[17rem_1fr]">
            <div className="col-start-2 row-span-1 bg-white border-b-2 border-stroke">Header</div>
            <div className="bg-darkFull text-white h-screen row-start-1 row-span-2 p-10">sidebar</div>
            <div className="bg-grayLight p-20 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout