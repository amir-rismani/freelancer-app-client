function TextInput({ title, name, value, onChange, className, placeholder }) {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block">{title}</label>
            <input
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`text-field ${className}`} />
        </div>)
}

export default TextInput