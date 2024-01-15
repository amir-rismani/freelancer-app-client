import { useState } from "react"
import TextInput from "../../ui/TextInput";

function SendOTPForm() {
    const [mobile, setMobile] = useState("");
    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <form className="space-y-4">
                <TextInput
                    title="شماره موبایل"
                    name="mobile"
                    value={mobile}
                    onChange={ev => setMobile(ev.target.value)}
                    placeholder="09123456789"
                    className="text-left"
                />
                <button type="submit" className="btn btn--primary">ارسال کد تایید</button>
            </form>
        </div>
    )
}

export default SendOTPForm