import { useState } from "react"
import TextInput from "../../ui/TextInput"
import RadioInput from "../../ui/RadioInput"
import { useMutation } from "@tanstack/react-query"
import { completeProfile } from "../../services/authServices"
import toast from "react-hot-toast"
import Loader from "../../ui/Loader"

function CompleteProfileForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const { isPending, mutateAsync } = useMutation({ mutationFn: completeProfile })
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const { message } = await mutateAsync({ name, email, role });
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

    }
    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <TextInput
                    name="name"
                    title="نام و نام خانوادگی"
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                />
                <TextInput
                    name="email"
                    title="پست الکترونیک"
                    value={email}
                    className="text-left"
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                <div className="flex gap-x-5">
                    <label className="ml-5">نوع کاربر</label>
                    <RadioInput
                        name="role"
                        title="کارفرما"
                        value="OWNER"
                        onChange={ev => setRole(ev.target.value)}
                        checked={role === "OWNER"}
                    />
                    <RadioInput
                        name="role"
                        title="فریلنسر"
                        value="FREELANCER"
                        onChange={ev => setRole(ev.target.value)}
                        checked={role === "FREELANCER"}
                    />
                </div>
                {isPending ? <Loader /> : <button type="submit" className="btn btn--primary w-full">تایید</button>}
            </form>
        </div>)
}

export default CompleteProfileForm