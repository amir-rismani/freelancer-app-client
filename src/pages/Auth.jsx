import CheckOTPForm from "../features/authentication/CheckOTPForm"
import SendOTPForm from "../features/authentication/SendOTPForm"

function Auth() {
    return (
        <div className="flex flex-col items-center h-full py-20">
            {/* <SendOTPForm /> */}
            <CheckOTPForm />
        </div>
    )
}

export default Auth

//! ⛔ No side-effect here...