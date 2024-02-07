import { Outlet } from "react-router-dom"

function Content() {
  return (
      <div className="bg-grayLight p-20 overflow-y-auto">
          <Outlet />
      </div>
  )
}

export default Content