import React from "react";

const TextInput = ({ id, name, value, onChange, placeholder, type = "text" }) => {
    return (
        <div className="w-full">
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:font-semibold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
            />
        </div>
    );
};

export default TextInput;
