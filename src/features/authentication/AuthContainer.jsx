import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authServices";
import { useMutation } from "@tanstack/react-query";

const ACTIVE_STEP = 1;

function AuthContainer() {
    const [step, setStep] = useState(ACTIVE_STEP);
    const [phoneNumber, setPhoneNumber] = useState("");

    const { isPending: isPendingOtp, data: dataOtpResponse, mutateAsync } = useMutation({
        mutationFn: getOtp
    })

    const sendOtpHandler = async (ev) => {
        ev.preventDefault();
        try {
            const data = await mutateAsync({ phoneNumber })
            setStep(prevStep => prevStep + 1)
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1: return <SendOTPForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} onSubmitOtp={sendOtpHandler} isPendingOtp={isPendingOtp} />
            case 2: return <CheckOTPForm phoneNumber={phoneNumber} setStep={setStep} onSubmitOtp={sendOtpHandler} isPendingOtp={isPendingOtp} dataOtpResponse={dataOtpResponse} />
            default: return null
        }
    }


    return (
        renderStep()
    )
}

export default AuthContainer