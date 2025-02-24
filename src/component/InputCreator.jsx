import React, { useState, useEffect } from 'react';
import { options } from "../data/options";

const InputCreator = ({ onAddField, editingField,setEditingField }) => {
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

    useEffect(() => {
        if (editingField) {
            setField(editingField);
            setShowValidation(!!editingField.validation);
        }
    }, [editingField]);


    const onCancelEdit = () => {

        setEditingField(false);
        setShowValidation(false);
        // setField(null);
        setField({...field, type: 'text', label: '',placeholder: ""     });

    }

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

    const handleAddOption = () => {
        if (newOption.trim() !== "") {
            setField({ ...field, options: [...field.options, newOption.trim()] });
            setNewOption("");
        }
    };

    const handleRemoveOption = (index) => {
        setField({ ...field, options: field.options.filter((_, i) => i !== index) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddField(field);
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
        <div className="">
            <h2 className="text-3xl font-bold w-full text-center text-[#DBD8E3]">{editingField ? 'Edit Field' : 'Create Field'}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-4">
                    <label className="text-xl">Field Type:</label>
                    <select name="type" value={field.type} onChange={handleChange} className="w-full p-3 border rounded text-black text-2xl">
                        {options.map(ele => (
                            <option key={ele.id} value={ele.value}>{ele.text}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-xl">Name:</label>
                    <input type="text" name="label" required placeholder="Enter field name" value={field.label} onChange={handleChange} className="w-full p-3 border rounded text-black text-2xl" />
                </div>

                {field.type === "select" && (
                    <div className="flex flex-col gap-4">
                        <label className="text-xl">Options:</label>
                        <div className="flex gap-2">
                            <input type="text" value={newOption} onChange={(e) => setNewOption(e.target.value)} placeholder="Enter option" className="w-full p-3 border rounded text-black text-2xl" />
                            <button type="button" onClick={handleAddOption} className="bg-green-600 px-4 py-2 rounded text-white font-bold">Add</button>
                        </div>
                        <ul>
                            {field.options.map((option, index) => (
                                <li key={index} className="flex justify-between items-center mt-2 bg-gray-700 p-2 rounded">
                                    {option}
                                    <button type="button" onClick={() => handleRemoveOption(index)} className="text-red-400 font-bold">X</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <label className="text-xl">Placeholder:</label>
                    <input type="text" name="placeholder" required value={field.placeholder} onChange={handleChange} className="w-full p-3 border rounded text-black text-2xl" />
                </div>

                <div className="flex items-center gap-4 text-xl">
                    <input type="checkbox" id="showvalid" checked={showValidation} onChange={() => setShowValidation(!showValidation)} className="w-6 h-6" />
                    <label htmlFor="showvalid">Show Validation</label>
                </div>

                {showValidation && (
                    <div className="p-3 border rounded bg-gray-800 font-bold text-gray-100">
                        <label className="flex items-center gap-4 text-xl">
                            <input type="checkbox" name="required" checked={field.validation.required} onChange={handleValidationChange} className="w-6 h-6" />
                            Required
                        </label>
                        <label className="text-xl">Min:</label>
                        <input type="number" name="min" value={field.validation.min} onChange={handleValidationChange} className="w-full p-3 border rounded text-black text-2xl" />
                        <label className="text-xl">Max:</label>
                        <input type="number" name="max" value={field.validation.max} onChange={handleValidationChange} className="w-full p-3 border rounded text-black text-2xl" />

                        <label className="text-xl">maxLength:</label>
                        <input type="number" name="maxLength" value={field.validation.maxLength} onChange={handleValidationChange} className="w-full p-3 border rounded text-black text-2xl" />

                        <label className="text-xl">pattern:</label>
                        <input type="text" name="pattern" value={field.validation.pattern} onChange={handleValidationChange} className="w-full p-3 border rounded text-black text-2xl" />
                    </div>
                )}

                <div className="flex gap-8 w-full text-center mx-auto">
                    <button type="submit" className="px-4 py-3 text-xl font-bold bg-[#9290C3] text-white rounded">
                        {editingField ? 'Update Field' : 'Add Field'}
                    </button>
                    {editingField && (
                        <button type="button" onClick={onCancelEdit} className="px-4 py-3 text-xl font-bold bg-red-500 text-white rounded">
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default InputCreator;
