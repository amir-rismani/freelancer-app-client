import useUser from "../features/authentication/useUser"

function Header() {
    const { data } = useUser()
    console.log(data)
    return (
        <div className="col-start-2 row-span-1 bg-white border-b-2 border-stroke">Header</div>
    )
}

export default Header