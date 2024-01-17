import TextInput from "../../ui/TextInput";
import Loader from "../../ui/Loader";
function SendOTPForm({ phoneNumber, setPhoneNumber, onSubmitOtp, isPendingOtp }) {
    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <h1 className="text-xl font-extrabold mb-10">ورود / ثبت نام</h1>
            <form className="space-y-4" onSubmit={onSubmitOtp}>
                <TextInput
                    title="شماره موبایل"
                    name="mobile"
                    value={phoneNumber}
                    onChange={ev => setPhoneNumber(ev.target.value)}
                    placeholder="09123456789"
                    className="text-left"
                />
                {isPendingOtp ? <Loader /> : <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>}
            </form>
        </div>
    )
}

export default SendOTPForm