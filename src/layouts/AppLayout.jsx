import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"

function AppLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[17rem_1fr]">
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}

export default AppLayout