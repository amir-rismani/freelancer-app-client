import useMoveBack from "../hooks/useMoveBack"

function NotFound() {
    const moveBack = useMoveBack();
    return (
        <div className="text-center py-20">
            <p className="text-xl font-extrabold text-center">صفحه ای که به دنبال آن می‌گردید پیدا نشد.</p>
            <button className="btn btn--primary mt-5" onClick={moveBack}>بازگشت</button>
        </div>
    )
}

export default NotFound