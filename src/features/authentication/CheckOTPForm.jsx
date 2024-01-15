import { useState } from "react"
import OtpInput from 'react-otp-input';
function CheckOTPForm() {
    const [otp, setOtp] = useState("");
    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <form className="space-y-4">
                <label>کد یکبار مصرف را وارد نمایید:</label>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>&nbsp;</span>}
                    renderInput={(props) => <input type="number" {...props} />}
                    containerStyle="flex-row-reverse justify-content-center"
                    inputStyle="flex-1 px-5 py-2 border-2 border-stroke outline-none rounded-md focus:border-primary"
                />
                <button type="submit" className="btn btn--primary">اعتبار سنجی</button>
            </form>
        </div>
    )
}

export default CheckOTPForm