function TextSelect({ children, name, onChange }) {
    return (
        <select
            name={name}
            id={name}
            onChange={onChange}
            className="w-80 md:w-[26rem] text-sm outline-none border-none p-4 rounded-[10px] shadow-s2 mb-3 appearance-none"
            required
        >
            {children}
        </select>
    );
}

export default TextSelect;
