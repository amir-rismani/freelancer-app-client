function SendOTPForm() {
    return (
        <div className="w-full sm:max-w-sm mx-auto">
            <form className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="mobile" className="block">شماره موبایل</label>
                    <input
                        id="mobile"
                        type="text"
                        placeholder="09123456789"
                        className="text-field" />
                </div>
                <button type="submit" className="btn btn--primary">ارسال کد تایید</button>
            </form>
        </div>
    )
}

export default SendOTPForm