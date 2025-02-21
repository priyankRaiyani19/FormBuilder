import React, {useState} from 'react';
import {options} from "../data/options";

const InputCreator = ({onAddField}) => {
    const [field, setField] = useState({
        type: 'text',
        label: '',
        placeholder: '',
        options: [],
        validation: {
            required: false,
            max: '',
            min: '',
            maxLength: '',
            pattern: '',
        },
    });

    const [showValidation, setShowValidation] = useState(false);
    const [newOption, setNewOption] = useState("");

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        if (type === 'checkbox') {
            setField({...field, validation: {...field.validation, [name]: checked}});
        } else {
            setField({...field, [name]: value});
        }
    };

    const handleValidationChange = (e) => {
        const {name, value, type, checked} = e.target;
        setField({
            ...field,
            validation: {...field.validation, [name]: type === 'checkbox' ? checked : value},
        });
    };

    const handleAddOption = () => {
        if (newOption.trim() !== "") {
            setField({...field, options: [...field.options, newOption.trim()]});
            setNewOption("");
        }
    };

    const handleRemoveOption = (index) => {
        setField({...field, options: field.options.filter((_, i) => i !== index)});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddField({...field, id: Date.now()});
        setField({
            type: 'text',
            label: '',
            placeholder: '',
            options: [],
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
        <div className="w-full bg-[#001F3F] p-5  border-2 text-white rounded-lg">

            <div className={`flex text-[#16213E] items-center justify-center gap-4 `}>
                <h2 className="text-3xl font-bold min-w-fit text-[#DBD8E3]">
                    Layout
                </h2>
            </div>

            <div className="p-4 text-white rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="scroll-auto flex flex-col gap-[1rem]">
                        <label className="block font-medium text-xl">Field Type:</label>
                        <select name="type" value={field.type} onChange={handleChange}
                                className="w-full p-3 border rounded text-black text-2xl font-semibold">
                            {options.map(ele => (
                                <option key={ele.id} value={ele.value}>{ele.text}</option>
                            ))}
                        </select>
                    </div>

                    <div className="text-white flex flex-col gap-[1rem]">
                        <label className="block font-medium text-xl">Name:</label>
                        <input type="text" name="label" required placeholder="Enter name of field"
                               value={field.label} onChange={handleChange}
                               className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                    </div>

                    {field.type === "select" && (
                        <div className="text-white flex flex-col gap-[1rem]">
                            <label className="block font-medium text-xl">Options:</label>
                            <div className="flex gap-2">
                                <input type="text" value={newOption} onChange={(e) => setNewOption(e.target.value)}
                                       placeholder="Enter option"
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                                <button type="button" onClick={handleAddOption}
                                        className="bg-green-600 px-4 py-2 rounded text-white font-bold">Add
                                </button>
                            </div>
                            <ul>
                                {field.options.map((option, index) => (
                                    <li key={index}
                                        className="flex justify-between items-center mt-2 bg-gray-700 p-2 rounded">
                                        {option}
                                        <button type="button" onClick={() => handleRemoveOption(index)}
                                                className="text-red-400 font-bold">X
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="text-white flex flex-col gap-[1rem]">
                        <label className="block font-medium text-xl">Placeholder:</label>
                        <input type="text" name="placeholder" required value={field.placeholder}
                               onChange={handleChange} placeholder="Enter placeholder"
                               className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                    </div>

                    <div className="text-white flex items-center gap-[1rem] text-[1.5rem]">
                        <input type="checkbox" id="showvalid" defaultChecked={false}
                               className="w-[2rem] h-[2rem] checked:text-green-600"
                               onChange={() => setShowValidation(!showValidation)}/>
                        <label htmlFor="showvalid">Show Validation</label>
                    </div>

                    {showValidation && (
                        <div className="p-3 border rounded bg-gray-800 font-bold text-gray-100 flex flex-col">
                            <label className="font-medium text-2xl flex items-center gap-[1rem] py-3">
                                <input type="checkbox" name="required" checked={field.validation.required}
                                       onChange={handleValidationChange}
                                       className="text-gray-800 w-[2rem] h-[2rem]"/> Required
                            </label>
                            <div className="flex flex-col gap-[1rem]">
                                <label className="block font-medium text-xl">Min:</label>
                                <input type="number" name="min" value={field.validation.min}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Max:</label>
                                <input type="number" name="max" value={field.validation.max}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Max Length:</label>
                                <input type="number" name="maxLength" value={field.validation.maxLength}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-2xl font-semibold"/>
                            </div>
                            <div>
                                <label className="block font-medium text-xl">Pattern:</label>
                                <input type="text" name="pattern" value={field.validation.pattern}
                                       onChange={handleValidationChange}
                                       className="w-full p-3 border rounded text-black text-xl font-semibold"/>
                            </div>
                        </div>
                    )}

                    <button type="submit"
                            className="px-4 py-5 text-xl font-bold bg-[#9290C3] text-white rounded">Add Field
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputCreator;
