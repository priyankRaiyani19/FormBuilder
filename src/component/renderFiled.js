import React, {useState} from 'react';

const RenderField = ({field}) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    switch (field.type) {
        case "text":
        case "password":
        case "tel":
        case "url":
        case "search":
        case "number":
        case "time":
        case "date":
        case "datetime-local":
        case "week":
        case "month":
        case "range":
        case "radio":
        case "checkbox":
            return (
                <div className="mb-4 ">
                    <label className="block font-medium text-2xl ">{field.label}</label>
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded text-black"
                        required={field.validation?.required}
                        min={field.validation?.min}
                        max={field.validation?.max}
                        maxLength={field.validation?.maxLength}
                        // pattern={field?.validation?.pattern || ""}

                    />
                </div>
            );
        case "email":
            return (
                <div className="mb-4 ">
                    <label className="block font-medium text-2xl ">{field.label}</label>
                    <input
                        type={field?.type}
                        placeholder={field?.placeholder}
                        className="w-full p-2 border rounded text-black"
                        required={field.validation?.required}
                        min={field?.validation?.min}
                        max={field?.validation?.max}
                        maxLength={field?.validation?.maxLength}
                        pattern={field?.validation?.pattern}
                    />
                </div>
            );
        case "textarea":
            return (
                <div className="mb-4">
                    <label className="block font-semibold text-2xl mb-1">{field.label}</label>
                    <textarea
                        placeholder={field.placeholder}
                        rows="4"
                        className="w-full p-2 border rounded text-gray-800 bg-gray-300 text-xl font-semibold"
                    />
                </div>
            );
        case 'select':
            return (
                <div className="flex flex-col mb-4 text-black gap-[1rem]">
                    <label className="block font-medium text-white text-3xl">{field.label}</label>
                    <select
                        value={selectedValue}
                        onChange={handleChange}
                        required={field.validation?.required}
                        className="w-full p-3 border rounded text-black text-2xl font-semibold bg-gray-300"
                    >
                        <option value="" disabled className="text-gray-500 text-xl">
                            Select an option
                        </option>
                        {field.options?.map((option, index) => (
                            <option key={index} value={option} className="text-black">
                                {option}
                            </option>
                        ))}
                    </select>
                    {field.validation?.required && !selectedValue && (
                        <p className="text-red-500 text-lg mt-1">This field is required</p>
                    )}
                </div>
            );
        default:
            return null;
    }
};

export default RenderField;
