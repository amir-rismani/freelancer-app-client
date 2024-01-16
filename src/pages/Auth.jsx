import AuthContainer from "../features/authentication/AuthContainer"

function Auth() {
    return (
        <div className="flex flex-col items-center h-full py-20">
            <AuthContainer />
        </div>
    )
}

export default Auth

//! ⛔ No side-effect here...