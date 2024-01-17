import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import OtpInput from 'react-otp-input';
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { HiArrowRight } from "react-icons/hi";

const RESET_TIME = 90;
const TIME_INTERVAL = 1000;

function CheckOTPForm({ phoneNumber, setStep, isPendingOtp, onSubmitOtp }) {
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(RESET_TIME)
    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOtp
    })
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setInterval(() => {
            if (time > 0) setTime(prevTime => prevTime - 1)
        }, TIME_INTERVAL)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time]);

    const checkOtpHandler = async (ev) => {
        ev.preventDefault();
        try {
            const { message, user } = await mutateAsync({ phoneNumber, otp });
            toast.success(message)
            if (!user.isActive) return navigate('/complete-profile')
            if (user.status !== 2) {
                toast("پروفایل شما در انتظار تایید است.", { icon: "👏" })
                return navigate('/');
            }
            if (user.role === 'OWNER') return navigate('/owner');
            if (user.role === 'FREELANCER') return navigate('/freelancer');
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <button><HiArrowRight className="text-xl text-primary" onClick={() => setStep(step => step - 1)} /></button>
            <form className="space-y-4" onSubmit={checkOtpHandler}>
                <label>کد یکبار مصرف را وارد نمایید:</label>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>&nbsp;</span>}
                    renderInput={(props) => <input type="number" {...props} />}
                    containerStyle="flex-row-reverse justify-content-center"
                    shouldAutoFocus
                    inputStyle="flex-1 px-5 py-2 border-2 border-stroke outline-none rounded-md focus:border-primary"
                />
                <div className="flex justify-center text-dark">{time > 0 ? `${time} ثانیه تا ارسال مجدد کد` : isPendingOtp ? <Loader width="20" height="24" /> : <button type="button" className="text-primary" onClick={onSubmitOtp}>ارسال مجدد کد</button>}</div>
                {isPending ? <Loader /> : <button type="submit" className="btn btn--primary w-full">اعتبار سنجی</button>}
            </form>
        </div>
    )
}

export default CheckOTPForm