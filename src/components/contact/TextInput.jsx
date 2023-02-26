function TextInput({ type, name, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            id={name}
            onChange={onChange}
            className="w-80 md:w-[26rem] text-sm outline-none border-none p-4 rounded-[10px] shadow-s2 mb-3 placeholder:text-black"
            required
        />
    );
}

export default TextInput;
