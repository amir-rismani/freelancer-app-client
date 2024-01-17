
function RadioInput({ name, title, value, className, onChange, checked }) {
    return (
        <div className="radio-input">
            <input type="radio" id={value} name={name} value={value} className={`radio-button ${className}`} onChange={onChange} checked={checked} />
            <label className="cursor-pointer" htmlFor={value}>{title}</label>
        </div>
    )
}

export default RadioInput