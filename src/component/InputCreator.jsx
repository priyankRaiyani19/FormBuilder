import React, { useState } from 'react';

const InputCreator = ({ onAddField }) => {
    const [field, setField] = useState({
        type: 'text',
        label: '',
        placeholder: '',
        validation: {
            required: false,
            max: '',
            min: '',
            maxLength: '',
            pattern: '',
        },
    });
    const [showValidation, setShowValidation] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setField({ ...field, validation: { ...field.validation, [name]: checked } });
        } else {
            setField({ ...field, [name]: value });
        }
    };

    const handleValidationChange = (e) => {
        const { name, value, type, checked } = e.target;
        setField({
            ...field,
            validation: { ...field.validation, [name]: type === 'checkbox' ? checked : value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddField({ ...field, id: Date.now() });
        setField({
            type: 'text',
            label: '',
            placeholder: '',
            validation: {
                required: false,
                max: '',
                min: '',
                maxLength: '',
                pattern: '',
            },
        });
        setShowValidation(false);
    };

    return (
        <div className="w-full  bg-[#081229]  p-5 text-white rounded-lg">
            <div className={`flex text-white items-center justify-center gap-4`}>
                <hr className={`text-gray-500 w-full `}/>
                <h2 className="text-3xl font-bold w-[50%]  ">Layout</h2>
                <hr  className={`text-gray-500 w-full `}/>
            </div>
        <div className="p-4  text-white rounded-lg">

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className={` scroll-auto  flex flex-col gap-[1rem]`}>
                    <label className="block font-medium text-xl">Field Type:</label>
                    <select name="type" value={field.type} onChange={handleChange} className="w-full p-2 border rounded text-black">
                        <option value="text">Text</option>
                        <option value="textarea">Textarea</option>
                        <option value="number">Number</option>
                        <option value="select">Select</option>
                        <option value="checkBox">CheckBox</option>
                        <option value="radio">Radio</option>
                        <option value="range">Range</option>
                        <option value="search">Search</option>
                        <option value="tel">Tel</option>
                        <option value="url">Url</option>
                        <option value="time"> Time</option>
                        <option value="datetime">Date Time </option>
                        <option value="email">Email</option>
                        <option value="datetime-local">Date Time Local</option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="password">password</option>
                    </select>
                </div>
                <div className={`text-white flex flex-col gap-[1rem]`}>
                    <label className="block font-medium text-xl">Name:</label>
                    <input type="text" name="label" required={true} value={field.label} onChange={handleChange} className="w-full p-2 font-semibold text-xl border rounded text-black" />
                </div>
                <div className={`text-white flex flex-col gap-[1rem]`}>
                    <label className="block font-medium text-xl">Placeholder:</label>
                    <input type="text" name="placeholder" required={true} value={field.placeholder} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div className={`text-white flex items-center gap-[1rem] text-[1.5rem]`}>
                    <input type="checkbox" className={`w-[2rem] h-[2rem] checked:text-green-600 `} onChange={() => setShowValidation(!showValidation)} /> Show Validation
                </div>
                {showValidation && (
                    <div className="p-3 border rounded bg-gray-800 font-bold text-gray-100 flex flex-col ">
                        <label className="font-medium text-xl flex items-center gap-[1rem] py-3">
                            <input type="checkbox" name="required" checked={field.validation.required} onChange={handleValidationChange} className={`text-gray-800 w-[1rem] h-[1rem]`} /> Required
                        </label>
                        <div className="flex flex-col gap-[1rem]">
                            <label className="block font-medium text-xl">Min:</label>
                            <input type="number" name="min" value={field.validation.min} onChange={handleValidationChange} className="w-full p-1 border rounded text-gray-800" />
                        </div>
                        <div>
                            <label className="block font-medium text-xl">Max:</label>
                            <input type="number" name="max" value={field.validation.max} onChange={handleValidationChange} className="w-full p-1 border rounded text-gray-800" />
                        </div>
                        <div>
                            <label className="block font-medium text-xl">Max Length:</label>
                            <input type="number" name="maxLength" value={field.validation.maxLength} onChange={handleValidationChange} className="w-full p-1 border rounded text-gray-800" />
                        </div>
                        <div>
                            <label className="block font-medium text-xl">Pattern:</label>
                            <input type="text" name="pattern" value={field.validation.pattern} onChange={handleValidationChange} className="w-full p-1 border rounded text-gray-800" />
                        </div>
                    </div>
                )}
                <button type="submit" className="px-4 py-5 text-xl font-bold  w-full bg-[#ec5990] text-white rounded">Add Field</button>
            </form>
        </div>
        </div>
    );
};

export default InputCreator;
